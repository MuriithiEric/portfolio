// put this right in your main.js file:
var toast = new Toasty();

var db = firebase.firestore();


toast.info('Welcome to our site.');

var emailBtn = document.querySelector('.email-btn');
emailBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    db.collection('email_list').add({
        email: document.querySelector('.email').value
    }).then(() => {
        toast.success("Email Submitted Successfully. You're In!")
    }).catch((err) => {
        toast.error('Oops! There was a problem submitting your email at this time, please try again later.');
        console.log(err);
    })
});