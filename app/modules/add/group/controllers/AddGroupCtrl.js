define([
    'modules/add/group/module'
], function (module) {
    'use strict';
	
	
    module.controller('AddGroupCtrl', ['$scope', 'bzUser', function($scope, bzUser) {
		$scope.block = {};
		$scope.errors = [];
		
        $scope.add = function(group) {
			
			$scope.errors = [];
			
			if(group.name == undefined) {
				$scope.errors.push({name:"name", message:"Must be setted"});
			}
			if(group.type == undefined) {
				$scope.errors.push({name:"type", message:"Must be setted"});
			}
			
			if($scope.errors.length > 0) {
				return;
			}
			
			
		}
    }]).directive('messag', function() {
		return {
			restrict: 'A',
			scope: false,
			link: function(scope, element, attrs) {
				scope.$watch('errors', function() {
					if (scope.errors.length > 0) {
						angular.forEach(scope.errors, function(error) {
							if(element[0].name == error.name) {
								element.parent().addClass("has-error");
							} else {
								element.parent().removeClass("has-error");
							}
						})
					} else {
						element.parent().removeClass("has-error");
					}
				})
			}
		}
	});

});