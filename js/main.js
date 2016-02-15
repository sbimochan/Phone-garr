var app = angular.module('ionicApp', ['ionic'])
app.controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft()
    }
})