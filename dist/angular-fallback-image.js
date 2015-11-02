(function(){
	angular.module('angular-fallback-image', []).directive('srFallback', function(){
		return {
			restrict: 'A',
			link: function($scope, element, attributes) {				
				var elem = element;
				var attrs = attributes;
				
				element.on('error', function() {
					if(elem.attr('src') === attrs.srFallback) {
						throw new Error('The supplied fallback image doesn\'t exist');
					}
					elem.attr('src', attrs.srFallback);
				});
			}
		};
	});	
})();