let containr = document.querySelector('.container')
let icon = document.querySelector('i')

containr.addEventListener('dblclick',()=>{
    icon.style.transform = 'translate(-50% , -50%) scale(1)'
    icon.style.color = 'red'
    setTimeout(() => {
    icon.style.transform = 'translate(-50% , -50%) scale(0)'
        
    }, 1000);
}) 