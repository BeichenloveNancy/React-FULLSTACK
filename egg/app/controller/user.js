'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx)
    const { title, content } = await ctx.service.user.user();
    // const { username } = ctx.query;
    // ctx.body = username;
    ctx.body = {
      title,
      content
    }
  }

  async getId() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = id;
  }

  async add() {
    const { ctx } = this;
    const { title, content } = ctx.request.body;
    ctx.body = {
      title,
      content
    }
  }
}

module.exports = UserController;
