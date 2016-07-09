var selectApp  = angular.module('selectApp',[])

selectApp.controller('myCtrl',function ($scope,$http) {
    $http.get('https://api.github.com/users/Gaohaoyang/followers').success(function (response) {
        $scope.followers = response
    })
})
