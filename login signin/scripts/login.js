

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
}

toogle()


let form1 = document.getElementById('signupform');

form1.addEventListener('submit', (e) => {
    function store() {
        e.preventDefault();
        let uname = document.getElementById('uname');
        let pass = document.getElementById('password');
        let email = document.getElementById('email');
        let lowerCaseLetters = /[a-z]/;
        let upperCaseLetters = /[A-Z]/;
        let numbers = /[0-9]/;
        let special = /\W/;

        if (uname.value.length == 0) {alert('Name required');} 
        else if (pass.value.length == 0) {alert('Password reauired');} 
        else if(email.value.length == 0){alert('Email required');}
        else if (uname.value.length == 0 && pass.value.length == 0 && email.value.length == 0) {alert('Email Name and Password required ');} 
        else if (pass.value.length < 8) {alert('Minimum 8 characters');} 
        else if (!pass.value.match(numbers)) { alert('Atleast one number required');} 
        else if (!pass.value.match(upperCaseLetters)) { alert('Atleast one uppercase letter'); } 
        else if (!pass.value.match(lowerCaseLetters)) {alert('Atleast one lowercase letter');} 
        else if (!pass.value.match(special)) {alert('Atleast one special character');}
        else {
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
                    console.log(pdata)  

                    //redirecting to the home page 
                    

                    // Window.location.assign("././index.html")
                
            }
            // Window.location.assign("././index.html")
            }}
            store();
    
        });

        // function redirect() {
        //     if( store() == true){
        //         windows.location.assign("index.html")
        //     }
        // }
        // redirect(store);

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