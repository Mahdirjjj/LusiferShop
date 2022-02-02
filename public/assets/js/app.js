
// ---------------------darkmode--------------------
$('.darkMode>input').on('change', (event) => {
    switch (event.target.value) {
      case 'dawn':
        setBackground('#ffe056c9');
        break;
      case 'dusk':
        setBackground('#91c1ea');
        break;
      case 'night':
        setBackground(' #494850');
        break;
      default:
        setBackground('rgb(88 95 101)');
        break;
    }
  });
  
  function setBackground(color) {
    $('body').css('background-color', color);
    $('footer').css('background-color', color);
    
  }

  
  // ---------------------------------swiper----------------------------
  var swiper = new Swiper('.swiper-introIndex1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    autoplay: 
      {
        delay: 3000,
      },
    keyboard: 
    {
      enabled: true,
      onlyInViewport: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    });
// -
var swiper = new Swiper('.swiper-introIndex2', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: 
    {
      delay: 7000,
    },
  keyboard: 
  {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });
  // -
  var swiper = new Swiper('.swiper-introIndex3', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    autoplay: 
      {
        delay: 4500,
      },
    keyboard: 
    {
      enabled: true,
      onlyInViewport: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    });
    // ----swiper offer----
var swiper = new Swiper('.swiper-container1', {
	direction: 'horizontal',
    pagination: '.cd-slider',
    nextButton: '.swiper-next',
    prevButton: '.swiper-prev',
	slidesPerView: 1,
	grabCursor: true,
    paginationClickable: true,
    
    loop: true,
    speed: 400,
    effect: 'slide',
    keyboardControl: true,
	hashnav: true,
	slidesPerView: 'auto',
	watchOverflow: true,

	pagination: {
		   el: '.swiper-pagination',
		   clickable: true,
         },
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    useCSS3Transforms: false,
	breakpoints: {
        // when window width is <= 499px
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        },
        600: {
         slidesPerView: 2,
             spaceBetweenSlides: 40
     },
   
        1000: {
            slidesPerView: 4 ,
            spaceBetweenSlides: 1000
        }
    }
  });

// ---end swiper offer--



// ------------------
