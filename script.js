$(document).ready(() => {

	let header = $('.header'),
	scrollPrev = 0;

	$(window).scroll(function() {
		let scrolled = $(window).scrollTop();
		if ( scrolled >= 200 && scrolled > scrollPrev ) {
			header.addClass('out');
		} else {
			header.removeClass('out');
		}
		scrollPrev = scrolled;
	});

	$(window).scroll(() => {
		let scrollPos = $(window).scrollTop();
		
		if ( scrollPos >= 50) {
			$('.logo__fluid').addClass('go__out')
		} else {
			$('.logo__fluid').removeClass('go__out')
		}
	})


	


	
})