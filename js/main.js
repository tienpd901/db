//Set height for slideshow and dropdown right menu.
window.onload = function() {
	var h = window.innerHeight;
	var slide_h = h - 230;
	$('.bx-viewport').css('height', slide_h + 'px');

	var dropdown_h = h - 93;

	$('.db-list-nav-items').css('height', dropdown_h + 'px');
};

$('#btn-toggle-nav').click(function(){
	$('.db-list-nav-items').slideToggle();
});

$('#btn-show-input').click(function(){
	$('.db-form-subcribe').toggle("slide",1000);
});

