

const firebaseConfig = {
    apiKey: "AIzaSyBSCUttrWGmbmUufxcxEQ53u-rBlsgANjs",
    authDomain: "apna-bank-app.firebaseapp.com",
    databaseURL: "https://apna-bank-app-default-rtdb.firebaseio.com",
    projectId: "apna-bank-app",
    storageBucket: "apna-bank-app.appspot.com",
    messagingSenderId: "516049631837",
    appId: "1:516049631837:web:e3a004ae7504e1e22aebb4",
    measurementId: "G-ND6P1YGNBG"
};
firebase.initializeApp(firebaseConfig);

var contactFromDB = firebase.database().ref("createAcc");
document.getElementById("createAcc").addEventListener("submit", submitFrom);


function submitFrom(e) {
    e.preventDefault();
    var name=getElementVal("name");
    var emailid = getElementVal("emailid");
    var number = getElementVal("number");
    var aadhar = getElementVal("aadhar");
    // var emailid = getElementVal("emailid");
    // var password = getElementVal("password");
    // console.log(name,emailid,number,aadhar);
    saveMessages(name,emailid, number,aadhar);
}
const saveMessages = (name,emailid,number,aadhar) => {
    var newContactFrom = contactFromDB.push();

    newContactFrom.set({
        name:name,
        emailid: emailid,
        number:number,
        aadhar:aadhar,
        // password: password,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}