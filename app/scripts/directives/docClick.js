// Create an application module for our demo.
var testApp = angular.module( "testApp", [] );

testApp.directive(
			"docClick",
			function( $document, $parse ){
 
				// I connect the Angular context to the DOM events.
				var linkFunction = function( $scope, $element, $attributes ){
 
					// Get the expression we want to evaluate on the
					// scope when the document is clicked.
					var scopeExpression = $attributes.bnDocumentClick;
 
					var invoker = $parse( scopeExpression );
 
					// Bind to the document click event.
					$document.on(
						"click",
						function( event ){
console.debug("#########")

							$scope.$apply(function(){invoker($scope,{
											$event: event
										}
									);
 
								}
							);
 
						}
					);
 
				};
				// Return the linking function.
				return( linkFunction );
 
			}
		);