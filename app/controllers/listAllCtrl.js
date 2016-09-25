"use strict";

app.controller("listAllCtrl", function ($scope, ItemStorage, FirebaseURL) {

  ItemStorage.getItemList()
  .then( (itemCollectionArray) => {
    $scope.workouts = itemCollectionArray;
  });
});
