var $ = require('jquery');
var Backbone = require('backbone');


var models = require('./models/models.js');
var views = require('./views/views.js');


var AppRouter = Backbone.Router.extend({

    routes: {
        '': 'index',
        'home': 'home'
    },

    index: function() {
      var blogCollection = new models.BlogCollection();
      var blogList = new views.BlogList({collection: blogCollection});

      $('.blog-listing').html(blogList.render().$el);
      blogCollection.fetch();
    },

    home: function(){
      console.log('Im Home!');
    },
});

var appRouter = new AppRouter();

module.exports = appRouter;
