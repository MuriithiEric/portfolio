var myform = $("form#contact");
// put this right in your main.js file:
var toast = new Toasty();

function sendEmail() {
    toasty.info('Sending Please Wait...');
    Email.send({
        "SecureToken": "f8f35c42-e032-422f-a6b0-2a18589369ae",
        To: 'manutratech@gmail.com',
        From: document.querySelector(".from_email").value,
        Subject: "Contact - Enquiry",
        Body: document.querySelector(".msg").value
    }).then(
        message => {
            alert(message)
        }
    ).catch((err) => {
        toasty.error('Error: There was a problem sending your email...');
        console.log(err);
    });
}
console.log("hi!")
// C4D336BBF7CAEAE413CEF82AE73E531AB805