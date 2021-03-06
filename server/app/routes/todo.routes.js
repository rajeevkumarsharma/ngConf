'use strict';

/**
 * Module dependencies.
 */
var todos = require('../../app/controllers/todo.controller');

/**
 * Todos routes
 */
module.exports = function (apiRoutes) {

  // 
  apiRoutes.param('todoId', todos.todo);

  // Server API Routes
  apiRoutes.route('/todos')
    .post(todos.create)
    .get(todos.query);

  // Server API Routes
  apiRoutes.route('/todos/:todoId')
    .post(todos.create)
    .get(todos.show)
    .put(todos.update)
    .delete(todos.remove);
};