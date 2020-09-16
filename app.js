const carauselSlide = document.querySelector('.carausel-slide');
const carauselImages = document.querySelectorAll('.carausel-slide img');

//Button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carauselImages[0].clientWidth;
carauselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';


//buttonListeners
nextBtn.addEventListener('click',() => {
    carauselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carauselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';

});
prevBtn.addEventListener('click',() => {
    carauselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carauselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';

});
carauselSlide.addEventListener