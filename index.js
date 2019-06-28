const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const config = require('./config/default.js');
const app = new Koa()

app.use(bodyParser({
  formLimit: '1mb'
}))

//  路由
 app.use(require('./router/api/init').routes())  //初始化管理员账户


app.listen(config.port)

console.log(`listening on port ${config.port}`)