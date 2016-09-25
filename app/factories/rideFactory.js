"use strict";

app.factory("rideFactory", ($q, $http) => {

  let getRides = function() {
    return $q((resolve, reject) => {
      $http.get('../../data/09222016.json')
      // $http.get('https://oauth2-api.mapmyapi.com/v7.1/workout/?started_after=2016-09-20T00%3A00%3A01%2B00%3A00&user=3705682')
      .success((ridesObject) => {
        resolve (ridesObject);
      })
      .error((error) => {
        reject(error);
      });
   });
  };

  return {getRides};

});