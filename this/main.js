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
