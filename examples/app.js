(function(){
	angular.module('fallback-app', [
		'angular-fallback-image'
	]).controller('ExampleController', [function() {
		this.Placeholder = 'placeholder.png';						
		this.Image = 'nonExistent.png';
	}]);
})();