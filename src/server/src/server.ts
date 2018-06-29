import * as express from 'express';
import {useExpressServer} from 'routing-controllers';
import * as cookieParser from 'cookie-parser';
import * as path from 'path';
import * as webpack from 'webpack';
import * as middleware from 'webpack-dev-middleware';
import * as session from 'express-session';
import * as passport from 'passport';
import * as history from 'connect-history-api-fallback';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import {Config, Log, DB} from './core';
import {GraphQLController, Auth, AuthController, DocsController} from './components';
import * as webpackDevConfig from '../../www/webpack.dev';

/**
 * Server class. Used to run server instance.
 *
 * @class
 */
export abstract class Server {
    /**
     * Method used for running server instance.
     *
     * @static
     */
    public static run() {
        Log.info(`Server initialization started...`);
        Log.info(`Current mode: ${process.env.NODE_ENV}`);

        Config.init();

        const port = Config.get('port');
        const app = express();

        Server.initMiddleware(app);
        DB.init();
        Auth.init();
        Server.initControllers(app);

        app.use('/', (req: express.Request, _res: express.Response, next: express.NextFunction) => {
            Log.info(`Request: ${req.url}`);
            Log.info(`Request Params: ${JSON.stringify(req.params)}`);
            Log.info(`Request Body: ${JSON.stringify(req.body)}`);

            next();
        });

        if (Config.isDevelopmentMode) {
            Server.runDevMiddleware(app);
        }

        app.listen(port, () => {
            Log.info(`Server is running on port: ${port}`);
        });
    }

    /**
     * Initializes application controllers.
     *
     * @static
     * @param {express.Application} app Express application
     */
    public static initControllers(app: express.Application) {
        const controllers: any[] = [];

        if (Config.get('docsUrl') && !Config.isProductionMode) {
            controllers.push(DocsController);
        }

        controllers.push(
            AuthController,
            GraphQLController,
        );

        useExpressServer(app, {
            routePrefix: '/api',
            controllers,
        });

        if (Config.isProductionMode) {
            Log.info('Using static content for production...');
            app.use('/', express.static(path.resolve(__dirname, '../../www/temp/dist')));
        }
    }

    /**
     * Initializes webpack-dev-middleware.
     *
     * @static
     * @param {express.Application} app Express application instance
     * @memberof Server
     */
    public static runDevMiddleware(app: express.Application) {
        Log.info('Starting webpack-dev-middleware...');
        const compiler = webpack(webpackDevConfig);

        app.use(middleware(compiler, {
            publicPath: '/',
        }));
    }

    /**
     * Initializes application middleware.
     *
     * @static
     * @param {express.Application} app Express application instance
     * @memberof Server
     */
    public static initMiddleware(app: express.Application) {
        app.use(helmet());
        app.use(history());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
        app.use(cookieParser());
        app.use(session({secret: 'secret', resave: false, saveUninitialized: false}));
        app.use(passport.initialize());
        app.use(passport.session());
    }
}

Server.run();
