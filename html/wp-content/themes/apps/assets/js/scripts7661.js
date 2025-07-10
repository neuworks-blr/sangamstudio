
/*************************************

Template Name: APPS - Responsive APP Landing Page
Author: thematicwebs
Version: 1.0
Design and Developed by: thematicwebs

NOTE: This is main jquery of the template.

****************************************/
jQuery(document).ready(function ($) {
	"use strict";
    
    var $window = $(window),
            $body = $('body');

    jQuery(document).ready(function(){
        
        /*=============================
                Sticky header
        ==============================*/
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $window.on('scroll', function() {
          if ($(".navbar").offset().top > 100) {
            $(".navbar-fixed-top").addClass("menu-top-fixed");
              } else {
                $(".navbar-fixed-top").removeClass("menu-top-fixed");
              }
        });
    
        /*=============================
                Smoothscroll js
        ==============================*/
        $(function() {
          $('.custom-navbar li.smooth-scroll a, a.scroll-btn').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
          });
        });  
        
        /*======================================
            background-image flickering
            solution for mobile
        ========================================*/
        var bg = jQuery("#video_bg_YT");
        function resizeBackground() {
            bg.height(jQuery(window).height() + 60);
        }
      resizeBackground();
            
        /*======================================
            jquery scroll spy
        ========================================*/
        $body.scrollspy({
        
            target : ".navbar-collapse",
            offset : 95
        
        });
        
        
        /*=================================
            Bootstrap menu fix
        ==================================*/
        $(".navbar-toggle").on("click", function(){
        
            $body.addClass("mobile-menu-activated");
        
        });
        
        $("ul.nav.navbar-nav li a").on("click", function(){
        
            $(".navbar-collapse").removeClass("in");
        
        });
        
        
        /*=================================
            Bootstrap menu fix
        ==================================*/
        (function () {

            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

            } else {
                $(window).stellar({
                    horizontalScrolling: false,
                    responsive: true
                });
            }

        }());
         
        
        /*=============================
            WOW js
        ==============================*/
        new WOW({ mobile: false }).init();

            $('.mockup-slider').owlCarousel({ 
                items: 1,
            autoPlay: 10000, //Set AutoPlay to 4 seconds
            loop:true,
            margin : 0,
            pagination	: true,
            autoplay:true,
             animateOut: 'fadeOut',
        animateIn: 'fadeIn'
        });


    /*===================================
            owl carousel screenshot
     ====================================*/
    $('.screenshot-slider').owlCarousel({ 
        autoPlay: 10000, //Set AutoPlay to 4 seconds
        loop:true,
        margin : 10,
        pagination	: true,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
        
        /*=========================
        magnificPopup video
        ============================*/
        $('.sc-popup').magnificPopup({
            type:'image',
            gallery:{
                enabled:true
            } 
        });
        
        /*===================================
            owl carousel testimonial
        ====================================*/
         $(".testimonial-list").owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            autoplay:true,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
        
        /*=========================
            magnificPopup video
       ============================*/
        var videoPopup = $(".video-play");
            videoPopup.magnificPopup({
            type: 'iframe'

        });
        
        
        /*================================
                active counter
        =================================*/
        $('.stat-area').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.counter').each(function() {
                    var $this = $(this);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });
        
        /*================================
                accordion
        =================================*/
        $('.accordion-titulo').on('click',function(e) {
    e.preventDefault();
      var $this = $(this);
    
        if($this.next().hasClass('shows')) {
            $this.next().removeClass('shows');
            $this.next().slideUp(350);
            $this.parent().removeClass('add-active');
        }else{
            $this.parent().addClass('add-active');
            $('.accordion-titulo').not(this).parent().removeClass('add-active');
            $this.parent().parent().find('.accordion-content').removeClass('shows');
            $this.parent().parent().find('.accordion-content').slideUp(350);
            $this.next().toggleClass('shows');
            $this.next().slideToggle(350);
      }
        
    });
        

    });


   $window.on('load', function(){
          /*=============================
                Preloder
        ==============================*/
         $('.spinner').fadeOut(); 
        $('.preloader').delay(350).fadeOut(500);
        $body.delay(350).css({'overflow':'visible'});
       
       
            
        });


});