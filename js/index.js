window.addEventListener('scroll', (e) => {
    let i = window.scrollY;
    const menu = document.querySelector('.menu__wrapper');
    if (i !== 0){
        menu.style.backgroundColor = '#000';
        menu.style.opacity = '0.7'
    } else{
        menu.style.backgroundColor = 'transparent'
        menu.style.opacity = '1'
    }
})



const form = document.querySelector('.form');
const form_wrapper = document.querySelector('.form__wrapper');
const btn = document.querySelector('.modal_btn--js');

function toggleForm(){
    if(!form_wrapper.classList.contains('form__wrapper--show')){
        form_wrapper.classList.add('form__wrapper--show');
        form_wrapper.style.top = window.scrollY + 'px';
        document.body.style.overflow = 'hidden';

        form_wrapper.addEventListener('click', (e) => {
            const target = e.target;
            if(target === form_wrapper){
                hideForm();
            }
        })

        document.addEventListener('keydown', (e) => {
            if(e.key === "Escape") {
                hideForm();
            }
        })
    } else{
        hideForm();
    }
}

function hideForm(){
    form_wrapper.classList.remove('form__wrapper--show');
    document.body.style.overflow = '';
}

btn.addEventListener('click', toggleForm);