$(document).ready(function() {
    // $(document).keydown(function(key) {
    //     switch(parseInt(key.which,10)) {
	// 		// Left arrow key pressed
	// 		case 37:
	// 			$('.mario').animate({left: "-=50px"}, 'fast');
	// 			break;
	// 		// Up Arrow Pressed
	// 		case 38:
	// 			$('.mario').animate({top: "-=50px"}, 'fast');
	// 			break;
	// 		// Right Arrow Pressed
	// 		case 39:
	// 			$('.mario').animate({left: "+=50px"}, 'fast');
	// 			break;
	// 		// Down Arrow Pressed
	// 		case 40:
	// 			$('.mario').animate({top: "+=50px"}, 'fast');
	// 			break;
	// 	}
	// });
	$('.dot').click(function(event) {
		// var x = event.pageX,
		// 	y = event.pageY;

		var position = $('#1').position();
		var percentLeft = position.left / $('#counter').width() * 100;
		var percentTop = position.top / $('#counter').height() * 100;
		console.log(position);

		$('.mario')
		.animate({
			top: 68 + '%',
		})
		.animate({
			left: 23 + '%',
		})
		.animate({
			top: 36 + '%',
		})
		.animate({
			left: 34 +'%',
		})
		.animate({
			top: percentTop + '%',
			left: percentLeft + '%'
		});
	});
});