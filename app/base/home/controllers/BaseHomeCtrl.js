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
				
                /*element.on("blur", function() {
					element.addClass("passive");
                    mapped.removeClass("disabled");
                })*/
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
    }).directive("floors", function() {
		return {
			restrict:"E",
			templateUrl:"../../../../views/directives/floors.html",
			link: function(scope, element, attrs) {
				
			}
		}
	}).directive("addFloor", function() {
		return {
			restrict:"E",
			link: function(scope, element, attrs) {
				element.on("click", function() {
					console.log("create floor");
				})
			}
		}
	}).directive("drop", function() {
		return {
			restrict:"E",
			templateUrl:"../../../../views/directives/dropable.html",
			link: function(scope, element, attrs) {
				
			}
		}
	}).directive("draggable", function() {
		return {
			restrict: "A",
			link: function(scope, element, attrs) {
				var el = element[0];
				
				el.draggable = true;
				
				/*element.on("dragstart", function(e) {
					console.log(e);
					e.dataTransfer.effectAllowed("move");
					this.addClass("drag");
					return false;
				})
				
				
				element.on("dragend", function(e) {
					
					this.removeClass("drag");
					return false;
				})*/
				
		el.addEventListener(
            'dragstart',
            function(e) {
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('Text', this.id);
                this.classList.add('drag');
                return false;
            },
            false
        );

        el.addEventListener(
            'dragend',
            function(e) {
                this.classList.remove('drag');
                return false;
            },
            false
        );
			}
		}
	});

});