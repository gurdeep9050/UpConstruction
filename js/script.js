
// Swiper starts --->
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnIntraction: false,
    },
}); 

// Hamburger Starts --->

const mobile_nav = document.querySelector('.mobile-navbar-btn');
const navEle = document.querySelector('nav');
const fix_nav = document.querySelector('.fix-nav');

mobile_nav.addEventListener('click', () => {
  navEle.classList.toggle('active');
  fix_nav.classList.toggle('active-7');
});


// Dropdown on click --->

const myJsmedia = (widthSize) => {
  
  if(widthSize.matches){
  
    const btn = document.querySelector('.dropdown-2');
    const ul = document.querySelector('.dropdown-ul');

    ul.style.display = "none";

    btn.addEventListener('click', () => {

      if(ul.style.display == "none"){
        ul.style.display = "block";
      }else{
        ul.style.display = "none";
      }

      btn.classList.toggle('active-2');
    });

    const btn_2 = document.querySelector('.deep-dropdown-2');
    const ul_2 = document.querySelector('.deep-dropdown-ul');

    ul_2.style.display = "none";

    btn_2.addEventListener('click', () => {
  
      if(ul_2.style.display == "none"){
        ul_2.style.display = "block";
      }else{
        ul_2.style.display = "none";
      }

      btn_2.classList.toggle('active-3');
    });
  };
};

const widthSize = window.matchMedia("(max-width: 1024px)");

myJsmedia(widthSize);

widthSize.addEventListener('change', myJsmedia);

// Info Section Starts --->

const title_1 = document.querySelector('.title-1');
const title_2 = document.querySelector('.title-2');
const title_3 = document.querySelector('.title-3');
const title_4 = document.querySelector('.title-4');

const title_1_detail = document.querySelector('.title-1-detail');
const title_2_detail = document.querySelector('.title-2-detail');
const title_3_detail = document.querySelector('.title-3-detail');
const title_4_detail = document.querySelector('.title-4-detail');

title_1.classList.add('active-4');63
title_2_detail.style.display = 'none';
title_3_detail.style.display = 'none';
title_4_detail.style.display = 'none';

title_1.addEventListener('click', () => {
  if(title_1_detail.style.display == 'none'){
    title_1_detail.style.display = 'block';
    title_2_detail.style.display = 'none';
    title_3_detail.style.display = 'none';
    title_4_detail.style.display = 'none';

    title_1.classList.add('active-4');
    title_2.classList.remove('active-4');
    title_3.classList.remove('active-4');
    title_4.classList.remove('active-4');
  }
});

title_2.addEventListener('click', () => {
  if(title_2_detail.style.display == 'none'){
    title_1_detail.style.display = 'none';
    title_2_detail.style.display = 'block';
    title_3_detail.style.display = 'none';
    title_4_detail.style.display = 'none';

    title_2.classList.add('active-4');
    title_1.classList.remove('active-4');
    title_3.classList.remove('active-4');
    title_4.classList.remove('active-4');
  }
});

title_3.addEventListener('click', () => { 
  if(title_3_detail.style.display == 'none'){
    title_1_detail.style.display = 'none';
    title_2_detail.style.display = 'none';
    title_3_detail.style.display = 'block';
    title_4_detail.style.display = 'none';
    
    title_3.classList.add('active-4');
    title_2.classList.remove('active-4');
    title_1.classList.remove('active-4');
    title_4.classList.remove('active-4');
  }
});

title_4.addEventListener('click', () => { 
  if(title_4_detail.style.display == 'none'){
    title_1_detail.style.display = 'none';
    title_2_detail.style.display = 'none';
    title_3_detail.style.display = 'none';
    title_4_detail.style.display = 'block';

    title_4.classList.add('active-4');
    title_2.classList.remove('active-4');
    title_3.classList.remove('active-4');
    title_1.classList.remove('active-4');
  }
});


// Project Starts --->

const tab_1 = document.querySelector('.tab-1');
const tab_2 = document.querySelector('.tab-2');
const tab_3 = document.querySelector('.tab-3');
const tab_4 = document.querySelector('.tab-4');
const tab_5 = document.querySelector('.tab-5');

