'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    await ctx.render('index.html', {
      title: '欢迎来到全栈html'
    }) // 让上下文直接渲染html
  }

  async test() {
    const { ctx } = this;
    ctx.body = '测试接口'
  }
}

module.exports = HomeController;
