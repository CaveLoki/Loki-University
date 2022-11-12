
    // Ripple button
   const buttons = document.querySelectorAll('button');
   buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 800);

    })
   })
//    Navigation bar
   const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
// navbar toggle
        nav.classList.toggle('nav-active');
// animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6}s`;
            }
        });
        // animate burger
        burger.classList.toggle('toggle');

    });

   }
   navSlide();


//    CAROUSEL//
$(".owl-carousel").owl-carousell();