var correct = ["10", "1", "120", "594", "1000", "144"];

// Checks if radio is checked or not
$(".options div").on("click", function() {
	var check = $(this).attr("class");
	$("." + check).prop("checked", true);

});

$("#box").on("click", function() {
	var score = 0;
	var arr = [];
	arr = document.querySelectorAll("input:checked + li");
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].textContent === correct[i]) {
			score++;

		}

	}
	$("#scoreboard").append("Your score is : " + score + "/6");
	$("#scoreboard").css("display", "block");
	 $('html, body').animate({scrollTop:$(document).height()}, 'slow');  //Scroll to the bottom of the page
});