
$(document).ready(function() {
	$('#pagepiling').pagepiling({
		menu: '#menu',
	    	anchors: ['top', 'about', 'join', 'gallery'],
		navigation: {
			'position': 'right',
			'tooltips': ['top', 'about', 'join', 'gallery']
		},
	    	scrollingSpeed: 1000,
    		sectionSelector: '.section'
	});

	$('.bxslider').bxSlider();
});