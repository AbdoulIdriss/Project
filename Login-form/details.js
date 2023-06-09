let form = document.getElementById('forms');

form.addEventListener('submit', (e) => {
    let email = document.getElementById("e-mail").value;
    let password = document.getElementById("pw").value;
    let username = document.getElementById("name").value;

    //

    let user = {
        email:email,
        password:password,
        username:username,
    };

    localStorage.setItem('userdata', JSON.stringify(user));
    //console.log(localStorage)
    alert("stored");
});

let retrieveData = localStorage.getItem('userdata');
let parsedData = JSON.parse(retrieveData);

//retriving the email and password only
let {email, password} = parsedData;
console.log('this is the data coming from our local storage',{email, password});


//submit button

let submite = document.getElementById('signUp-forms');

submite.addEventListener('submit', (e) => {

    //data from login form

    let loginemail = document.getElementById("submite-mail").value;
    let loginpassword = document.getElementById("submitpw").value;

    let upperCase = /[A-Z]/;
    let lowerCase = /[a-z]/;
    let number = /[0-9]/;
    let specialCharacter = /[^A-Za-z0-9]/;

    if (loginemail == 0 && loginpassword==0) { alert('Please enter a password');}
    else if(loginemail == 0) {alert('Enter an email');}
    else if(loginpassword.length == 0) {alert('Enter password');}
    else if(loginpassword.length < 8) {alert('Password must contain atleast 8 characters');}
    else if(!loginpassword.match(upperCase)) {alert('Add an uppercase letter');}
    else if(!loginpassword.match(lowerCase)) {alert('Add a lower case');}
    else if (!loginpassword.match(number)) {alert('add a number');}
    else if (!loginpassword.match(specialCharacter)) {alert('Add atleast one special character');}

    //data from local storage

    let localretrievedData = localStorage.getItem('userdata');
    let localparsedData = JSON.parse(localretrievedData);

    //destructuring localparsedData and comparing with the e-mail and password stored in the local storage
    let {loginemail:localstorageemail, loginpassword:localstoragepassword} = localparsedData;
    
    if(loginemail == localstorageemail && loginpassword == localstoragepassword) {
        alert("succesful");
    }
    else {
        alert("Invalid Informations");
    }
});