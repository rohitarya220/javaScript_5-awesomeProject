let btn = document.querySelector('button')
let text = document.querySelector('p')

let check = 0;

btn.addEventListener('click', ()=>{
    if (check === 0) {
        text.innerHTML = 'Following'
        text.style.color = 'white'
        text.style.fontSize = '20px'
        btn.innerHTML = 'Remove'
        check = 1;
    }else{
        text.innerHTML = 'Follow'
        text.style.color = 'red'
        btn.innerHTML = 'Add'
        check = 0;
    }
})