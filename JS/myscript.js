var nav=document.querySelector('nav');
    window.addEventListener('scroll', function(){
       if(window.pageYOffset > 50){
        nav.style.backgroundColor = 'rgba(1)';
        nav.classList.add('shadow');
       }else{
        nav.style.backgroundColor = 'transparent';
        nav.classList.remove('shadow');
       }
    })

/*--------------------------AOS--------------------------*/
AOS.init({
  easing: 'ease-out-back',
  duration: 1000
});
/*--------------------------/AOS--------------------------*/  
