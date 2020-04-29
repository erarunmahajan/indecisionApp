const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module:{
        rules:[
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test:/\.s?css$/i,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer:{
        contentBase: path.resolve(__dirname,'public'),
        compress: true,
        port: 8080
    }

}