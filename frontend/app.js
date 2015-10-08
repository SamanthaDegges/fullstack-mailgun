var app = angular.module('app', []);

app.controller("appCtrl", function($scope, $http) {

});



$("#consider").on("click", function(){
  var $content = $(this).find('li').val();
  $("list").text($content);
})
