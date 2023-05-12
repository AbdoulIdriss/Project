

let signup = document.getElementById('sign');
let signupform = document.getElementById('disabled');
let loginform = document.getElementById('login')
let signin = document.getElementById('log')
console.log(signup);
function toogle() {


    signup.addEventListener('click', () => {
        loginform.setAttribute('id', 'disabled');
        signupform.setAttribute('id', 'signup');
    })

    signin.addEventListener('click', () => {
        signupform.setAttribute('id', 'disabled');
        loginform.setAttribute('id', 'login');
    })
} `              `

toogle()


let form1 = document.getElementById('signupform');
console.log(form1);

form1.addEventListener('submit', (e) => {
    function store() {
        e.preventDefault();
        let uname = document.getElementById('uname');
        let pass = document.getElementById('password');
        let pass1 = document.getElementById('password1')
        let email = document.getElementById('email')
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]/g;
        let error = document.getElementById('helper-text');
        let special = /\W/g;

        if (uname.value.length == 0) {
            alert('Please enter your name');

        } else if (pass.value.length == 0) {
            alert('Password needed');

        } else if (uname.value.length == 0 && pass.value.length == 0) {
            alert('Please fill in username and password');

        } else if (pass.value.length < 8) {
            alert('Max of 8');

        } else if (!pass.value.match(numbers)) {
            alert('please add 1 number');

        } else if (!pass.value.match(upperCaseLetters)) {
            alert('please add 1 uppercase letter');

        } else if (!pass.value.match(lowerCaseLetters)) {
            alert('please add 1 lovercase letter');

        } else if (!pass.value.match(special)) {
            alert('please add 1 special character');

        } else if (pass1.value.length == 0) {
            alert('Please confirm password');

        } else if (pass1.value !== pass.value) {
            alert('Passwords dont match');

        } else {


            if (localStorage.getItem("userData") == null) {
                let userData = [];
                let user = {
                    username: uname.value,
                    email: email.value,
                    password: pass.value
                }

                userData.push(user)
                localStorage.setItem('userData', JSON.stringify(userData));
            }
            else {
                let data = localStorage.getItem("userData");
                   let pdata =JSON.parse(data)
                   let user={
                       username:uname.value,
                       email:email.value,
                       password:pass.value
                    }
                    pdata.push(user)
                    console.log(pdata);
                    
                
                
            }
            }}
            store();
    
        })

                // const hasrshedPas = CryptoJS.SHA256(pass).toString();


                // // creating user object
                // let userData = {
                //     name: uname.value,
                //     email: email.value,
                //     password: hasrshedPas,
                // }

                // // saving to localstorage
                // localStorage.setItem('userData', JSON.stringify(userData));

                // alert('Your details have been successfully saved to our system. Thanks')
            
// function me(e) {
//     let s = localStorage.getItem(userdata)
//     let l = a.parseInt(a)

//     if( b = null ) {
//         const userdata = [];
//     }
//     let user = {name: me,
//                 email: me,
//                 password: me,}

//     userdata.push(user)
//     localStorage.setItem('users', JSON.stringify(userdata))
// }