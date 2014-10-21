define([
    'modules/add/item/module'
], function (module) {
    'use strict';

    module.controller('AddItemCtrl', ['$scope', 'bzUser', function($scope, bzUser) {
		$scope.item = {};
		$scope.types = [
			{
				id:1,
				name:"user"
			},
			{
				id:2,
				name:"block"
			},
			{
				id:3,
				name:"floor"
			}
		];
		$scope.item.type = 1;
		
        $scope.add = function(item) {
			if(item.name == undefined) {
				alert('Set user name!');
				return;
			}
			
			console.log(item);
		}
    }]);

});