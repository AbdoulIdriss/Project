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
console.log('this is the data comiung from our local storage',{email, password});


//submit button

let submite = document.getElementById('signUp-forms');

submite.addEventListener('submit', (e) =>{

    //data from login form

    let loginemail = document.getElementById("submite-mail").value;
    let loginpassword = document.getElementById("submitpw").value;

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