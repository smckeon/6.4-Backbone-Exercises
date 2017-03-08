var Handlebars = require('handlebars');
var Backbone = require('backbone');

var blogListTemplate = require('../../templates/blog_title_list.hbs');
var blogContent = require('../../templates/blog_content.hbs');


var BlogList = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-group',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.addPost)
  },
  render: function(){
    return this;
  },
  addPost: function(post){
    var listItem = new BlogContent({model: post});
    this.$el.append(listItem.render().el);
  }
});


var BlogContent = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: blogListTemplate,

  render: function(){
    var renderTemplate = this.template(this.model.toJSON());
    this.$el.html(renderTemplate);
    return this;
  }
});

var ContentView = Backbone.View.extend({
  className: 'content-view',
  template: blogContent,

  render: function(){
    var renderTemplate = this.template(this.model.toJSON());
    this.$el.html(renderTemplate);
    return this;
  }
});

module.exports = {
  BlogList : BlogList,
  BlogContent : BlogContent,
  ContentView: ContentView
}

//use assignment a end point to fetch data
// populate the tiny lasagna {{blog_title}} {{blog_content}}
