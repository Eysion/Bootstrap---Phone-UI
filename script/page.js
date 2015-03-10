$(document).ready(function() {
	//subject-page
	$("#subbody .sublist .listbar").find("li").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).children('.userup').stop(true, true).animate({left: "-15px"}, 200);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).children('.userup').stop(true, true).animate({left: "-10px"}, 200);
	});
	$("#subbody .sublist nav.listbar li .subcontent .upintro span").append('  /');

	//application
	$("#applist").children('.col-md-9').find('.row li:first').removeClass('col-md-2 col-xs-4').addClass('col-md-4 col-xs-8');
	$("#applist").children('.col-md-9').find('.row li').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).find('.download').show();
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).find('.download').hide();
	});

	//appitem
	
	
});