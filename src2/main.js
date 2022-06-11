// let player = document.querySelector('.player');
// let left = document.querySelector("#left");
// let right = document.querySelector('right');
// console.log(player)
// left.addEventListener('click', (e)=>{
//     const styleRight = getComputedStyle(player).right
//     const width = getComputedStyle(player).width.slice(0,-2)
//     console.log(styleRight)
//     // console.log(width)
//     player.style.right = width + 'px'
// })
// console.log('成功引入js')
// console.log(container)
// container.addEventListener('click', (e)=>{
//     console.log('111')
// })

let index = 0;

function refresh(){
    // 获取轮播包裹元素.width
    let container = document.querySelector('#container');

    let {width} = getComputedStyle(container);
    width = Number(width.slice(0, -2));

    container.querySelector('.player').style.right = index * width;
}

function left(){
    index++;
    refresh()
}
function right(){
    index--;
    refresh();
}

refresh();
