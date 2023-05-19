function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}  
  
var button1 = document.querySelector('.scrollTo1');
var aboutUs = document.querySelector('#aboutUs');

button1.addEventListener('click' , () => {
scrollTo(aboutUs);
});

var swiper = new Swiper(".galery__swiper", {
    navigation: {
      nextEl: ".galery__swiper-button-next",
      prevEl: ".galery__swiper-button-prev",
    },
  });
