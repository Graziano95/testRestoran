const path = require("path")

module.exports = {
    entry : "./source/index.js",
    output : {
        filename : "bundle.js",
        path : path.resolve(__dirname,"./dist")
    },
    devServer: {
        static: {
        directory: path.resolve(__dirname, "./source")
        },
        port: 3307,
        client: {overlay:{
            errors: false,
            warnings: false,
        }}
    }
}