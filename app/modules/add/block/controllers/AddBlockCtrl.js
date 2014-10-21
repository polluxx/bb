define([
    'modules/add/block/module'
], function (module) {
    'use strict';
	
	
    module.controller('AddBlockCtrl', ['$scope', 'bzUser', function($scope, bzUser) {
		$scope.block = {};
		$scope.errors = [];
		$scope.files;
		$scope.types = [
			{
				id:1,
				name:"active"
			},
			{
				id:2,
				name:"passive"
			},
			{
				id:3,
				name:"layer"
			}
		];
		$scope.block.type = 1;
		
		$scope.$watch("files", function() {
			if ($scope.files != undefined) {
				$scope.errors = [];
				angular.forEach($scope.files, function(file) {
					file.fakename = file.name;
					if(file.type.indexOf("image") == -1) {
						file.error = true;
						$scope.errors.push({name:"files[]", message:"Undesireable file type"});
					} else {

					}
				})
			}
		})
		
        $scope.add = function(block) {
			
			$scope.errors = [];
			if(block.typename == undefined) {
				$scope.errors.push({name:"typename", message:"Must be setted"});
			}
			if($scope.files == undefined) {
				$scope.errors.push({name:"files[]", message:"Must be setted"});
			}
			
			if($scope.errors.length > 0) {
				//return;
			}
			
			var fd = new FormData()
			for (var i in $scope.files) {
				fd.append("uploadedFile", $scope.files[i])
			}
			
			console.log(fd);
			console.log($scope.files);
			
		}
    }]).directive('fileInput', ['$parse', function($parse) {
       return {
           restrict: 'A',
           scope: false,
           link: function(scope, elm, attrs) {
               elm.bind(
                   'change', function() {
                       $parse(attrs.fileInput)
                       .assign(scope, elm[0].files);
                       scope.$apply();
                   }
               )
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
	}).directive("preloading", function() {
		return {
			restrict:"E",
			scope:{
				file:"=data"
			},
			link: function(scope, element, attrs) {
				if(scope.file.error != undefined) return;
				
				var reader = new FileReader();
				reader.onload = (function (tFile) {
					return function (evt) {
						var div = document.createElement('div');
                        var num = 30;
                        if (scope.file.size > 5000) {
                            num = 90;
                        }
						div.innerHTML = '<img style="width: '+num+'px;" src="' + evt.target.result + '" />';
						element[0].appendChild(div);
					};
				}(scope.file));
				reader.readAsDataURL(scope.file);
			}
		}
	});

});