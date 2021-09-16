

if($(window).width() < 767) {
    $('.footer-links h4').click( function(e) {
		$(this).parent().find('ul').slideToggle();
	}); 
}


$('.service-slider1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='images/left.png'>","<img src='images/right.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$(document).ready(function () {
    $('.custom-tabbing .tabpanel:first').addClass("active");
    $('.tab-button li:first').addClass("active");
    $(".tab-button li").click(function(event)
    {
      var index= $(this).index();
      $('.tab-button li').removeClass("active");
      $(this).addClass('active');
      $('.custom-tabbing .tabpanel').removeClass('active');
      $('.custom-tabbing .tabpanel').eq(index).addClass('active');
    });
});
function myfunction(event) {
    event.preventDefault();
    $(".none").toggleClass("display");
    if ($(".none").hasClass("display")) {
        $(".car-more").html("No More Products");
        $(".down-move").addClass("active");

    } else {
        $(".none").removeClass("display");
        $(".car-more").html("Show More")
        $(".down-move").removeClass("active");
    }
};


 $('.manu-btns').click(function () {
        // $('.main-manu').slideDown();
        $('body').toggleClass('hiddd');
    })
    