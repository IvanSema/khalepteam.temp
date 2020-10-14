window.addEventListener('scroll', (e) => {
    let i = window.scrollY;
    const menu = document.querySelector('.menu__wrapper');
    if (i !== 0){
        console.log(4);
        menu.style.backgroundColor = '#000';
        menu.style.opacity = '0.7'
    } else{
        menu.style.backgroundColor = 'transparent'
        menu.style.opacity = '1'

    }
})