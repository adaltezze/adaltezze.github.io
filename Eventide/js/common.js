$('.owl-carousel').owlCarousel({
	loop:true,
	responsiveClass:true,
	// nav: true,
	// navText: ['<i class="fa fa-arrow-circle-right"></i>', '<i class="fa fa-arrow-circle-left"></i>'],
	autoplay: true,
	autoplayTimeout: 2000,
	responsive:{
		0:{
			items:1,
			margin:10
		},
		576:{
			items:3,
			margin:20
		},
		768:{
			items:5,
			margin:50
		},
		992:{
			items:5,
			margin:70
		}
	}
})

 new WOW().init();