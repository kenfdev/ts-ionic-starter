var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app/app.ts',
        controllers: './src/app/controllers.ts',
        services: './src/app/services.ts'
    },
    output: {
        filename: '[name].js',
        path: './www/js'
    },

    resolve: {
        extensions: ['', '.ts']
    },

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
