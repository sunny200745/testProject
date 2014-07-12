'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
var testApp = angular.module('testApp', ['ngRoute']);
testApp.config(['$routeProvider',function($routeProvider) {
$routeProvider.
  when('/admin', {
    templateUrl: 'views/admin.html',
    controller: 'AdminCtrl'
  }).
  otherwise({
    redirectTo: '/admin'
  });
}]);
