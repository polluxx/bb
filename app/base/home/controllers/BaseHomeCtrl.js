define(['base/home/module'], function (module) {

    module.controller('BaseHomeCtrl', ['$scope', '$location', 'bzUser', function ($scope, $location, bzUser) {
		
    }]).directive("adminBlock", function() {
        return {
            restrict:"A",
            link: function(scope, element, attrs) {
                element.bind("click", function() {
                    element.removeClass("passive");
                })

                element.on("mouseleave", function() {
                    element.addClass("passive");
                })
            }
        }
    });

});