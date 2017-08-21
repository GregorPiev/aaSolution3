var parentController = function ($scope) {
    $scope.parenttitle = "Gregory Mudjamitrjas";
    $scope.parentcontent = "If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support.";
};
angular.module('solApp').controller("ParentController", ["$scope", parentController]);