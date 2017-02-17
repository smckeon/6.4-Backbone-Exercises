var $ = require('jquery');
var Backbone = require('backbone');

var models = require('../models/models.js');
var contactForm = require('../../templates/contact_form.hbs');


var ContactForm = Backbone.View.extend({
  tagName: 'form',
  template: contactForm,

  events: {
    "click #submit_button": "createPerson"
  },

  createPerson: function(event){
    event.preventDefault();
    var formData = this.$el.serializeObject();
    var formCapture = new models.Contact(formData);
    console.log(formData);
    formCapture.save();
    this.el.reset();
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

});

$.fn.serializeObject = function() {
 return this.serializeArray().reduce(function(acum, i) {
   acum[i.name] = i.value;
   return acum;
 }, {});
};

module.exports = {
  ContactForm: ContactForm
};
