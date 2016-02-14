$(document).ready(function(){

	$('#slider').bxSlider({
	    ticker: true,
	    tickerSpeed: 9000,
	    tickerHover: false,
	    pager: false,
	    slideWidth: 170,
  		slideMargin: 10,
    });

	var $navi = $('#nav_f');
	var logo = 'logo-container';

	function update_innerHTML (arg,copy) {

		var updated = $('#'+arg)[0];
		// console.log(updated);
		// console.log(copy);
		updated.innerHTML = copy;	
	}
	
	if ($navi.width() < 360) {
		var newText = 'OSM';
		update_innerHTML(logo,newText);
		
	}

	
	
	


    
});