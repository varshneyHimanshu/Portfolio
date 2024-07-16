const form = document.querySelector("form");
function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "savya012@gmail.com",
        Password : "BD516B7AE4780041815306E2C08769D13F88",
        To : 'savya012@gmail.com',
        From : "savya012@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => {
        if(message == "OK"){
            alert('Mail sent Successfully');
        }
        else {
            alert(message);
        }
      }
    );
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendMail();
})