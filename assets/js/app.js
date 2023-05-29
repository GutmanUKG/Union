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

    const burgerDefault = document.querySelector('.burger-toggle')
    const headerMenu = document.querySelector('.header--menu')
    const headerMenuLi = headerMenu.querySelectorAll('li')
    headerMenuLi.forEach(item=>{
        if(item.querySelector('.menu--sub')){
            item.classList.add('menu--item_children')
            let btnToggle = document.createElement('button')
            btnToggle.classList.add('item--toggle_popup')
            item.appendChild(btnToggle)
            btnToggle.addEventListener('click', (e)=>{
                e.preventDefault()
                clearClass(btnToggle, 'active')
                clearClass(headerMenuLi, 'menu--item_children--open')
                btnToggle.classList.toggle('active')
                if(btnToggle.classList.contains('active')){
                    item.classList.add('menu--item_children--open')
                    item.classList.add('active')
                }else{
                    item.classList.remove('menu--item_children--open')
                    item.classList.remove('active')
                }
            })
        }
    })
    burgerDefault.addEventListener('click', (e)=>{
        e.preventDefault();
        burgerDefault.classList.toggle('active')
        if(burgerDefault.classList.contains('active')){
            headerMenu.classList.add('active')
            body.style.cssText += 'overflow: hidden; position: fixed; width: 100%;'
            headerMenu.style.cssText += `max-width: ${body.clientWidth}px;`
        }else{
            headerMenu.classList.remove('active')
            body.style.cssText += 'overflow: visible; position: static;'
        }
    })

    class Accardion{
        constructor({parentElement = null, childList= null}){
            this.parentElement = document.querySelectorAll(parentElement)
            this.childList = childList
        }
        init(){
            this.parentElement.forEach(item=>{

                let childrenItems = item.querySelectorAll(this.childList)
                childrenItems.forEach((i,idx)=>{

                    i.addEventListener('click', (e)=>{
                        i.parentNode.classList.toggle('active')
                    })
                })
            })
        }
    }

    try{
        const faqServicesDetail = new Accardion({
            parentElement: '.faq-list',
            childList: '.item--title'
        })
        faqServicesDetail.init()
    }catch(e){

    }
})
