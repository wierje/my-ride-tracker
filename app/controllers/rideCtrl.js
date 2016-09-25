'use strict';

app.controller("rideCtrl", function ($scope, $q, $http, rideFactory, $location, FirebaseURL) {
  $scope.title="My Ride Tracker";
    $scope.rides = [];

    $scope.getMyRide = () => {
     rideFactory.getRides()
    .then( (response) => {
        $scope.rides = response;
        console.log($scope.rides);
      });
};
   $scope.getMyRide();

   $scope.saveData = () => {
    return $q((resolve, reject) => {
    $http.post(`${FirebaseURL}/workouts.json`,
      JSON.stringify($scope.rides._embedded.workouts[0]))
    .success( (ObjFromFirebase) => {
      $location.url("/ride/all");
      console.log(ObjFromFirebase);
      resolve(ObjFromFirebase);
    })
    .error( (error) => {
      reject(error);
    });
  });
};

});