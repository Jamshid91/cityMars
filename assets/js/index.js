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




$(document).ready(function() {
  $('.submit-btn').click(function() {
      var name = $(this).parent().children('.input-box').children('.name');
      var phone = $(this).parent().children('.input-box').children('.phone');
      var message = $(this).parent().children('.input-box').children('.message');

      console.log(name)
  
      var nameVal = name.val();
      var phoneVal = phone.val();
      var messageVal = message.val();

      if (nameVal == '') {
          setError(name);
      } else {
          setSuccess(name);
      }

      if (phoneVal === '' || phoneVal.substr(-1) === '_') {
          setError(phone);
      } else {
          setSuccess(phone);
      }

      if (messageVal == '') {
          setError(message);
      } else {
          setSuccess(message);
      }
  
  
      if (phone.next().hasClass('success') && name.next().hasClass('success') && message.next().hasClass('success')) {
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







