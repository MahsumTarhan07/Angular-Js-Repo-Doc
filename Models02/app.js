
var app = angular.module('myApp', []);

app.controller('myCTRL', function($scope){
    $scope.firstName = "Mahsun";
    $scope.lastName = "Tarhan";
});


var directiveApp = angular.module("directiveApp1", []);
directiveApp.directive("w3TestDirective", function() {
     return {
         template : "I was made in a directive constructor!"
     };
 });