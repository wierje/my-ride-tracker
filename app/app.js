'use strict';

var app = angular.module('Rides', ["ngRoute"])
.constant("FirebaseURL", "https://my-ride-tracker.firebaseio.com");

let isAuth = (AuthFactory) => new Promise( (resolve, reject) => {
  if (AuthFactory.isAuthenticated()) {
    console.log("auth user");
    resolve();
  } else {
    console.log("not auth user");
    reject();
  }
});

app.config(function($routeProvider) {
  $routeProvider.
    when("/", {
    templateUrl: "partials/login.html",
    controller: "LoginCtrl"
  }).
  when("/ride/list", {
    templateUrl: "partials/ride-list.html",
    controller: "rideCtrl"
  })

  // when("/login", {
  //   templateUrl: "partials/login.html",
  //   controller: "LoginCtrl"
  // }).

  .when("/ride/all", {
    templateUrl: "partials/ride-all.html",
    controller: "listAllCtrl",
    // resolve: {isAuth}
  })
  .otherwise("/");

});


    app.filter('distance', function () {
return function (input) {
    if (input >= 1000) {
        return (input/1000).toFixed(2);
    } else {
        return input;
    }
}
});


    app.filter('miles', function () {
return function (input) {
    if (input >= 100) {
        return (input*0.000621371).toFixed(2);
    } else {
        return input;
    }
}
});


    app.filter('calories', function () {
return function (input) {
    if (input >= 1) {
        return (input*.0002389).toFixed(0);
    } else {
        return input;
    }
}
});


    app.filter('minutes', function () {
return function (input) {
    if (input >= 1) {
        return (input/60).toFixed(2);
    } else {
        return input;
    }
}
});



app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };
  firebase.initializeApp(authConfig);
});

