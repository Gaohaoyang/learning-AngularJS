var selectApp = angular.module('tableApp', [])

selectApp.controller('myCtrl', function($scope, $http) {
    $http.get('https://api.github.com/users/Gaohaoyang/followers?page=1&per_page=500').success(function(response) {
        $scope.followers = response
    })
})
