var Backbone = require('backbone');


var Contact = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: 'https://tiny-lasagna-server.herokuapp.com/collections/smckeonperson',
});

module.exports = {
  Contact: Contact,
};
