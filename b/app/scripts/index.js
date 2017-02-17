var $ = require('jquery');

var models = require('./models/models.js');
var views = require('./views/views.js');

$(function(){

  var contactForm = new views.ContactForm();
  $('.app').append(contactForm.render().$el);

});
