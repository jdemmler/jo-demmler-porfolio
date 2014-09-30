
var bottom_of_blue;

window.onload = function() {


// on browser load set height

	//Get the window's height
	var window_height = $(window).height();

	$('header').css('height', window_height)
}


// accordian code 

$('.about > .show-hide').hide();

var exampleReveal = $('.about li');

exampleReveal.click(function() {
	if ( $(this).children('span').text() =='  +' ) {
		$(this).children('span').text('  -') 

	}else{
		$(this).children('span').text('  +')
	}
	var temp = $(this).next()
	$(this).next().slideToggle();
});


// back to top icon / scroll

$(document).ready(function(){ 
  
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        }
		)
		; 
  
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
  
    });