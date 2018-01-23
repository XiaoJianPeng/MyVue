var  webpack = require('webpack');
module.exports={
    entry:'./main.js',

    output:{
        path:__dirname,
        filename:'build.js'
    },
    
    module:{
        loaders:[
            {test:/\.vue$/,loader:'vue-loader'},
            {test:/\.js$/,loader:'babel-loader',exclude:/node_modules/}
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                babel: {
                    presets:['es2015'],
                    plugins:['transform-runtime']
                }
            }
        })
    ]
    // babel:{
    //     presets:['es2015'],
    //     plugins:['transform-runtime']
    // }
    
}