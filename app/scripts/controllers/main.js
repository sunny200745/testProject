'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl',['$scope','$http','$rootScope', function ($scope,$http,$rootScope) {
    $scope.moduleName = "main";
     
    $http({
        method: 'GET', 
        url: './json/products.json'
      }).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        
        $rootScope.products = data;

      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });



  }]);