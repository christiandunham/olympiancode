angular.module('olyCode', [])
.controller('TargetController', function($scope) {
    $scope.EmptyPackageSummaryVersion  = 'f';//$http.get('olympiancode.com/api/EmptyPackageSummary/CurrentVersion');
    $scope.ReceiptTransformerVersion = versionCheck.ReceiptTransformerVersion;
    console.log('ran');
});