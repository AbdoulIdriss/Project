//signUp button and sign in button switch functionalities 

let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');

signinBtn.onclick = function() {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function() {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

//form functionalities 
let form = document.getElementById('form2')

form.addEventListener('submit', (e) => {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userInfo = {usernAme:username, email:email , password:password,};
    localStorage.setItem('userdata', JSON.stringify(userInfo));
    alert("Succesfully stored");
});

let retrieveData = localStorage.getItem('userdata');
let parsedData = JSON.parse(retrieveData);

//retriving the email and password 
let {email, password} = parsedData;
console.log('Here is the data from the local storage');