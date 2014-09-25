
'use strict';
/* global Nav */

angular.module('testApp')
  .directive('testdirective', function($document,$rootScope,data) {
    var fn = {
      link: function(scope, elem, attrs) {
      	var attributes = attrs;
        var element = elem
      	var selectedItem,elemID;
       /* $document.on('click',function(ev){
        	if(ev.target.className.indexOf('quantity') > -1 || ev.target.className.indexOf('price') > -1){
        		elemID = ev.target.attributes['id'].value.split("_")
        		angular.forEach($rootScope.adminScope.visibleData,function(prod){
        			if(Number(elemID[0]) === prod.Id){
        				selectedItem = prod;
        				return false;
        			}
        		});
        		if(elemID[1] === 'Qty'){
        			$rootScope.adminScope.editQtyCalled(selectedItem);
        		}else{
        			$rootScope.adminScope.editPriceCalled(selectedItem);
        		}
        	}
        	scope.$apply();

        	
        });*/
        console.debug(element)


      }
    };
    return fn;
  });