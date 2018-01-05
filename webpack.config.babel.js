import path from 'path'
import webpack from 'webpack'


export default {
entry:{
 core: "./src/core.js",
 vendor: ['react', 'react-dom', 'redux']
},
output:{
 path: path.resolve(__dirname,'build'),
 filename: "[name].js",
   
},
module: {
    rules:[{
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
    },
    {
        loader: ['style-loader','css-loader'],
        test: /\.css$/,
        exclude: /node_modules/
    }]
},
plugins:[
    new webpack.optimize.CommonsChunkPlugin({
        names: ["vendor","manifest"]     
    })
]
}