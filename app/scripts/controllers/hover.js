'use strict';

angular.module('testApp')
  .controller('HoverCtrl', function ($scope, $timeout, popupService) {
  	$scope.moduleName = "Hover_Div";
  	var timeout;
  	function renewTimeout() {
      // Cancel any previous timeout
      if(timeout) {
        $timeout.cancel(timeout);
        timeout = false;
      }
      // Close popup after 10 seconds
      timeout = $timeout(function(){
        if(popupService.isOpenDialog($scope.popupName)){
          popupService.closeDialog($scope.popupName);
          popupService.removeDialog($scope.popupName);
        }
        timeout = false;
      }, 10000);
    };
    //renewTimeout();
    //$scope.$emit('displayProductOnHover', product);

    $scope.productName = $scope.product.Name;
    $scope.productPrice = $scope.product.Price;
    $scope.productQty = $scope.product.Qty;

    $scope.mouseLeft = function(){
      console.debug("mouseLeft");
      if(popupService.isOpenDialog('hoverPopup')){
        popupService.closeDialog('hoverPopup');
        popupService.removeDialog('hoverPopup');
      }
    };
  });
