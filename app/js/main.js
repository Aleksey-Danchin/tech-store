jQuery(document).ready(function($) {
	
	// Open Fav list
	$('.fav-list__button').click(function(){
		showDropDown(this);
	})

	// Open Cart list
	$('.cart-list__button').click(function(){
		showDropDown(this);
	})

	function showDropDown(context){
		let dropDown = $(context).parent().find('.list-dropdown');
		$('.list-dropdown').not(dropDown).fadeOut();
		dropDown.fadeToggle();
	}

	// remove item from fav list
	$('.product-list-item__delete').click(function(){
		$(this).parent().remove();
	})

});