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
var x ;
//Random color for active Sly :P
// setInterval($('li.active').css("background-color", '#'+Math.floor(Math.random()*16777215).toString(16)),10000);
$('ul').each(function() {
$('li').on('click', function() {
var index= $(this).attr("id");
index = parseInt(index.slice(2));
// console.log(typeof index);
// console.log(index); 		DEBUGGING THE INDEX PART
$frame.sly('activate', index-1);
$frame.sly('pause');
// console.log($(this).hasClass("active"));
console.log(x =$(this).prev().prop('tagName'));
console.log("Has active class (testing)", $(x).hasClass("active"))
console.log($(this).text());

var txt = $(this).text();


$('div.fade>.modal-dialog>.modal-content>.modal-header').append('<h1 class="modal-title alert alert-info">'+txt+'</h1>');

if(txt == "Botsumo")
	$('#bot').modal();
else if(txt == "Wishing Well")
	$('#well').modal();
else if(txt == "Back To School")
	$('#bts').modal();
else
	$('#def').modal();


$('.fade').on('hidden.bs.modal', function () {
$frame.sly('resume');
$('.modal-title').remove();
});
}) // End of li
})     //End of ul
// $('.frame').on('click', '.active', function()	{
// alert(1);
// })

}());
});
$(window).resize(function(e) {
var $frame = $('#effects');
$frame.sly('reload');
});
