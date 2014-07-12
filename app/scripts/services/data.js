var module = angular.module('testApp', []);
 
module.service('data', ['$http',function($http){
    var products  = [];

    this.getProducts = function(){

    	return products;
    };

    this.setProducts = function(prod){
      	products.push(prod)
    };


}]);