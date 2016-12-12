/**
******************************************************
* Use your project's Web App config settings in
* firebaseConfig object.
* To find your firebase web settings:
* 1.] Log into Firebase console.
* 2.] Select your firebase project
* 3.] Go to Overview -> Project Settings.
* 4.] Click on "Add Firebase to your web app"
* 5.] Copy 'var config' object into 'firebaseConfig'
*******************************************************
*/
module.exports = {
  firebaseConfig : {
    apiKey: "yourApiKey",
    authDomain: "yourproject.firebaseapp.com",
    databaseURL: "https://yourproject.firebaseio.com",
    storageBucket: "yourproject.appspot.com",
    messagingSenderId: "someUniqueId"
  },
  dbRoot: "message-app",
  initialMessage: {
    admin: true,
    user: "Admin User",
    text: "Welcome!  this is a test message from admin.",
    timestamp: Math.floor((new Date()).getTime() / 1000)
  }
};
