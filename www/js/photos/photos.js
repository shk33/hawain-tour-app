angular.module('App')
.controller('PhotosController', function ($scope, $ionicPlatform, $cordovaCamera) {
  $scope.photos = [];

  $scope.getPhoto = function (type) {
    $ionicPlatform.ready(function () {
      $cordovaCamera.getPicture({
        destinationType: navigator.camera.DestinationType.FILE_URL,
        sourceType: navigator.camera.PictureSourceType[type.toUpperCase()]
      }).then(function(photo) {
        $scope.photos.unshift(photo);
      }, function (err) {
        console.log(err);
      });
    });
  };
  
});