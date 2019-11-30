const proxy =require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/ajax",proxy({
        target:"https://midway.51tiangou.com",
        changeOrigin:true,
        pathRewrite:{
            "^ajax":""
        }
    }))
}