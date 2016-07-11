var eventsApp = angular.module('eventsApp',[])

eventsApp.controller('myCtrl',function ($scope) {
    $scope.c = 0
    $scope.visible = false
    $scope.toggle = function () {
        $scope.visible = !$scope.visible
    }
})
