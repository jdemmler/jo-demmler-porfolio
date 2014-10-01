
var bottom_of_world;

window.onload = function() {


// on browser load set height

	//Get the window's height
	var window_height = $(window).height();

	$('header').css('height', window_height);

	var bottom =$('nav').position().top+$('nav').outerHeight(true);

	if (window_height < bottom) {

	$('header').css('height', bottom + 40);	
	}
}


// accordian code 

$('.about > .show-hide').hide();

var exampleReveal = $('.about li');

exampleReveal.click(function() {
	if ( $(this).children('span').text() =='  +' ) {
		$(this).children('span').text('  -') 
		$(this).next().slideToggle(20,"linear",function() {
			console.log('test');
			var bottom_of_nav =$('nav').position().top+$('nav').outerHeight(true);
			var bottom_of_header =  parseInt($('header').css('height'), 10);
			console.log(bottom_of_nav);
			console.log(bottom_of_header);
			if(bottom_of_nav > bottom_of_header){
				
				bottom_of_world = bottom_of_header;
				$('header').css('height', bottom_of_nav + 40);	
		}
	
		});
		

	}else{
		$(this).children('span').text('  +')
		
			$(this).next().slideToggle(20,"linear",function() {
				$('header').css('height', bottom_of_world);	});


	}



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