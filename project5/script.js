let arr = [
   {dp:'https://images.unsplash.com/photo-1695782098642-b71604fcb72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60', story: 'https://images.unsplash.com/photo-1694955437705-07a5cb686c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'},
   {dp:'https://images.unsplash.com/photo-1694955437705-07a5cb686c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60', story:'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMGdpcmwlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'},
   {dp:'https://images.unsplash.com/photo-1587495492166-f5718db9b3ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8dUd1bGVvOGh3T1F8fGVufDB8fHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=294&h=294&q=60', story:'https://images.unsplash.com/photo-1678801868975-32786ae5aeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTM0MjYzMnx8ZW58MHx8fHx8&dpr=2&auto=format&fit=crop&w=294&h=294&q=60'},
   {dp:'https://images.unsplash.com/photo-1678801868819-4e17d4ea7cde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTM0MjYzMnx8ZW58MHx8fHx8&dpr=2&auto=format&fit=crop&w=126&h=147&q=60', story:'https://images.unsplash.com/photo-1678802013089-574e360074d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTM0MjYzMnx8ZW58MHx8fHx8&dpr=2&auto=format&fit=crop&w=126&h=147&q=60'},
   {dp:'https://images.unsplash.com/photo-1585221393180-f5dc7de4fa8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MzEwMTUyOXx8ZW58MHx8fHx8&dpr=2&auto=format&fit=crop&w=294&h=294&q=60', story:'https://images.unsplash.com/photo-1601217672201-cca23494ed2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTE3MDM4NzN8fGVufDB8fHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=294&h=294&q=60'},
   {dp:'https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8N1lBNEhaZE42WHd8fGVufDB8fHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=294&h=294&q=60', story:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ZEIyWkZsT1NOeW98fGVufDB8fHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=294&h=294&q=60'},
   {dp:'https://images.unsplash.com/photo-1599142296733-1c1f2073e6de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ZUxCUGtEN05qOTh8fGVufDB8fHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=294&h=294&q=60', story:'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8Njg5MjIwMDd8fGVufDB8fHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=294&h=294&q=60'},
   {dp:'https://images.unsplash.com/photo-1460402642842-fa689e470581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTA3NDc3ODd8fGVufDB8fHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=294&h=294&q=60', story:'https://images.unsplash.com/photo-1549062572-544a64fb0c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjM4NzU3M3x8ZW58MHx8fHx8&dpr=2&auto=format&fit=crop&w=294&h=294&q=60'},
   {dp:'https://images.unsplash.com/photo-1545911825-6bfa5b0c34a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTA1NDQ3NDV8fGVufDB8fHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=294&h=294&q=60', story:'https://images.unsplash.com/photo-1491234909075-13ce70f047b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MzQ4MDc4MXx8ZW58MHx8fHx8&dpr=2&auto=format&fit=crop&w=294&h=294&q=60'},
   {dp:'https://images.unsplash.com/photo-1551489472-c71a03619a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTk4NjM0NXx8ZW58MHx8fHx8&dpr=2&auto=format&fit=crop&w=294&h=294&q=60', story:'https://images.unsplash.com/photo-1663267759119-7bf2c50dde00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NTMwNzgxNDd8fGVufDB8fHx8fA%3D%3D&dpr=2&auto=format&fit=crop&w=294&h=294&q=60'}
]

let cluter = ''
arr.forEach(function(item, i){
    cluter += `  <div class="story"> 
                    <img id='${i}' src="${item.dp}" alt="">
                   
                 </div>`
})

let storyBox = document.querySelector('.story-box')
let fullScreen = document.querySelector('.full-screen')
storyBox.innerHTML = cluter


storyBox.addEventListener('click',function(dets){
    fullScreen.style.display = 'block'
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        fullScreen.style.display = 'none'
    },2000)
})