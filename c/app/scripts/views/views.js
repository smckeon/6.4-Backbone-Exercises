var Backbone = require('backbone');

var models = require('../models/models.js');
var blogListTemplate = require('../../templates/blog_title_list.hbs');
var blogContent = require('../../templates/blog_content.hbs');

var BlogList = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-group',

initialize: function(){
  this.listenTo(this.collection, 'add', this.addBlog);

},

addBlog: function(blog){
  var blogContent = new BlogContent({model: blog});
  this.$el.append(blogContent.render().$el);
},

render: function(){
  return this;
},

});



var BlogContent = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',

render: function()

});


module.exports = {
  BlogList,
  BlogContent
};


//use assignment a end point to fetch data
// populate the tiny lasagna {{blog_title}} {{blog_content}}
//
