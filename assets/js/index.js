$('.menu-btn').click(function() {
  $(this).toggleClass('clicked');
  $('.menu').toggleClass('d-none');
  $('body').toggleClass('bodyStopScroll');
});


$('.play-btn').click(function() {
  $(this).parent().toggleClass('startVideo');
  $(this).prev().trigger('play');
});



$('.service-head').click(function() {
  let pageInfo = $(this).attr('data-btn');
  $('.service-info').parent().removeClass('hideService');
  $('.' + pageInfo).parent().addClass('hideService');
})


var block2 = new Swiper('.swiper-block2', {
  loop: true, allowTouchMove: true, 
  simulateTouch: false, 
  slideToClickedSlide: false, 
  touchReleaseOnEdges: false, 
  a11y: false, 
  watchSlidesProgress: true,

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

  navigation: {
    nextEl: '.next-block7',
    prevEl: '.prev-block7',
  },
  
  pagination: {
    el: '.pagination-block7',
    clickable: true,
  },
  on: {
    init: function () {
      funcBlock7(this);
    },
    slideChange: function () {
      funcBlock7(this);
    }
  }
});
function funcBlock7(screen_1) {
  var currentBlock7 = screen_1.activeIndex + 1;
  var totalBlock7 = screen_1.slides.length;

  document.querySelector('.current-block7').textContent = currentBlock7;
  document.querySelector('.total-block7').textContent = totalBlock7;
}



const banner = new Swiper('.swiper-banner', {
  spaceBetween: 10,
  slidesPerView: 1,
  loop: false,
  pagination: {
    el: '.pagination-banner',
    type: 'fraction',
    renderFraction: function(currentClass, tottalClass) {
        return `<span class="' + ${currentClass} +'"></span> `+ '/' + `<span class="' + ${tottalClass} +'"></span> ` 
    }
  },


});

// ****** swiper-1 ***************
const screen_1 = new Swiper('.swiper-screen_1', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.next-screen_1',
    prevEl: '.prev-screen_1',
  },
  pagination: {
    el: '.pagination-screen_1',
    clickable: true,
  },
  on: {
    init: function () {
      funcScreen_1(this);
    },
    slideChange: function () {
      funcScreen_1(this);
    }
  }

});
function funcScreen_1(screen_1) {
  var currentScreen_1 = screen_1.activeIndex + 1;
  var totalScreen_1 = screen_1.slides.length;

  document.querySelector('.current-screen_1').textContent = currentScreen_1;
  document.querySelector('.total-screen_1').textContent = totalScreen_1;
}

// ****** swiper-2 ***************
const screen_2 = new Swiper('.swiper-screen_2', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.next-screen_2',
    prevEl: '.prev-screen_2',
  },
  pagination: {
    el: '.pagination-screen_2',
    clickable: true,
  },
  on: {
    init: function () {
      funcScreen_2(this);
    },
    slideChange: function () {
      funcScreen_2(this);
    }
  }

});
function funcScreen_2(screen_2) {
  var currentScreen_2 = screen_2.activeIndex + 1;
  var totalScreen_2 = screen_2.slides.length;

  document.querySelector('.current-screen_2').textContent = currentScreen_2;
  document.querySelector('.total-screen_2').textContent = totalScreen_2;
}

// ****** swiper-3 ***************
const screen_3 = new Swiper('.swiper-screen_3', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.next-screen_3',
    prevEl: '.prev-screen_3',
  },
  pagination: {
    el: '.pagination-screen_3',
    clickable: true,
  },
  on: {
    init: function () {
      funcScreen_3(this);
    },
    slideChange: function () {
      funcScreen_3(this);
    }
  }

});
function funcScreen_3(screen_3) {
  var currentScreen_3 = screen_3.activeIndex + 1;
  var totalScreen_3 = screen_3.slides.length;

  document.querySelector('.current-screen_3').textContent = currentScreen_3;
  document.querySelector('.total-screen_3').textContent = totalScreen_3;
}

// ****** swiper-4 ***************
const screen_4 = new Swiper('.swiper-screen_4', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.next-screen_4',
    prevEl: '.prev-screen_4',
  },
  pagination: {
    el: '.pagination-screen_4',
    clickable: true,
  },
  on: {
    init: function () {
      funcScreen_4(this);
    },
    slideChange: function () {
      funcScreen_4(this);
    }
  }

});
function funcScreen_4(screen_4) {
  var currentScreen_4 = screen_4.activeIndex + 1;
  var totalScreen_4 = screen_4.slides.length;

  document.querySelector('.current-screen_4').textContent = currentScreen_4;
  document.querySelector('.total-screen_4').textContent = totalScreen_4;
}

