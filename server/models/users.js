var waterline = require('waterline');
var bcrypt = require('bcrypt');

var users = waterline.Collection.extend({
  identity: 'users',
  connection: 'myMongo',

  attributes: {

    email: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    },

    firstname: {
      type: 'string',
      required: true
    },

    lastname: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      required: true
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  beforeCreate: function(values, next){
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(values.password, salt, function(err, hash) {
        if (err) return next(err);

        values.password = hash;
        next();
      });
    });
  }
});

module.exports = users;