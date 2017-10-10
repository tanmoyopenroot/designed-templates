$(function () {
  var $login_body=$("#login_signup .modal-body");

  $("#log_in").click(function(){
    var bodyContent=$(".login_form").html();
    $login_body.html(bodyContent);
  })

  var $signup_body=$("#login_signup .modal-body");

  $("#sign_up").click(function(){
    var bodyContent=$(".signup_form").html();
    $signup_body.html(bodyContent);
  })
})

$(function() { 
    $('a[href*="#"]:not([href="#"]):not([href="#text_carousel"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
        { 
            var target = $(this.hash); 
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); 
            if (target.length) {
                $('html, body').animate({ scrollTop: target.offset().top }, 1000); 
                return false; 
            }
        } 
    }); 
});