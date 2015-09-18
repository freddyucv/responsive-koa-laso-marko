var marko = require('marko');
var koa = require('koa');
var app = koa();
var _ = require('koa-route');
var userAgent = require('koa-useragent');
var lasso = require('lasso');
var serverStatic = require('koa-static');

app.use(userAgent());
app.use(serverStatic('./'));

app.use(_.get('/hello', function *(){
  var isMobile = this.state.userAgent;

  this.body = marko.load(require.resolve('./hello-world.marko'))
    .stream({
      name: 'World',
      colors: ["red", "green", "blue"],
      flag: isMobile ? ['mobile'] : ['no-mobile']
});

  this.type = 'text/html';
}));

app.listen(3000);
