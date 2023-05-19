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
