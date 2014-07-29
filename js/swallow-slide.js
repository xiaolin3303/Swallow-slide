/*!
 * Swallow-Slide v1.0
 *
 * Contact: https://github.com/xiaolin3303
 * 2014-07-27
 *
 * Designed and built with all the love of Web
 */
function move(direction) {
	var currentEle = $('#stage .box .current');

	direction = direction || 'right';

	if(direction === 'right') {
		currentEle.removeClass('current').addClass('left-side');
		currentEle.next().removeClass('right-side')
					.addClass('current');
		currentEle = currentEle.next();
	}else{
		currentEle.removeClass('current').addClass('right-side');
		currentEle.prev().removeClass('left-side')
					.addClass('current');
		currentEle = currentEle.prev();
	}

	//更新各元素的left值
	var	prevAll = currentEle.prevAll(),
		nextAll = currentEle.nextAll();
	currentEle.css({'left': 0, 'z-index': ''});
	prevAll.each(function(index) {
		var _offset = [-150, -200, -250];
		if(index < _offset.length) {
			$(this).removeClass('hide').css('left', _offset[index]);
		}else{
			$(this).addClass('hide');
		}
	});
	nextAll.each(function(index) {
		var _offset = [150, 200, 250];
		if(index < _offset.length) {
			$(this).removeClass('hide').css({'left': _offset[index], 'z-index': (3-index)});
		}else{
			$(this).addClass('hide');
		}
	});

}

$(function() {
	$('#stage .box > li').on('click', function() {
		if($(this).hasClass('left-side')) {
			move('left');
		}else if($(this).hasClass('right-side')){
			move('right');
		}
	});
});