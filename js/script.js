$(document).ready(function () {
	
	

$("transition").css("display", "none");

    $("transition").fadeIn(500);

	$("transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body transition").fadeOut(500, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}

	  $('.sl').slick({
	  	autoplay:true,
	  	autoplaySpeed:4000,
	  	fade:true,
	  	
	  	arrows:true,
	  	speed:700,
	  	asNavFor:'.sl2',

      });
      $('.sl2').slick({
	
			arrows:false,
			slidesToShow: 4,
			slidesToScroll: 3,
			centerMode: true,
			centerPadding: '20px',
	  		asNavFor:'.sl',
	  		focusOnSelect: true,
	  		responsive:[{
	  			breakpoint:900,
	  			settings: {
	  				slidesToShow:3,
	  				slidesToScroll:3,
	  			}
	  		}]
      });
     
	 var userFeed = new Instafeed({
   	get: 'user',
   	userId: '5387223865',
   	limit:12,
   	resolution:'standart_resolution',
   	accessToken: '5387223865.1677ed0.375834607cef4c17a24b49fca59382f2',
   	sortBy:'most-recent',
   	template:'<div class="gallary"><a href="{{image}}" title="{{caption}}" target="_blanc"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
   });
   userFeed.run();

});


  


