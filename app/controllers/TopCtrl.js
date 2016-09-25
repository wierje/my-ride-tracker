'use strict';

app.controller('TopCtrl', function($scope, $location, $window, AuthFactory) {
  $scope.isLoggedIn = false;
  let currentUser = null;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    currentUser = user.uid;
    $scope.isLoggedIn = true;
    console.log('current user logged in', user.uid);
    $scope.$apply();
  } else {
    $scope.isLoggedIn = false;
    $window.location.href = '#/login';
  }
  $scope.$apply();
});

  $scope.getUser = function() {
    return currentUser;
  };

$scope.logout = function() {
  AuthFactory.logoutUser()
  .then(function(data) {
    console.log("logged out", data);
  });
};

});
