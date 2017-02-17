var $ = require('jquery');
// var Backbone = require('backbone');

var models = require('./models/models.js');
var views = require('./views/views.js');

$(function(){

  // instantiating
  var blogForm = new views.BlogForm();
  $('.app').append(blogForm.render().$el);

  // var blogCollection = new views.BlogCollection();
});
