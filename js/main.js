

// var rellax = new Rellax('.rellax', {
//         // center: true
//         callback: function(position) {
//             // callback every position change
//             console.log(position);
//         }
//       });



// $( document ).ready(function() {
// 	$("#h2__largeText").mouseenter(function() {
//     	$( ".text.text__paragraph--container" ).css( "display", "block" );
// 	}).mouseleave(function() {
//     	$( ".text.text__paragraph--container" ).css( "display", "none" );
// 	});
// });

var scroll = new SmoothScroll('a[href*="#"]');



$(document).ready(function() {
	// hover over text, subheader floats up
	$(".section.section__topTen").mouseenter(function() {
    	$( "#los-angeles" ).css({ 
    		"transition": "ease-in 3s",
    		"display": "block"
    	});
	}).mouseleave(function() {
    	$( "#los-angeles" ).css({
    		"transition": "ease-out 3s",
    	 	"display": "none"
    	});
	});
	// Text block function
		$(".section.section__topTen").mouseenter(function() {
    	$( "#bagel-broker-text" ).css( "display", "block" );
	}).mouseleave(function() {
    	$( "#bagel-broker-text" ).css( "display", "none" );
	});
	// changing image on hover
	$(".section.section__topTen").mouseenter(function() {
    	$(".img.img__top-ten").attr( "src", "images/R&D-5.jpg" );
	}).mouseleave(function() {
    	$( ".img.img__top-ten" ).attr( "src", "images/top-ten.jpeg" );
	});
	//CSS images transtitions
	// $(".section.section__topTen").mouseenter(function() {
 //    	$(".img.img__top-ten").css( "transition", "ease-in 3s" );
	// }).mouseleave(function() {
 //    	$( ".img.img__top-ten" ).css( "transition", "ease-out 3s" );
	// });
	//Header change css/js
	$(".section.section__topTen").mouseenter(function() {
    	$("#bagel-broker").css({
    		"color": "white", 
    		"-webkit-text-stroke-width": "1px",
    		"-webkit-text-stroke-color": "blue",
    		"cursor": "not-allowed"
    	});
	}).mouseleave(function() {
    	$( "#bagel-broker" ).css( "color", "blue" );
	});
});


// "transition": "ease-out .4s"



