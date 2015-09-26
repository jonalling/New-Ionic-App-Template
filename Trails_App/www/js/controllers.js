angular.module('starter.controllers', [])

.controller('MotionCtrl', function($window, $scope, $timeout, $ionicPlatform, $cordovaDeviceMotion) {

  ////// Dims of window, ion-content, and div (remove if uneccessary)
  $scope.fullWidth = $window.innerWidth;
  $scope.fullHeight = $window.innerHeight;
  $scope.width = angular.element(document.querySelector('#main'))[0].offsetWidth;
  $scope.height = angular.element(document.querySelector('#main'))[0].offsetHeight;
  $scope.contentWidth = angular.element(document.querySelector('#content'))[0].offsetWidth;
  $scope.contentHeight = angular.element(document.querySelector('#content'))[0].offsetHeight;

  $scope.svgHeight = $scope.width; // change if you want portrait rect instead of square
  $scope.chartHeight = $scope.contentHeight - $scope.svgHeight - 25;


  var zRange = 20, // size range of dot
      padding = 22,
      dataId = 0; // padding to show whole dot along edge


  $scope.data = [];


  // Start Cordova code, returning dot position relative to accerlation (responsive size)
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

        // Scale Dot Position
        var xVar = (((result.x * -1)+9.81)*(($scope.width-(padding*2))/(9.81*2)))+padding;
        var yVar = (((result.y)+9.81)*(($scope.svgHeight-(padding*2))/(9.81*2)))+padding;
        var zVar = (((result.z * -1)+9.81)*(zRange/(9.81*2)))+10;
        var mag = Math.sqrt($scope.X*$scope.X + $scope.Y*$scope.Y + $scope.Z*$scope.Z);

        // Draw Trailing Dots
        if ($scope.data.length > 30) {
          $scope.data.pop();
          $scope.data.unshift({id: dataId, x: xVar,	y: yVar, z: zVar, s: mag});
          dataId++;
        } else {
          $scope.data.unshift({id: dataId, x: xVar,	y: yVar, z: zVar, s: mag});
          dataId++;
        }

        // $scope.singleCircle = {'x': data[0].x, 'y': data[0].y, 'r': data[0].z};

        $scope.circles = [];

        for (i = 0; i < 9; i++) {
          opacityPercent = 1 - (i/10);
          $scope.circles.unshift({'opacity': opacityPercent, 'x': $scope.data[i].x, 'y': $scope.data[i].y, 'r': $scope.data[i].z});
        }

        x = d3.time.scale().range([0, $scope.width]);
        y = d3.scale.linear().range([$scope.chartHeight, 0]);

        x.domain(d3.extent($scope.data, function(d) {return d.id}));
        // y.domain(d3.extent($scope.data, function(d) {return d.s}));
        y.domain([0,25]);

        $scope.line = d3.svg.line()
            .x(function(d) {return x(d.id);})
            .y(function(d) {return y(d.s);});

    }); // end watch callback function

  }); // end $ionicPlatform.ready

}); // end MotionCtrl
