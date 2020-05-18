// 拿到数据库数据

'use strict';

const Service = require('egg').Service;

class DiaryService extends Service {
  async list() {
    const { ctx } = this
    try {
      // app -> egg
      const result = await ctx.app.mysql.select('diary')
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async add(params) {
    const { ctx } = this
    try {
      // app -> egg
      const result = await ctx.app.mysql.insert('diary', params)
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async update(params) {
    const { ctx } = this
    try {
      // app -> egg
      const result = await ctx.app.mysql.update('diary', params)
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async diaryById(id) { // 根据id获取日记详情
    const { ctx } = this
    if (!id) {
      console.log('id不能为空')
      return null
    }
    else {
      try {
        const result = await ctx.app.mysql.query('select * from diary where id = ?', id);
        // const result = await ctx.app.mysql.select('diary', {
        //   where: { id }
        // })
        return result
      }
      catch (error) {
        console.log(error)
        return null
      }
    }
  }
}

module.exports = DiaryService