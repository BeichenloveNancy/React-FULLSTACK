'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
  router.get('/list', controller.home.list);
  router.post('/addList', controller.home.add);
  router.post('/update', controller.home.update);
  router.get('/getDetail/:id', controller.home.getDiaryById);


  router.get('/user', controller.user.index);
  router.get('/getId/:id', controller.user.getId);
  router.post('/add', controller.user.add);
  router.get('/getUser', controller.user.index);
};
