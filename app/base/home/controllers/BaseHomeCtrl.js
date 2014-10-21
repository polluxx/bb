define(['base/home/module'], function (module) {

    module.controller('BaseHomeCtrl', ['$scope', '$location', 'bzUser', function ($scope, $location, bzUser) {
		
    }]).directive("adminBlock", function() {
        return {
            restrict:"A",
            link: function(scope, element, attrs) {
			var interval, map = angular.element(document.getElementById("map"));
                element.bind("click", function() {
                    element.removeClass("passive");
					map.addClass("disabled");
                })
				
                element.on("mouseleave", function() {
					element.addClass("passive");   
					map.removeClass("disabled");				
                })
            }
        }
    });

});