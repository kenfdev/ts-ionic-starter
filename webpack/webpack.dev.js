var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app/app.module.ts'
    },
    output: {
        filename: '[name].js',
        path: './www/js'
    },

    resolve: {
        extensions: ['', '.ts']
    },

    devtool: 'source-map',

    plugins: [],

    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: ['awesome-typescript-loader']
            }
        ]
    }
};
