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
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 1,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 400,
			moveBy:600,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			cycleBy: 'items',
			cycleInterval: 1000,
			pauseOnHover: 1
		});

	}());
// $('window').resize(x,false)
});
