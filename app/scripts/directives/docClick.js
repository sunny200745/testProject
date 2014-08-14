// Create an application module for our demo.
/*var testApp = angular.module( "testApp");

testApp.directive("docClick",function( $document, $parse ){
				// I connect the Angular context to the DOM events.
				var linkFunction = function( $scope, $element, $attributes ){
					// Get the expression we want to evaluate on the
					// scope when the document is clicked.
					var scopeExpression = $attributes.bnDocumentClick;

					var invoker = $parse( scopeExpression );

					// Bind to the document click event.
					$document.on("click",function( event ){
							console.debug("#########")
							$scope.$apply(function(){invoker($scope,{
								$event: event
							});
						});

					});

				};
				// Return the linking function.
				return( linkFunction );

			}
		);*/


'use strict';
/* global Nav */

angular.module('testApp')
  .directive('docclick', function($document,$rootScope,data) {
    var fn = {
      link: function(scope, elem, attrs) {
      	var attributes = attrs;
      	var selectedItem,elemID;
        $document.on('click',function(ev){
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

        	console.debug("############")
        });
      }
    };
    return fn;
  });