console.log('hi')

let arr = document.querySelectorAll(".container ul li")
// console.log(arr[0])
// for(let i=0;i<arr.length;i++){
//     arr[i].click = (e)=>{
//         console.log(1)
//     }
// }

let ul = document.querySelector(".container ul")
ul.onmouseover = (e)=>{
    // console.log(e.target)
    for(let i=0;i<arr.length;i++){
        if(arr[i].textContent <= e.target.textContent){
            for(let l = 0;l<=i;l++){
                arr[i].style.backgroundColor = 'red';
            }
        }else{
            for(let l=i+1;l<=arr.length;l++){
                arr[i].style.backgroundColor = '';
            }
        }
    }
}
ul.addEventListener('onmouseover',(e)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i].textContent <= e.target.textContent){
            arr[i].style.backgroundColor = 'red';
            // localStorage.backgroundColor = 'red'
        }
    }
})