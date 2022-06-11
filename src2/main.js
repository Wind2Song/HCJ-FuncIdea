let player = document.querySelector('.player');
let left = document.querySelector("#left");
let right = document.querySelector('right');
let container = document.querySelector('#container');
console.log(player)
left.addEventListener('click', (e)=>{
    const styleRight = getComputedStyle(player).right
    const width = getComputedStyle(player).width
    console.log(styleRight)
    console.log(width)
    
})
// console.log('成功引入js')
// console.log(container)
// container.addEventListener('click', (e)=>{
//     console.log('111')
// })