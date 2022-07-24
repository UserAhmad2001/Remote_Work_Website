document.addEventListener('DOMContentLoaded',(e)=>{


    document.querySelectorAll('.nav-item')
    .forEach(el => {
        el.addEventListener('click',e =>{
            e.currentTarget.focus()
        })
    })










})