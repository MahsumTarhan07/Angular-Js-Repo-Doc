
var app = angular.module('myApp' , []);
app.controller('myCtrl', function($scope){
    $scope.firstName = "Mahsum";
    $scope.lastName = "Tarhan";
}); 



var app2 = angular.module('myApp2', []);
app2.controller("personCtrl2", function($scope){
    $scope.firstName = "Elon";
    $scope.lastName = "Musk";
    $scope.fullName = function(){
        return $scope.firstName + " : "+  $scope.lastName;
    }
})
