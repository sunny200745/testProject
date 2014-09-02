'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
var testApp = angular.module('testApp');
  testApp.controller('AdminCtrl',['$scope','$http','data', '$rootScope', 'popupService' ,function ($scope,$http, data, $rootScope, popupService) {
    $scope.moduleName = "admin";
    $rootScope.adminScope = $scope;
    $scope.editQtyProdName ;
    $scope.editPriceProdName ;
    data.products(function(d){
      if(d){
        $scope.visibleData = d;
      }
    });
    //$scope.products = [];
    $scope.editQtyCalled = function(product){
    	$scope.quantity = product.Qty
    	$scope.editQtyProdName = product.Name;
    	var newQty = $scope.quantity;
      $scope.editPriceProdName = "";

    };
    $scope.editPriceCalled = function(product){
    	$scope.editPriceProdName = product.Name;
      $scope.editQtyProdName = "";
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



    /*$scope.checkEdit = function(product){
      if(product && $scope.editQtyProdName){
        return product.Name === $scope.editQtyProdName
      }

    };*/



    //console.debug($scope.visibleData)

    $scope.next = function(){
      $scope.currentPage += 1;
      //console.debug($scope.currentPage)
    };

    $scope.prev = function(){
      if($scope.currentPage === 0){
        return false;
      }
      $scope.currentPage -= 1;

    };

    $scope.numberOfPages=function(){
      return Math.ceil($scope.visibleData.length/$scope.pageSize);
    };

    $scope.numberOfDummyPages=function(){
      return 6;
    };
   // console.debug($scope.numberOfPages())

    $scope.getNumber = function(num) {
      return new Array(num());
    };

    $scope.mouseLeft = function(product){
      console.debug("mouseLeft");
      if(popupService.isOpenDialog('hoverPopup')){
        popupService.closeDialog('hoverPopup');
        popupService.removeDialog('hoverPopup');
      }
    };

    $scope.mouseEntered = function(product){
      console.debug("mouseEntered");
      if(popupService.isOpenDialog('hoverPopup')){
        popupService.closeDialog('hoverPopup');
        popupService.removeDialog('hoverPopup');
      }
      popupService.dialog("hoverPopup", $scope, 'hover', product,function(){},function(){})
    };

    $scope.onCLickPagedNumber = function(number){
      console.debug(number)
      console.debug($scope.currentPage)
      $scope.currentPage = number;
      console.debug($scope.currentPage)
    };

  }]);


