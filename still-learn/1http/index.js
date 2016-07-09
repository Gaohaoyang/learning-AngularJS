var app = angular.module('httpApp', [])
app.controller('followers', function($scope, $http) {
    $http.get('https://api.github.com/users/Gaohaoyang/followers').success(function (response) {
        $scope.followers = response
    })
})
