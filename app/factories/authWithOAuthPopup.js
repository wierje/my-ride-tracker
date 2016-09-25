var ref = new Firebase("https://my-ride-tracker.firebaseio.com");
ref.authWithOAuthPopup("twitter", function(error, authData) {
  if (error) {
    console.log("Authentication Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});