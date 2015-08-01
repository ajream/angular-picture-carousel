angular.module('pictureCarousel', ['ui.bootstrap'])
.controller('CarouselCtrl',['$scope', function($scope){
  
  $scope.slides = [];
  $scope.slides.push({text: 'lf1', image: './assets/images/1.jpg'});
  $scope.slides.push({text: 'lf2', image: './assets/images/2.jpg'});
  $scope.slides.push({text: 'lf3', image: './assets/images/3.jpg'});
  $scope.slides.push({text: 'lf4', image: './assets/images/4.jpg'});
  $scope.slides.push({text: 'lf5', image: './assets/images/5.jpg'});
 
 $scope.setActive = function(idx) {
   $scope.slides[idx].active=true;
  }
  
}]);