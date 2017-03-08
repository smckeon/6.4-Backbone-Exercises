var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/models.js');
var views = require('./views/views.js');


var AppRouter = Backbone.Router.extend({

    routes: {
        '': 'index',
        'content/:id': 'showContent'
    },

  initialize: function(){
    this.blogCollection = new models.BlogCollection();
    this.blogPost = new models.BlogPost();
  },

  index: function(){
    var blogList = new views.BlogList({collection: this.blogCollection, model: this.BlogPost});
    $('.blog-listing').html(blogList.render().el)
    this.blogCollection.fetch()
  },

  showContent: function(id){
    var model = this.blogCollection.findWhere({'_id': id});
    var content = new views.ContentView({model: model});
    $('.content-view').html(content.render().el)

  },
});

var appRouter = new AppRouter();

module.exports = appRouter;
