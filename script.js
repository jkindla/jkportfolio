

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
  $("#holder").writeText("UX DESIGNER + FRONT-END DEVELOPER");

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

  // Initiate full page scroll
  $("#fullpage").fullpage({
    licenseKey: '62M8J-W6OQK-8I757-06NH9-XDKTQ', // Add your license key here

    autoScrolling: true,
    scrollBar: true,
    responsiveWidth: 400,
    navigation: true,
    navigationTooltips: ["home", "about", "portfolio", "contact", "connect"],
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
// AJAX form
var form = $("#ajax-contact");
var formMessages = $("#form-messages");

$(form).submit(function (e) {
    e.preventDefault();
    var formData = $(form).serialize();
    $.ajax({
        type: "POST",
        url: $(form).attr("action"),
        data: formData,
    })
    .done(function () {
        $(formMessages).removeClass("error");
        $(formMessages).addClass("success");
        $(formMessages).text("Thank you! Your message has been sent successfully.");
        $("#name, #email, #message").val("");
    })
    .fail(function () {
        $(formMessages).removeClass("success");
        $(formMessages).addClass("error");
        $(formMessages).text("Oops! An error occurred, and your message could not be sent.");
    });
});
});