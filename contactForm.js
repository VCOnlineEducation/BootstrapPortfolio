// EmailJs Logic
document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();/*will stop the tag form, from trying to send the info over the network, which its default behaviour*/


emailjs.sendForm("service_zqn9005", "template_c1nfwze",event.target).then(
function(){
    Swal.fire({
        icon: "success",
        title: "Yeahh Boiii!!!",
        text: "Got ya message!!!",
    })
    // do this for 30 seconds
var duration = 7 * 1000;
var end = Date.now() + duration;

(function frame() {
  // launch a few confetti from the left edge
  confetti({
    particleCount: 7,
    angle: 60,
    spread: 55,
    origin: { x: 0 }
  });
  // and launch a few from the right edge
  confetti({
    particleCount: 7,
    angle: 120,
    spread: 55,
    origin: { x: 1 }
  });

  // keep going until we are out of time
  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
    document.getElementById("contact-form").reset()
},   

function(error){
    console.log(error)
    Swal.fire({
        icon: "error",
        title: "404",
        text: "Something went wrong",
    })
}
)
})
