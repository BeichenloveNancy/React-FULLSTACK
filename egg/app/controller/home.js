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

  async list() {
    const { ctx } = this;
    const result = await ctx.service.diary.list();
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败'
      }
    }
  }

  async add() {
    const { ctx } = this
    // 服务端获取客户端提交过来的参数
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.diary.add(params)
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '添加失败'
      }
    }
  }

  async update() {
    const { ctx } = this
    // 服务端获取客户端提交过来的参数
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.diary.update(params)
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '编辑失败'
      }
    }
  }

  async getDiaryById() {
    const { ctx } = this
    console.log(ctx.params)
    const result = await ctx.service.diary.diaryById(ctx.params.id)
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询失败'
      }
    }
  }

  async delete() {
    const { ctx } = this
    // 与通过id拿到详细信息不同的是 通过query拿id 而 详细信息需要通过params去拿取 
    const { id } = ctx.request.body
    const result = await ctx.service.diary.delete(id)
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '编辑失败'
      }
    }
  }
}

module.exports = HomeController;
