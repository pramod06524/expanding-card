const panels=document.querySelectorAll('.panel');
console.log(panels)
//to look through each of rhe pannel 
panels.forEach(panel=>{
    panel.addEventListener(('click'),()=>{
        removeActiveClasses();
        panel.classList.add('active')
       
    })
})
let removeActiveClasses=()=>{
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}