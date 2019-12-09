const path = require("path");
const axios = require("axios")
module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': [
                    './src/theme',
                    "./src/common/stylus/mixin.styl",
                    "./src/common/stylus/variable.styl"
                ]
            }
        }
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src'),
                'components': path.join(__dirname, 'src/components'),
                'common': path.join(__dirname, 'src/common'),
                "views": path.join(__dirname, "src/views"),
                "api": path.join(__dirname, "src/api"),
                "base": path.join(__dirname, "src/base")
            }
        }
    },
    devServer: { //跨域配置
        proxy: {
            '/api': {
                target: "https://c.y.qq.com/",
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }

        },
        before(app) {
            app.get('/api/getDiscList', (req, res) => {
                var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
                axios.get(url, {
                    headers: {
                        referer: 'https://c.y.qq.com/',
                        host: 'c.y.qq.com'
                    },
                    params: req.query
                }).then((response) => {
                    res.json(response.data)
                }).catch((e) => {
                    // console.log(e)
                })
            })

        }

    }

}