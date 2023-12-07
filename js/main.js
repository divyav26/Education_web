//change navbar styles on scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})

//q and ans

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        // change icons 
        const icon = faq.querySelector('.faq_icons i');
        if(icon.className === 'fa fa-plus')
        {
            icon.className = 'fa fa-minus';
        }
        else{
            icon.className= 'fa fa-plus';
        }
    })
})

// menu nav

const menu = document.querySelector('.nav__menu')
const openBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')

openBtn.addEventListener('click',()=>{
    menu.style.display = 'flex'
    closeBtn.style.display='inline-block'
    openBtn.style.display = 'none';
})

//close menu nav

const closeNav = ()=>{
    menu.style.display ='none';
    closeBtn.style.display='none';
    openBtn.style.display='inline-block';

}

closeBtn.addEventListener('click',closeNav)


