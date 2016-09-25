'use strict';

app.factory('ItemStorage',($q, $http, FirebaseURL) => {

let getItemList =() => {
  console.log();
  let items = [];
  return $q((resolve, reject) => {
    $http.get(`${FirebaseURL}/workouts.json?`)
    // $http.get(`${FirebaseURL}/items.json`)
    .success((itemObject) => {
      if (itemObject !== null) {
      Object.keys(itemObject).forEach((key)=> {
        itemObject[key].id = key;
        items.push(itemObject[key]);
      });
      resolve(items);
    } else {
      resolve(items);
    }
  })
    .error((error) => {
      reject(error);
    });
  });

};

return {getItemList};

});
