import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import * as common from './webpack.common';

const config: webpack.Configuration = merge(common, {
    mode: 'production',
    plugins: [
        new UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
});

module.exports = config;
