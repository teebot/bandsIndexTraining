const path = require('path');

module.exports = {
    entry: './src/app.tsx',
    output: {
        path: path.resolve(__dirname, 'static/js'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    devtool: 'source-map'
};