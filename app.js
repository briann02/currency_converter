// app.js
var app = angular.module('myApp', []);
 
// list of currencies
app.controller('DisplayController', function($scope) {
    $scope.currencies = ["USD", "JPY", "EUR"];
});

// conversion logic
app.controller('ConvertController', function($scope) {

    // table of exchange rates
    const exchangeRates = {
      USD: {JPY: 144.9, EUR: 0.88}, 
      JPY: {USD: 0.0069, EUR: 0.00606},
      EUR: {JPY: 165.5, USD: 1.14}
    }

    $scope.convert = function() {
      const curr1 = $scope.base_curr;
      const  curr2 = $scope.new_curr;
      const base =  $scope.base_num;

      if (curr1 && curr2 && base && exchangeRates[curr1] && exchangeRates[curr1][curr2]) {
        $scope.final_num = base * exchangeRates[curr1][curr2];
        $scope.final_curr = curr2;
      } else {
        $scope.final_num = null;
      }
    }
});