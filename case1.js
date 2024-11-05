$(document).ready(function () {
    // Typing animation
    (function ($) {
      $.fn.writeText = function (content) {
        var contentArray = content.split(""),
          current = 0,
          elem = this;
        setInterval(function () {
          if (current < contentArray.length) {
            elem.text(elem.text() + contentArray[current++]);
          }
        }, 80);
      };
    })(jQuery);
  
    // Input text for typing animation
  
    // Initialize wow.js
    new WOW().init();
  
    // Toggle nav screen on and off
    $(".fa-bars").click(function () {
      $(".nav-screen").animate(
        {
          right: "0px",
        },
        200
      );
      $("body").animate(
        {
          right: "285px",
        },
        200
      );
    });
  
    $(".fa-times").click(function () {
      $(".nav-screen").animate(
        {
          right: "-285px",
        },
        200
      );
      $("body").animate(
        {
          right: "0px",
        },
        200
      );
    });
  
    $(".nav-links a").click(function () {
      $(".nav-screen").animate(
        {
          right: "-285px",
        },
        500
      );
      $("body").animate(
        {
          right: "0px",
        },
        500
      );
    });
  

    $(".option").click(function(){
        $(".option").removeClass("active");
        $(this).addClass("active");
        
     });



     let currentIndex = 0;

     function showCard(index) {
         const cards = document.querySelectorAll('.carousel-container .blog-card');
         const container = document.querySelector('.carousel-container');
     
         // Loop to the start or end if index is out of bounds
         if (index >= cards.length) {
             currentIndex = 0;
         } else if (index < 0) {
             currentIndex = cards.length - 1;
         } else {
             currentIndex = index;
         }
     
         // Shift carousel to show the current card
         container.style.transform = `translateX(-${currentIndex * 100}%)`;
     }
     
     // Swipe event handling for mobile
     document.querySelector('.carousel-container').addEventListener('touchstart', handleTouchStart, false);
     document.querySelector('.carousel-container').addEventListener('touchmove', handleTouchMove, false);
     
     let x1 = null;
     
     function handleTouchStart(evt) {
         x1 = evt.touches[0].clientX;
     }
     
     function handleTouchMove(evt) {
         if (!x1) return;
     
         let x2 = evt.touches[0].clientX;
         let xDiff = x1 - x2;
     
         if (xDiff > 0) {
             // Swipe left
             showCard(currentIndex + 1);
         } else {
             // Swipe right
             showCard(currentIndex - 1);
         }
         x1 = null; // Reset touch start position
     }
    // Initiate full page scroll
    $("#fullpage").fullpage({
      licenseKey: '62M8J-W6OQK-8I757-06NH9-XDKTQ', // Add your license key here
  
      autoScrolling: true,
      scrollBar: true,
      responsiveWidth: 400,
      navigation: true,
      navigationTooltips: ["intro", "problem", "research", "prototypes", "connect"],
      anchors: ["aboutme", "about", "portfolio", "contact", "connect"],
      menu: "#myMenu",
      fitToSection: false,
  
   
      }); // <-- Correctly closing fullpage.js initialization  
  
      jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
        },2000);
      });
  
    // Move section down one
    $(document).on("click", "#moveDown", function () {
      $.fn.fullpage.moveSectionDown();
    });
  
    // fullpage.js link navigation
    $(document).on("click", "#skills", function () {
      $.fn.fullpage.moveTo(2);
    });
  
    $(document).on("click", "#projects", function () {
      $.fn.fullpage.moveTo(3);
    });
  
    $(document).on("click", "#contact", function () {
      $.fn.fullpage.moveTo(4);
    });
  
    // Ajax form
    var form = $("#ajax-contact");
    var formMessages = $("#form-messages");
  
    
  });