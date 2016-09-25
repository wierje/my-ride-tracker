"use strict";

app.controller("ItemPostCtrl", function($scope, ItemStorage, $location) {
  $scope.title = "Post a new ride";
  // $scope.btnText="Add task";

  $scope.newTask = {
    uid: $scope.$parent.getUser()
    };

    $scope.addNewItem = function() {
      ItemStorage.addNewItem($scope.newTask)
      .then(function() {
        $location.url("/ride/all");
      });
    };


});



