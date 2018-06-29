import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    context: path.resolve(__dirname),
    entry: './src/www.tsx',
    output: {
        path: path.resolve(__dirname, 'temp/dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            include: [
                path.resolve(__dirname, './src'),
                path.resolve(__dirname, '../common'),
            ],
            exclude: [
                'node_modules',
                '../server',
            ],
            loader: 'ts-loader',
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            include: /flexboxgrid/,
        }],
    },
    resolve: {
        modules: [
            'node_modules',
        ],
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            common: path.resolve(__dirname, '../common/'),
            www: path.resolve(__dirname, '../www/src'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'node-react',
            filename: 'index.html',
        }),
    ],
};

module.exports = config;
