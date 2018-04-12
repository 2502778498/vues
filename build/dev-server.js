var express = require('express')
var app = express()
var appData = require('../mock/db.json') //引入json文件
app.use('/api',apiRoutes)//定义域名下的访问路径