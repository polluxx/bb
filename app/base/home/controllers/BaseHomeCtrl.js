define(['base/home/module'], function (module) {

    module.controller('BaseHomeCtrl', ['$scope', '$location', 'bzUser', function ($scope, $location, bzUser) {
		
    }]).directive("adminBlock", function() {
        return {
            restrict:"A",
            link: function(scope, element, attrs) {
			var interval;
            var mapped = angular.element(document.getElementById("mapped"));

                element.bind("click", function() {
                    element.removeClass("passive");
                    mapped.addClass("disabled");
                })
				
                element.on("blur", function() {
					element.addClass("passive");
                    mapped.removeClass("disabled");
                })
            }
        }
    }).directive("mainContainer", function() {
        return {
            restrict:"A",
            link: function(scope, element, attrs) {
                var mapped = angular.element(document.getElementById("admBl"));

                element.on("click", function() {
                    mapped.addClass("passive");
                    element.removeClass("disabled");
                })
            }
        }
    });

});