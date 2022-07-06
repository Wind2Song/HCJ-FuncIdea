console.log('刷新了')
let check = document.querySelectorAll('.check');
let single = document.querySelectorAll('.single');

// 好像大家都不用事件监听click，而是用事件触发onclick
// check,addEventListener('click',(e)=>{
//     if(e.target.getAttribute('id')==='all'){
//         alert('111')
//     }
// })
for(let i=0;i<check.length;i++){
    check[i].onclick=(e)=>{
        if(e.target.getAttribute('id')==='all'){
            let {checked} = e.target
            for(let j=0;j<single.length;j++){
                single[j].checked = checked
            }
            
        }
        fTotal()
    }
}
function fTotal(){
    // 获取到checked值为真 的input选择框所在的所有父元素
    let itemBox = document.querySelectorAll('.item-box');
    let selectTotal = document.getElementById('selectTotal');
    let sumTotal = document.getElementById('totalprice');
    // 获取父元素里的所有标签 里的input标签 的value
    let numTotal = 0;
    let sum = 0;

    for(let i=0;i<itemBox.length;i++){
        if(itemBox[i].getElementsByTagName('input')[0].checked){
            let value = itemBox[i].getElementsByTagName('input')[1].value
            numTotal += parseInt(value)
            let price = itemBox[i].querySelector('.col-sum').innerHTML
            sum += parseInt(price)
        }
    }
    // 所有value加起来，放到已选择那里去
    selectTotal.innerHTML = numTotal
    sumTotal.innerHTML = sum;
}
