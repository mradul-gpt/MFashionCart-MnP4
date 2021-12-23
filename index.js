function validation(){
    var email=document.getElementById("email").value;
    var schlor=document.getElementById("schlor").value;
    var password=document.getElementById("password").value; 

    var emailcheck=/^[A-Za-z_.0-9]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,20}$/;

    if(emailcheck.test(email)){
        document.getElementById("erroremail").innerHTML="";
    }
    else{
        document.getElementById("erroremail").innerHTML="**invalid email";
        return false;
    }
    if(schlorcheck.test(schlor)){
        document.getElementById("errorschlor").innerHTML="";
    }
    else{
        document.getElementById("errorschlor").innerHTML="**invalid schlor no.";
        return false;
    }
    if(passwordcheck.test(password)){
        document.getElementById("errorpassword").innerHTML="";
    }
    else{
        document.getElementById("errorpassword").innerHTML="**invalid password";
        return false;
    }
}
 //--------------------------------------------Google sheet js----------------

 const scriptURL = 'https://script.google.com/macros/s/AKfycbwjqoAnHHiTtG7fFalKiySLq7AARE3vRGjsYfzEIXXJZ8M5VaNYz2av4XNpEJcavj_J-g/exec'
 const form = document.forms['Submit-Google-Sheet']
           
 form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
         .then(response => alert("Thanks for being part of our family !! Happy Shopping..."))
         .catch(error => console.error('Error!', error.message))
 })