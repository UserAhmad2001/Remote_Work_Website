


    document.getElementById('menu')
    .addEventListener('click', (e) =>{
        var menu = document.querySelector('.menu')
        if(menu.style.transform === 'translateX(-100%)'){
            menu.style.transform = 'translateX(0)'
        }else{
            menu.style.transform = 'translateX(-100%)'
        }
    })
