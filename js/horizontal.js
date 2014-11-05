$(function($){
	'use strict';
	(function() {
		var $frame = $('#effects');
		var $wrap  = $frame.parent();
		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateMiddle: 1,
			// activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 2,
			scrollBar: $wrap.find('.scrollbar'),
			pagesBar: 1,
			scrollBy: 1,
			speed: 400,
			moveBy:	600,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			cycleBy: 'items',
			cycleInterval: 1000,
			pauseOnHover: 1,
			keyboardNavBy: $wrap.find('.items')

		});


$('ul').each(function() {
    $('li').on('click', function() {
        var $frame = $('#effects');
        var index= $(this).attr("id");
        index = parseInt(index.slice(2));
        console.log(typeof index);
        console.log(index);
        $frame.sly('activate', index-1);
        console.log($(this).text());
    })
})

	}());
});
$(window).resize(function(e) {
    var $frame = $('#effects');
    $frame.sly('reload');

});

