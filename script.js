// let tl = gsap.timeline();

// tl.from('.nav .navlogo', {
//     x: -500,
//     duration: 2,
//     // delay:1,
// });

// tl.from('.navcontent', {
//     x: 1000,
//     duration: 2,
// });


// gsap.from(".contents p", {
//     scrollTrigger: {
//         trigger: ".contents",
//         start: "top 80%",
//         end: "bottom 20%",
//         markers: true,
//         toggleActions: "play none none reverse reverse", // Play on enter, reverse on leave, play on enter back, reverse on leave back
//     },
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     stagger: 0.3,
// });

// gsap.from('.left .founders', {
//     scrollTrigger: {
//         trigger: ".left .founders",
//         start: 'top 50%',
//         // markers: true,
//         toggleActions: "play none none reverse reverse", // Play on enter, reverse on leave, play on enter back, reverse on leave back
//     },
//     x: -500,
//     duration: 1,
// });

gsap.to('.kcards .imgcards', {
  x: 20,
  duration: 1,
  delay: 1,
  yoyo: true,
  repeat: -1  // Infinite loop
});


// basic
  let typed = new Typed('.page1 .head', {
                strings: ["Kunafa House is an exclusive Kunafa Dessert Brand, having one-of a kind creative variety of Kunafas."],
                typeSpeed: 50,
                backSpeed: 50,
                loop: true
            });

window.addEventListener('scroll', function() {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 50) { // You can adjust the value to when you want the effect to kick in
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});