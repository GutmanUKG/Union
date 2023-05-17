'use strict'
document.addEventListener('DOMContentLoaded', ()=>{

    let body = document.body;
    function clearClass(items, clearClass){
        for(let i = 0; i < items.length; i++){
            items[i].classList.remove(clearClass)
        }
    }
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
})
