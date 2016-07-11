var formApp = angular.module('formApp',[])

formApp.controller('form',function ($scope) {
    $scope.master = {
        firstName:'Shi',
        lastName:'Chuan',
    }
    $scope.reset = function () {
        $scope.user = angular.copy($scope.master)
    }
    $scope.reset()
})
