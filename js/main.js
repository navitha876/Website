(function($) {
  "use strict";

  /*--------------------------
  preloader
  ---------------------------- */
  $(window).on('load', function() {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function() {
      $(this).remove();
    });
  });

  /*---------------------
   TOP Menu Stick
  --------------------- */
  var s = $("#sticker");
  var pos = s.position();
  $(window).on('scroll', function() {
    var windowpos = $(window).scrollTop() > 300;
    if (windowpos > pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick");
    }
  });

  /*----------------------------
   Navbar nav
  ------------------------------ */
  var main_menu = $(".main-menu ul.navbar-nav li ");
  main_menu.on('click', function() {
    main_menu.removeClass("active");
    $(this).addClass("active");
  });

  /*----------------------------
   wow js active
  ------------------------------ */
  new WOW().init();

  $(".navbar-collapse a:not(.dropdown-toggle)").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //---------------------------------------------
  //Nivo slider
  //---------------------------------------------
  $('#ensign-nivoslider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 12,
    boxRows: 8,
    animSpeed: 500,
    pauseTime: 5000,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
  });

  /*----------------------------
   Scrollspy js
  ------------------------------ */
  var Body = $('body');
  Body.scrollspy({
    target: '.navbar-collapse',
    offset: 80
  });

  /*---------------------
    Venobox
  --------------------- */
  var veno_box = $('.venobox');
  veno_box.venobox();

  /*----------------------------
  Page Scroll
  ------------------------------ */
  var page_scroll = $('a.page-scroll');
  page_scroll.on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 55
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /*--------------------------
    Back to top button
  ---------------------------- */
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  /*----------------------------
   Parallax
  ------------------------------ */
  var well_lax = $('.wellcome-area');
  well_lax.parallax("50%", 0.4);
  var well_text = $('.wellcome-text');
  well_text.parallax("50%", 0.6);

  /*--------------------------
   collapse
  ---------------------------- */
  var panel_test = $('.panel-heading a');
  panel_test.on('click', function() {
    panel_test.removeClass('active');
    $(this).addClass('active');
  });

  /*---------------------
   Testimonial carousel
  ---------------------*/
  var test_carousel = $('.testimonial-carousel');
  test_carousel.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  /*----------------------------
   isotope active
  ------------------------------ */
  // portfolio start
  $(window).on("load", function() {
    var $container = $('.awesome-project-content');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    var pro_menu = $('.project-menu li a');
    pro_menu.on("click", function() {
      var pro_menu_active = $('.project-menu li a.active');
      pro_menu_active.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });

  });
  //portfolio end


 $(function(){

$.ajax({
    url: 'http://44.236.206.79:8000/api/get-dcube-jobdetails',
    type: 'GET',
    success: function (res) {
      
      console.log("----------",res);
       $.each(res, function (i, item) {
          console.log(item);
         
         $('#Jobtype').append('<option value='+item.JOB_ID+'>'+item.JOB_TITLE+'</option>'); 
         });        
    }


});

})

/*--------------------------------------
GET JOB_DETAILS
----------------------------------------*/
$.ajax({
    url: 'http://44.236.206.79:8000/api/get-dcube-jobdetails',
    type: 'GET',
    success: function (res) {
      var trHTML = '';
      console.log("----------",res);
      $.each(res, function (i, item) {
trHTML += '<tbody id=jobdetails><tr><td>' + item.JOB_ID + '</td><td>' + item.JOB_TITLE + '</td><td>' + item.JOB_LOCATION + '</td></tr></tbody>';
      });
       $('#job_tbl').append(trHTML);
      }
    });
$("#applicationform").submit(function(e) {
  alert("bvndfbvfjdvnd");
                 e.preventDefault();
                var fd = new FormData();
                var files = $('#avatar')[0].files[0];
                fd.append('avatar', files);

       
                 // console.log(formData);
                 $.ajax({
                    type       : 'POST',
                    url:'http://44.236.206.79:9090/profile',
                    processData: false,
                    contentType: false,                     
                     // data:{avatar:avatar}, 
                     data:fd,
                      success    : function (res) {
                        console.log("ttttt",res)
                        
                        }
              });
                 });
// $("#applicationform").submit(function(e) {
//   alert("bvndfbvfjdvnd");
//                  e.preventDefault();
//                  // let fileName = $('#myfile')[0];
//                  // var fd = new FormData();
//                  // var avatar = $('#avatar').prop('files')[0];
//                  // console.log(avatar);
//                  // var avatar = [];
// // var postData={
// //  avatar:$("#avatar").val()
// // };
     
// // console.log(files);
// //       // Add the uploaded image content to the form data collection
// //       if (files.length > 0) {
    
// //            avatar.push("UploadedImage", files);
// //            console.log(avatar);
// //       }
//  var avatar=$('#avatar').get(0).files[0];

//       console.log(avatar);

//                 //  var formData = new FormData($('#applicationform')[0]);  
//                 //  // console.log(resume);
//                 //  var JOB_ID=$("#Jobtype option:selected").val();
//                 //  var NAME=$('#Name').val();
//                 //  var EMAIL=$('#Email').val();
//                 // var  NUMBER=$('#number').val();
//                 //    var EXPERIENCE=$('#experience').val();
//                     // var RESUME=$('#avatar').get(0).files[0].name;
//                 //   var postData = {
//                 //     JOB_ID:$("#Jobtype option:selected").val(),
//                 //     NAME:$('#Name').val(),
//                 //     EMAIL:$('#Email').val(),
//                 //     NUMBER:$('#number').val(),
//                 //     EXPERIENCE:$('#experience').val(),
//                 //     // RESUME:$('#myfile').prop('files')[0]
//                 //     // RESUME:fd.append('file', $('#myfile').get(0).files[0]) // put the file here
//                 //     RESUME:$('#myfile').get(0).files[0]
//                 //   };
//                 //    console.log(postData);
//                   $.ajax({
//                      dataType   : 'json',
//                     url:'http://3866-27-6-138-57.ngrok.io/profile',
//                     // url:'http://44.236.206.79:8000/api/file123',
//                       // url        : 'http://44.236.206.79:8000/api/insert-dcube-jobapplications',
//                       type       : 'POST',
//  data:{avatar:avatar},
//                       // data:postData,
//                        // data       :{JOB_ID:JOB_ID,NAME:NAME,EMAIL:EMAIL,NUMBER:NUMBER,EXPERIENCE:EXPERIENCE,RESUME:RESUME},
//                       processData: false,
//                       contentType: false,
//                       success    : function (res) {
//                         console.log("ttttt",res)
                        
//                         }
//               });
//                });

/*-----------------------------------
Current Date Functionality
-------------------------------------*/

  /*---------------------
   Circular Bars - Knob

--------------------- */
  if (typeof($.fn.knob) != 'undefined') {
    var knob_tex = $('.knob');
    knob_tex.each(function() {
      var $this = $(this),
        knobVal = $this.attr('data-rel');

      $this.knob({
        'draw': function() {
          $(this.i).val(this.cv + '%')
        }
      });

      $this.appear(function() {
        $({
          value: 0
        }).animate({
          value: knobVal
        }, {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.val(Math.ceil(this.value)).trigger('change');
          }
        });
      }, {
        accX: 0,
        accY: -150
      });
    });
  }

})(jQuery);
