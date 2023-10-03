let main = document.querySelectorAll('.box')
let allImg = document.querySelectorAll('img')


main.forEach(element => {
    console.log(element.childNodes);
   element.addEventListener('mouseenter', function(dets){
     element.childNodes[3].style.opacity = 1 
   })
   element.addEventListener('mouseleave', function(dets){
    element.childNodes[3].style.opacity = 0 

   })
   element.addEventListener('mousemove', function(dets){
    element.childNodes[3].style.left = dets.x + 'px' 
    element.childNodes[3].style.top = dets.y + 'px' 
     
   })
});