
gsap.timeline({
  scrollTrigger: {
    trigger: ".slide",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "bottom 5%",
    scrub: true,
    // pin:true
  },
})
  .to("section", {
    transform: "rotateX(150deg) rotateY(0deg)",
  })






var main = document.querySelector("#main");
var page3 = document.querySelector("#page3");
var page4 = document.querySelector("#page4");
var page5 = document.querySelector("#page5");
var circle = document.querySelector("#circle");
var temp;

window.addEventListener("mousemove", function (dets) {
  circle.style.left = `${dets.pageX +30}px`;
  circle.style.top = `${dets.pageY+30}px`;
  temp = dets.clientY;
});

page3.addEventListener("mouseenter", function () {
  circle.style.transform = "scale(1.5)";
  circle.style.backgroundColor = "#00000099";

});

page3.addEventListener("mouseleave", function () {
  circle.style.transform = "scale(0)";
  circle.style.backgroundcolor = "transparent";

});

page4.addEventListener("mouseenter", function() {
  circle.style.transform = "scale(2)";
  circle.style.backgroundColor = "grey";
});

page4.addEventListener("mouseleave", function() {
  circle.style.transform = "scale(1)";
  circle.style.backgroundColor = "transparent";
});


page5.addEventListener("mouseenter", function() {
  circle.style.transform = "scale(2)";
  circle.style.backgroundColor = "grey";
});

page5.addEventListener("mouseleave", function() {
  circle.style.transform = "scale(1)";
  circle.style.backgroundColor = "transparent";
});

window.addEventListener("scroll", function () {
  var scrollY = window.pageYOffset;
  circle.style.top = `${temp + scrollY}px`;
});


