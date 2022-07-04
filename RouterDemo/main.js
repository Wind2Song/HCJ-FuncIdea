// console.log('刷新了')

// 实现history模式的路由
/**
 * 
 * 一般来说，会主动向浏览器的浏览栈推送页面记录，但是这样做回退时，会引发网页刷新动作；因此现在不需要这个主动记录，而是有一套自己的记忆系统 记录用户每一步的操作（避免刷新）
 *   比如进入官网，默认进入首页，点击关于 展示关于页面的内容、再点击课程中心 展示课程中心的内容；
 *   如果点击回退按钮，则从 课程中心回退到关于、再点击 回退到首页
 * 
 * 实现自己的记忆系统，需要使用浏览器提供的方法 
 * pushState方法：往浏览器的历史记录栈推送一条新的浏览记录，并且不会引发浏览器刷新
 *   当想要回退的时候，就可以从浏览器的历史记录栈中获取上一次的浏览记录，进入上一次的浏览页面
 * 
 * replaceState方法：会重置历史栈，只保留当前页面的url，也不会刷新浏览器
 */

let box = document.querySelector('.box');
let aList = document.querySelectorAll('a')

aList.forEach(el => {
    el.addEventListener('click',(e)=>{
        e.preventDefault()
        console.log('点击了')
        history.pushState({name:'Tina'}, '', el.href)
        // console.log(location.pathname)
        historyShow()
        /**
         * 参数1 跳转到那个url的时候，要携带什么参数（比如携带username 携带用户id 携带一个tap）
         * 参数2 大部分浏览器都不兼容？？当前跳转的一个标题？
         * 参数3 要把哪个url推送到浏览器历史记录栈里
         */
    })
})
historyShow()


function historyShow(){
    let {pathname} = window.location
    if(pathname === '/info'){
        box.innerHTML = '我是关于的内容'
    }else if(pathname === '/home'){
        box.innerHTML = '我是首页'
    }else{
        box.innerHTML = '<h1>404</h1>'
    }
}

// if(window.location.pathname === '/'){
//     window.location.pathname = '/home'
//     historyShow()
// }
 