'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async user() {
    return {
      title: '你叫啥',
      content: '云栖'
    }
  }
}

module.exports = UserService
