var moduleApp= angular.module('module',[])

moduleApp.controller('myCtrl',function ($scope) {
    $scope.userName = 'chuan shi'
})

moduleApp.directive('ghy',function () {
    return {
        template:'<h1>directive</h1>'
    }
})
