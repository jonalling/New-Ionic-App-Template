angular.module('starter.controllers', [])

.controller('MotionCtrl', function($window, $scope, $ionicPlatform, $cordovaDeviceMotion) {

  ////// Dims of window, ion-content, and div (remove if uneccessary)
  $scope.fullWidth = $window.innerWidth;
  $scope.fullHeight = $window.innerHeight;
  $scope.width = angular.element(document.querySelector('#main'))[0].offsetWidth;
  $scope.height = angular.element(document.querySelector('#main'))[0].offsetHeight;
  $scope.contentWidth = angular.element(document.querySelector('#content'))[0].offsetWidth;
  $scope.contentHeight = angular.element(document.querySelector('#content'))[0].offsetHeight;

  // Start Cordova code
  $ionicPlatform.ready(function(){

    var options = { frequency : 40 }; //plugin min 40ms, max 1000ms
    var watch = $cordovaDeviceMotion.watchAcceleration(options);

    watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {
        $scope.X = result.x;
        $scope.Y = result.y;
        $scope.Z = result.z;
        $scope.timeStamp = result.timestamp;

    }); // end watch callback function

  }); // end $ionicPlatform.ready

}); // end MotionCtrl
