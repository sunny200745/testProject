'use strict';

angular.module('testApp')
  .filter('pagedFilter', function () {
    return function(input, start) {
      start = +start; //parse to int
      //console.debug(input)
      return input.slice(start);
    }
  });
