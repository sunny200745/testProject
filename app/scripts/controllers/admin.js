'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
var testApp = angular.module('testApp')
  .controller('AdminCtrl',['$scope','$http', function ($scope,$http) {
    $scope.moduleName = "admin";
   

  $scope.editQtyCalled = function(product){
  	$scope.quantity = product.Qty	
  	$scope.editQtyProdName = product.Name;
  	var newQty = $scope.quantity
  	console.debug(newQty)

  };
  $scope.editPriceCalled = function(product){
  	
  	$scope.editPriceProdName = product.Name;
  };

  $scope.saveQtyCalled = function(product){
  	console.debug(product);
  };
  $scope.savePriceCalled = function(product){
  	console.debug(product);
  	
  };


  $scope.currentPage = 0;
  $scope.pageSize = 7;
  $scope.visibleData = [];
  
  

  

  for (var i=0; i<$scope.products.length; i++) {
    $scope.visibleData.push($scope.products[i]);
  }

  console.debug($scope.visibleData)

  $scope.next = function(){    
    $scope.currentPage += 1;
    console.debug($scope.currentPage)
  };

  $scope.prev = function(){
    if($scope.currentPage === 0){
      return false;
    }
    $scope.currentPage -= 1;

  }

  $scope.numberOfPages=function(){
    return Math.ceil($scope.visibleData.length/$scope.pageSize);                
  }
  console.debug($scope.numberOfPages())

  $scope.getNumber = function(num) {
    return new Array(num());   
  };



  }]);
  testApp.filter('startFrom', function() {
      return function(input, start) {
          start = +start; //parse to int
          return input.slice(start);
      }
  });
