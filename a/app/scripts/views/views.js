var $ = require('jquery');
var Backbone = require('backbone');

var blogForm = require('../../templates/blog_form.hbs');
var models = require('../models/models.js');



var BlogForm = Backbone.View.extend({
  tagName: 'form',
  template: blogForm,

  events: {
    "click #blog-submit": 'createBlog'
  },

  createBlog: function(event){
    event.preventDefault();
    // taking form inputs and creating an object
    var formData = this.$el.serializeObject();
    // creating a new instance of blog model with formData
    var blog = new models.Blog(formData);
    // save model to the server
    blog.save();
    // clear form inputs
    this.$el[0].reset();
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
  BlogForm: BlogForm
};
