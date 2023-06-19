'use strict'
document.addEventListener('DOMContentLoaded', ()=>{
    let body = document.body;
    function clearClass(items, clearClass){
        for(let i = 0; i < items.length; i++){
            items[i].classList.remove(clearClass)
        }
    }
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

    try{
        let sliderBig = tns({
            container: '.gallery-big',
            items: 1,
            slideBy: 'page',
            nav: true,
            prevButton: '.gallery-big--prev',
            nextButton: '.gallery-big--next',
            loop:false
        });
        let sliderDots = tns({
            container: '.slider--dots',
            items: 5,
            slideBy: 'page',
            nav: false,

            controls: false,
            fixedWidth: 100,
            loop:false

        });

        const gallerySliderDots = document.querySelector('.gallery--slider--dots'),
            sliderItem = gallerySliderDots.querySelectorAll('.tns-item');

        sliderItem.forEach((item,idx)=>{
            item.addEventListener('click', ()=>{
                sliderBig.goTo(idx)
                console.log(idx)
                clearClass(sliderItem, 'active-dot')
                item.classList.add('active-dot')
            })
        })
        const gallerySlider = document.querySelector('.gallery--slider'),
            galleryItems = gallerySlider.querySelectorAll('.tns-item'),
            btnNext = gallerySlider.querySelector('.gallery-big--next'),
            btnPrev = gallerySlider.querySelector('.gallery-big--prev');

        btnNext.addEventListener('click', ()=>{
            var info = sliderBig.getInfo(),
                indexCurrent = info.index;
            sliderDots.goTo(indexCurrent)
            clearClass(sliderItem, 'active-dot')
            sliderItem[indexCurrent].classList.add('active-dot')
        })

        btnPrev.addEventListener('click', ()=>{
            var info = sliderBig.getInfo(),
                indexCurrent = info.index;
            sliderDots.goTo(indexCurrent)
            clearClass(sliderItem, 'active-dot')
            sliderItem[indexCurrent].classList.add('active-dot')
        })
        sliderItem[0].classList.add('active-dot')
    }catch (e) {

    }

    const infoSearchBtn = document.querySelector('.info--search_btn'),
        modalSearch = document.querySelector('.modal-search'),
        modalClose  = modalSearch.querySelector('.btn-close');

    infoSearchBtn.addEventListener('click', (e)=>{
        e.preventDefault()
        modalSearch.classList.add('active');
        body.style.cssText += 'overflow: hidden; position: fixed; width: 100%;'
    })
    modalClose.addEventListener('click', (e)=>{
        body.style.cssText += 'overflow: visible; position: static;'
        modalSearch.classList.remove('active')
    })
})
