jQuery(document).ready(function($) {
    $(".scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top - $('#nav').height() - 50}, 500);
    });
});

