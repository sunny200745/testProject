'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp',['ui.bootstrap'])
  .controller('MainCtrl',['$scope', '$modal', '$rootScope', function ($scope, $modal, $rootScope) {
    
    var modalController = function($scope){
 		$scope.items = ["choice1","choice2"];
 		$scope.role = {'selectedRole' : "choice1"};
	    $rootScope.itemsArr = ["h1","h2"]

	  	$scope.ok = function () {
	  		console.debug($scope.role.selectedRole)
	    	//modal.close();
	    	$rootScope.itemsArr.splice(0,1);
	    	console.debug($rootScope.itemsArr)
	  	};

	  	$scope.cancel = function () {
	    	modal.dismiss('cancel');
	  	};

	  	
    };

    var modal = $modal.open({
      templateUrl: './views/modalHtml.html',
      controller : modalController
    });

    
  }]);