// ****** swiper-5 ***************
const screen_5 = new Swiper('.swiper-screen_5', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.next-screen_5',
    prevEl: '.prev-screen_5',
  },
  pagination: {
    el: '.pagination-screen_5',
    clickable: true,
  },
  on: {
    init: function () {
      funcScreen_5(this);
    },
    slideChange: function () {
      funcScreen_5(this);
    }
  }

});
function funcScreen_5(screen_5) {
  var currentScreen_5 = screen_5.activeIndex + 1;
  var totalScreen_5 = screen_5.slides.length;

  document.querySelector('.current-screen_5').textContent = currentScreen_5;
  document.querySelector('.total-screen_5').textContent = totalScreen_5;
}

// ****** swiper-6 ***************
const screen_6 = new Swiper('.swiper-screen_6', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.next-screen_6',
    prevEl: '.prev-screen_6',
  },
  pagination: {
    el: '.pagination-screen_6',
    clickable: true,
  },
  on: {
    init: function () {
      funcScreen_6(this);
    },
    slideChange: function () {
      funcScreen_6(this);
    }
  }

});
function funcScreen_6(screen_6) {
  var currentScreen_6 = screen_6.activeIndex + 1;
  var totalScreen_6 = screen_6.slides.length;

  document.querySelector('.current-screen_6').textContent = currentScreen_6;
  document.querySelector('.total-screen_6').textContent = totalScreen_6;
}






$(document).ready(function() {
  $('.submit-btn').click(function() {
      var phone = $(this).parent().children('.input-box').children('.phone');
      var phoneVal = phone.val();

      if (phoneVal === '' || phoneVal.substr(-1) === '_') {
          setError(phone);
      } else {
          setSuccess(phone);
      }
  
  
      if (phone.next().hasClass('success')) {
        $(this).parent().parent().addClass('d-none');
        $(this).parent().parent().next().removeClass('d-none');
        
        // $(this).attr("type", "submit"); 
          // Логика отправки почты
      }
  });
  
  
  
      function setSuccess(input) {
          var small = input.parent().children("small");
          input.addClass('success');
          input.removeClass('error');
          small.removeClass('error');
          small.addClass('success');
      }
  
      function setError(input) {
          var small = input.parent().children("small");
          input.removeClass('success');
          input.addClass('error');
          small.addClass('error');
          small.removeClass('success');
      }
  });
  
  
      // Инициализация маски для ввода телефона
      $(".phone").inputmask({"mask": "+7(999) 999-99-99"});

   
      $(".discuss-btn").click(function(){
        $('.popUp_discuss-project').removeClass('d-none');
        $('body').addClass('bodyStopScroll')
      });
   
      $(".send-request").click(function(){
        $('.popUp_apply-now').removeClass('d-none');
        $('body').addClass('bodyStopScroll')
      });

$(".popUp-close").click(function(){
  $(this).parent().parent().addClass('d-none');
  $('.content_form').removeClass('d-none')
  $('.content_thanks').addClass('d-none')
  $('.content_form .form').children('.input-box').children('.form-inp').val('')
  $('.content_form .form').children('.input-box').children('.form-text').val('')
  $('body').removeClass('bodyStopScroll')
});

$(document).on('click', function(event) {
  if ($(event.target).hasClass('popUp')) {
      $('.popUp').addClass('d-none');
      $('.content_form').removeClass('d-none')
      $('.content_thanks').addClass('d-none')
      $('.content_form .form').children('.input-box').children('.form-inp').val('')
      $('body').removeClass('bodyStopScroll')
  }
});




// filter *******

$('.filter-btn').click(function() {
  $('.filter-top').addClass('d-none');
  $('.menu-btn').addClass('d-none');
  $('.filter-body').addClass('showFilter');
});

$('.close-filter').click(function() {
  $('.filter-top').removeClass('d-none');
  $('.menu-btn').removeClass('d-none');
  $('.filter-body').removeClass('showFilter');
});

$('.apply-btn').click(function() {
  $('.filter-top').removeClass('d-none');
  $('.menu-btn').removeClass('d-none');
  $('.filter-body').removeClass('showFilter');
});

$('.filter .body-top').click(function() {
  $('.filter-top').removeClass('d-none');
  $('.menu-btn').removeClass('d-none');
  $('.filter-body').removeClass('showFilter');
});

$('.reset-filter').click(function() {
  $(".filter-list li").removeClass('check_selected')
  $('.apply-info').text(0)
  $('.filter-selected span').text(0)
  $(".filter-list li input").prop("checked", false)
});

$(".filter-list li").on("click", function() {
  $(this).toggleClass('check_selected');
  $('.filter-list').each(function(){
     var apply_info = $('.check_selected').length;
     $('.apply-info').empty();
     $('.apply-info').append(apply_info);
     $('.filter-selected span').empty();
     $('.filter-selected span').append(apply_info);
  });
});







