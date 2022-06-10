let img1=document.querySelector('#img1')
img1.addEventListener('click',(e)=>{
    // console.log()
    if(e.target.classList[0] === 'preview'){
        const container = document.createElement('div');
        container.classList.add("container");
        
        let innerImg = document.createElement("img");
        innerImg.src = e.target.src;

        container.onwheel=(e)=>{
            let width = getComputedStyle(innerImg).width.slice(0,-2);
            let height = getComputedStyle(innerImg).height.slice(0,-2);

            if(e.deltaY > 0){
                innerImg.style.width = parseInt(width)*1.2 + 'px'
                innerImg.style.height = parseInt(height)*1.2 + 'px'
            }else{
                innerImg.style.width = parseInt(width)*0.8 + 'px'
                innerImg.style.height = parseInt(height)*0.8 + 'px'
            }
            console.log(width)
            // console.log(typeof getComputedStyle(innerImg).width)
        }

        container.addEventListener('click',()=>{
            innerImg.remove()
            container.remove()
        })

        container.append(innerImg)
        document.body.append(container)
    }
    // if(e.target.tagName)
})
let container = document.querySelector('container');
if(container){
    container.addEventListener('click',()=>{return container.remove()})
}