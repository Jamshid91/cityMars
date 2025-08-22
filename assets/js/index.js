$('.menu-btn').click(function() {
  $(this).toggleClass('clicked');
  $('.menu').toggleClass('showMenu');
});

$('.filter-btn').click(function() {
  $(this).parent().toggleClass('showFilter');
});


$('.play-btn').click(function() {
  $(this).parent().toggleClass('startVideo');
  $(this).prev().trigger('play');
});

$('.filter-options li').click(function() {
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  $(this).parent().parent().removeClass('showFilter');
});

document.addEventListener('click', (e) => {
  let elem = document.querySelector('.filter-btn')
  elem.parentElement.contains(e.target) || elem.parentElement.classList.remove('showFilter')
})


const block2 = new Swiper('.swiper-block2', {
  loop: true,

  pagination: {
    el: '.pagination-block2',
    clickable: true,
  },

  navigation: {
    nextEl: '.next-block2',
    prevEl: '.prev-block2',
  },

  breakpoints: {
    0: {
      spaceBetween: 10,
      slidesPerView: 1,
    },
    992: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 60,
      slidesPerView: 2,
    },
}
});


const block5 = new Swiper('.swiper-block5', {
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  
  pagination: {
    el: '.pagination-block5',
    clickable: true,
  },

  navigation: {
    nextEl: '.next-block5',
    prevEl: '.prev-block5',
  },


  breakpoints: {
    0: {
      spaceBetween: 10,
      slidesPerView: 1,
    },
    767: {
      spaceBetween: 10,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    1280: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
}
});


const block7 = new Swiper('.swiper-block7', {
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: '.next-block7',
    prevEl: '.prev-block7',
  },
  
  pagination: {
    el: '.pagination-block7',
    clickable: true,
  },
});