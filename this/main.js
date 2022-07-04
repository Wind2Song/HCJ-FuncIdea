// var a=1;
// let FunObj = function(){
//     this.name = 'tina'
//     this.age = '18cm'
//     console.log(this)
// }

// let 构造的类 = new FunObj()
// console.log(构造的类)

// FunObj()

// var o = {
//     a:10,
//     b:{
//         a:12,
//         fn:function(){
//             console.log(this.a);
//             console.log(this)
//         }
//     }
// }
// var j = o.b.fn;
// j()


// var x = 3;
// var y = 4;
// var obj = {
//     x:1,
//     y:6,
//     getX:function(){
//         var x = 5;
//         return function(){
//             console.log('---')
//             console.log(this)
//             return this.x;
//         }()
//     },
//     getY:function(){
//         var y=7;
//         return this.y
//     }
// }
// console.log(window.xxx)
// console.log(obj.getX())
// console.log(obj.getY())
function biBao(){
    var isHTTP = true
    return function(){
        if(isHTTP){
            alert('正在发送请求')
            isHTTP = false
            // ......正在进行异步任务（注册用户信息中）
            // 注册完毕，就把isHTTP置为true
        }else{
            return '你已经在发送请求'
        }
    }
}

var arr = [1,2,3,4,5,6,7,8,9]

// for(var i=0;i<arr.length;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i*100,i)
// }

// 牛刀小试
function foo(){
    var num = 18
    var obj = {
        text:'我是字符串',
        num:20,
        getNum:function(){
            return num
        }
    }
    return obj
}
var obj = foo()
var age = obj.getNum()
// console.log(age)


