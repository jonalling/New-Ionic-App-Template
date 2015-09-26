angular.module('starter.services', [])

.factory('yourName', function() {

  // Some fake testing data
  var foo = [];

  return {
    all: function() {
      return foo;
    }
  };
});
