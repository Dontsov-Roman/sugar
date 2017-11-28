const fs = require('fs');

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('./common.config.js');

const babelrc = fs.readFileSync('../.babelrc');
let config;

try {
    config = JSON.parse(babelrc);
} catch (err) {
    console.error('==>     ERROR: Error parsing your .babelrc.');
    console.error(err);
}
require('babel-core/register')(config);

let server;
(function initWebpack() {
    const compiler = webpack(webpackConfig);
    server = new WebpackDevServer(compiler,
        {
            proxy:{
                target:{
                    port:8080
                }
            },
            publicPath: webpackConfig.output.publicPath,
            hot: true,
            inline: true,
            historyApiFallback: true,
            quiet: false,
            noInfo: false,
            lazy: false,
            stats: {
                colors: true,
                hash: false,
                version: false,
                chunks: false,
                children: false,
            }
        }
    );
    server.listen(8080);
})();
