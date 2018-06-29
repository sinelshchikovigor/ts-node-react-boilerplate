import * as path from 'path';
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import * as common from './webpack.common';

const DEV_PORT = 4001;
const DEV_PROXY = 4000;

const config: webpack.Configuration = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: DEV_PORT,
        contentBase: path.resolve(__dirname, '../../temp/dist'),
        open: true,
        proxy: {
            '/api': {
                target: DEV_PROXY,
                secure: false,
            },
        },
        historyApiFallback: true,
    },
});

module.exports = config;
