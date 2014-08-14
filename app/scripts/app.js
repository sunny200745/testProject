'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular.module('testApp', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	 $routeProvider.
	  when('/admin', {
	    templateUrl: 'views/admin.html',
	    controller: 'AdminCtrl'
	  }).
	  otherwise({
	    redirectTo: '/admin'
	  });
}]);