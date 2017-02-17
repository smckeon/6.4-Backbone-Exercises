var $ = require('jquery');
var Backbone = require('backbone');


var Blog = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: 'https://tiny-lasagna-server.herokuapp.com/collections/smckeonblog'
});


// var BlogCollection = Backbone.Collection.extend({
//   model: Blog,
//   url: 'https://tiny-lasagna-server.herokuapp.com/collections/smckeonblog'
// });

module.exports = {
  Blog: Blog,
  // BlogCollection: BlogCollection
};
