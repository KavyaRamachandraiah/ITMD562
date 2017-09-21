$("div").hide();
function get_random_color() {
	var letters = '0123456789ABCDEF'.split('');
	var color1 = '#';
	for (var i = 0; i < 6; i++) {
		color1 += letters[Math.round(Math.random() * 15)];
	}
	return color1;
}
$(document).ready(function(){
	var time = 0;
	$("div ").each(function() {
		$(this).children("p").css('color', get_random_color());
		$(this).delay(time).fadeIn(3000);
		time += 6000;
	});
});