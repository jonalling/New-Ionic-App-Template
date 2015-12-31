angular.module('starter.controllers', [])

.controller('AppCtrl', function($window, $scope, $ionicModal, $ionicPlatform) {

  ////// Dims of window, ion-content, and div
  $scope.fullWidth = $window.innerWidth;
  $scope.fullHeight = $window.innerHeight;
  $scope.width = angular.element(document.querySelector('#main'))[0].offsetWidth;
  $scope.height = angular.element(document.querySelector('#main'))[0].offsetHeight;

  ////// MODAL //////
  $ionicModal.fromTemplateUrl('templates/settings.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeSettings = function() {
    $scope.modal.hide();
  };

  $scope.openSettings = function() {
    $scope.modal.show();
  };

}); // end MotionCtrl
