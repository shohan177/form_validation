//get element
const sign_up_form = document.querySelector('#sign_up');
let user_warning = document.querySelector('.user_warning');
let phone_warning = document.querySelector('.phone_warning');
let email_warning = document.querySelector('.email_warning');
let pass_warning = document.querySelector('.pass_warning');
let c_pass_warning = document.querySelector('.c_pass_warning');
let c_pass_notmatch = document.querySelector('.c_pass_notmatch');
let email_invalid = document.querySelector('.email_invalid');
let phone_invalid = document.querySelector('.phone_invalid');
let passRules = document.querySelector('.pass-roll');

//get value
let user = sign_up_form.querySelector('#sign_up input[name="user"]');
let phone = sign_up_form.querySelector('#sign_up input[name="phone"]');
let email = sign_up_form.querySelector('#sign_up input[name="email"]');
let pass = sign_up_form.querySelector('#sign_up input[name="pass"]');
let c_pass = sign_up_form.querySelector('#sign_up input[name="c_pass"]');

//password message
let passWarningContainer = document.querySelector('.pass-roll');
let upper = document.querySelector('.pass-roll .upper');
let low = document.querySelector('.pass-roll .low');
let Wnumber = document.querySelector('.pass-roll .Wnumber');
let Wspecial = document.querySelector('.pass-roll .Wspecial');


//user
user.addEventListener('keyup', function () {
    user_warning.innerHTML = ""
})
//conferm password
c_pass.addEventListener('keyup', function () {
    c_pass_warning.innerHTML = ""
})
//email check
email.addEventListener('keyup', function () {
    email_warning.innerHTML = ""
    email_invalid.innerHTML = ((RegEx.email(email.value) ? "" : "invalid email"))
   
   
})

//phone number check
phone.addEventListener('keyup', function () {
    phone_warning.innerHTML = ""
    phone_invalid.innerHTML = ((RegEx.phone(phone.value) ? "" : "invalid phone number"))

    
})

//add +880 
phone.addEventListener('click', function () {
    phone.value = "+880";
})

//password rules show
pass.addEventListener('click', function () {
    pass_warning.innerHTML = ""
    passWarningContainer.style.display = "block"
})


//pasword check
pass.addEventListener('keyup', function () {
  
    RegEx.passWord(pass.value)
   
})




   


//form submit        
sign_up_form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (pass.value != c_pass.value && pass.value != "" && c_pass.value != "" ) {
        c_pass_notmatch.innerHTML = "password not match"
    } else {
        c_pass_notmatch.innerHTML = ""
    }

    if ( validate.empty(user.value) || validate.empty(phone.value) || validate.empty(email.value) || validate.empty(pass.value) || validate.empty(c_pass.value) || RegEx.email(email.value) == false || RegEx.phone(phone.value) == false || pass.value != c_pass.value) {

        emptyWarning()
        
    } else {

        emptyWarning() 
        alert('We finding your land on the moon');
    }
    

    // show empty warning message
    function emptyWarning() {
        
        user_warning.innerHTML = validate.required((user.value == "")? "user" : 0)
        phone_warning.innerHTML = validate.required((phone.value == "")? "phone" : 0)
        email_warning.innerHTML = validate.required((email.value == "")?  "email" : 0)
        pass_warning.innerHTML = validate.required((pass.value == "") ? "password" : 0)
        c_pass_warning.innerHTML = validate.required((c_pass.value == "") ? "confirm password" : 0)
       
        
   
        
        
    }
    
 




});


