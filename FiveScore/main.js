console.log('hi')

let arr = document.querySelectorAll(".container ul li")
// console.log(arr[0])

let ul = document.querySelector(".container ul")
// console.log(ul)
ul.addEventListener('click',(e)=>{
    // console.log(e.target)
    for(let i=0;i<arr.length;i++){
        if(arr[i].textContent <= e.target.textContent){
            // let background = getComputedStyle(arr[i]).background
            // console.log(getComputedStyle(arr[i]).backgroundColor)
            // arr[i].style.background = background.replace('rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0)')
            arr[i].style.backgroundColor = 'red';
            
        }
    }
})