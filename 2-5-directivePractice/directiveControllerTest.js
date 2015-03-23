/**
 * directiveControllerTest Module
 *
 * Description
 */
var myModule = angular.module('directiveControllerTest', []);

myModule.controller('MyCtrl', ['$scope',
    function($scope) {
        $scope.loadData = function() {
            console.log('加载数据中...');
        };
    }
]);

myModule.controller('MyCtrl2', ['$scope',
    function($scope) {
        $scope.loadData2 = function() {
            console.log('加载数据中...222');
        };
    }
]);

myModule.directive('loader', function() {
    return {
        restrict: "E",
        link: function($scope, iElm, iAttrs) {
        	iElm.bind('mouseenter', function() {
        		//$scope.loadData();
        		//$scope.$apply("loadData()");
        		$scope.$apply(iAttrs.howtoload);
        	});
        }
    };
});