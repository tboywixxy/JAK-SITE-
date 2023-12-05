/*=======SEARCH======*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/*==== Search SHOW ====*/
/*==== validate if constant exists ====*/
if(searchButton){
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search')
    })
}

/*==== Search HIDDEN ====*/
/*==== Validate if constant exists ====*/
if(searchClose){
    searchClose.addEventListener('click', () =>{ 
        searchContent.classList.remove('show-search')
    })
}



/*==== LOGIN ====*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

/*==== Login SHOW ====*/
/*==== validate if constant exists ====*/
if(loginButton){
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login')
    })
}

/*==== Login HIDDEN ====*/
/*==== Validate if constant exists ====*/
if(loginClose){
    loginClose.addEventListener('click', () =>{ 
        loginContent.classList.remove('show-login')
    });
};

/*==== ADD SHADOW HEADER ====*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header');
}

/*==== HOME SWIPER ====*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -14,
    grabCursor: true,
    slidesPerView: '3',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
  });



  /*==== FEATURED SWIPER ====*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
  });


    /*==== NEW SWIPER ====*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 4,
        }
    }
  });


    /*==== Testimonial Swiper ====*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
  });


/*==== SHOW SCROLL UP ====*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==== SCROLL SECTION ACTIVE LINK ====*/
const section = document.querySelectorAll('section[id]')


const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)