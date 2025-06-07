// app.js
var app = angular.module('myApp', []);
 
// list of currencies
app.controller('DisplayController', function($scope) {
    $scope.currencies = ["U.S. Dollar", "JP Yen", "Euro"];
});

// conversion logic
app.controller('ConvertController', function($scope) {
    
});