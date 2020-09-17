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
   /*  if(counter >= carauselImages.length - 1) return;  */
    carauselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carauselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
    
});
 prevBtn.addEventListener('click',() => {
     /* if(counter <=0) return;  */
    carauselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carauselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';

}); 
  carauselSlide.addEventListener('transitionend', () => {
      console.log('Fired');
    if (carauselImages[counter].id === 'lastClone'){
        carauselSlide.style.transition = "none";
        counter = carauselImages.length-2;
        
        carauselSslide.style.transform = 'translateX(' + (-size * counter) +'px)';
    }
    
      if(carauselImages[counter].id === 'firstClone'){
        carauselSlide.style.transition = "none";
        counter = carauselImages.length - counter;
        carauselSslide.style.transform = 'translateX(' + (-size * counter) +'px)';
    }  
});  