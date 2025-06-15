var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Developer", "Gamer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

function sendMail(event) {
  event.preventDefault();

  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_b2myyme", "template_gj2mbcd", parms)
    .then(function(res) {
      Swal.fire({
        icon: 'success',
        title: 'Email Sent!',
        text: 'Thank you for contacting me.',
        confirmButtonColor: '#3085d6'
      });
    })
    .catch(function(err) {
      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: 'Could not send email. Try again later.',
        confirmButtonColor: '#d33'
      });
    });
}