const item_1 = document.querySelector('.item-1');
const item_2 = document.querySelector('.item-2');
const item_3 = document.querySelector('.item-3');
const item_4 = document.querySelector('.item-4');
const item_5 = document.querySelector('.item-5');
const item_6 = document.querySelector('.item-6');
const item_7 = document.querySelector('.item-7');
const item_8 = document.querySelector('.item-8');
const item_9 = document.querySelector('.item-9');
const item_10 = document.querySelector('.item-10');
const item_11 = document.querySelector('.item-11');
const item_12 = document.querySelector('.item-12');

tab_1.classList.add('active-5');

tab_1.addEventListener('click', () => {
  item_1.style.display = 'block';
  item_2.style.display = 'block';
  item_3.style.display = 'block';
  item_4.style.display = 'block';
  item_5.style.display = 'block';
  item_6.style.display = 'block';
  item_7.style.display = 'block';
  item_8.style.display = 'block';
  item_9.style.display = 'block';
  item_10.style.display = 'block';
  item_11.style.display = 'block';
  item_12.style.display = 'block';

  tab_1.classList.add('active-5');
  tab_2.classList.remove('active-5');
  tab_3.classList.remove('active-5');
  tab_4.classList.remove('active-5');
  tab_5.classList.remove('active-5');
})

tab_2.addEventListener('click', () => {
  item_1.style.display = 'block';
  item_2.style.display = 'none';
  item_3.style.display = 'none';
  item_4.style.display = 'none';
  item_5.style.display = 'block';
  item_6.style.display = 'none';
  item_7.style.display = 'none';
  item_8.style.display = 'none';
  item_9.style.display = 'block';
  item_10.style.display = 'none';
  item_11.style.display = 'none';
  item_12.style.display = 'none';

  tab_1.classList.remove('active-5');
  tab_2.classList.add('active-5');
  tab_3.classList.remove('active-5');
  tab_4.classList.remove('active-5');
  tab_5.classList.remove('active-5');
})

tab_3.addEventListener('click', () => {
  item_1.style.display = 'none';
  item_2.style.display = 'block';
  item_3.style.display = 'none';
  item_4.style.display = 'none';
  item_5.style.display = 'none';
  item_6.style.display = 'block';
  item_7.style.display = 'none';
  item_8.style.display = 'none';
  item_9.style.display = 'none';
  item_10.style.display = 'block';
  item_11.style.display = 'none';
  item_12.style.display = 'none';

  tab_1.classList.remove('active-5');
  tab_2.classList.remove('active-5');
  tab_3.classList.add('active-5');
  tab_4.classList.remove('active-5');
  tab_5.classList.remove('active-5');
})

tab_4.addEventListener('click', () => {
  item_1.style.display = 'none';
  item_2.style.display = 'none';
  item_3.style.display = 'block';
  item_4.style.display = 'none';
  item_5.style.display = 'none';
  item_6.style.display = 'none';
  item_7.style.display = 'block';
  item_8.style.display = 'none';
  item_9.style.display = 'none';
  item_10.style.display = 'none';
  item_11.style.display = 'block';
  item_12.style.display = 'none';

  tab_1.classList.remove('active-5');
  tab_2.classList.remove('active-5');
  tab_3.classList.remove('active-5');
  tab_4.classList.add('active-5');
  tab_5.classList.remove('active-5');
})

tab_5.addEventListener('click', () => {
  item_1.style.display = 'none';
  item_2.style.display = 'none';
  item_3.style.display = 'none';
  item_4.style.display = 'block';
  item_5.style.display = 'none';
  item_6.style.display = 'none';
  item_7.style.display = 'none';
  item_8.style.display = 'block';
  item_9.style.display = 'none';
  item_10.style.display = 'none';
  item_11.style.display = 'none';
  item_12.style.display = 'block';

  tab_1.classList.remove('active-5');
  tab_2.classList.remove('active-5');
  tab_3.classList.remove('active-5');
  tab_4.classList.remove('active-5');
  tab_5.classList.add('active-5');
})


// Testimonial slider --->

var newSwiper = new Swiper(".myNewSwiper", {
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".new-swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 2500,
    disableOnIntraction: false,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
    },

    1200: {
      slidesPerView: 2,
    }
  }
});


// Back To Top --->

window.addEventListener('scroll', () => {

  const back_to_top = document.getElementById('back-to-top');

  if(window.pageYOffset >= 350){
    back_to_top.classList.add('active-6');
  }

  else{
    back_to_top.classList.remove('active-6');
  };
});