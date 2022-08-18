function myFunction() {
  console.log('This Log is from my Jivrus Account 123456786876');
}

function myNewFunction() {
  //New Test Enivroment Cool Cool.
}

function writEmailToAuthor(){
  var to = 'gokul@jivrus.com, giogokul13@gmail.com';
  MailApp.sendEmail({
    to: to,
    subject: 'HELLO HAPPY TESTING',
    htmlBody: 'NEW VERSION 15 TESTING COOL!!!!'
  });
}

function getScriptToken(){
  var token = ScriptApp.getOAuthToken();
  console.log('token ====> ', token);
}

function jivrus(){
  // this function is return from my jivrus account
}

//var array = [];
//for (var index = 0; index < array.length; index++) {
//  const element = array[index];
//} //is a new function to all out there

//New Tender comment
// New Time

// My another changes in Google AppScript