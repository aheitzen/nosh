

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





$(document).ready(function() {
	// hover over text, subheader floats up
	$("#bagel-broker").mouseenter(function() {
    	$( "#los-angeles" ).css( "display", "block" );
	}).mouseleave(function() {
    	$( "#los-angeles" ).css( "display", "none" );
	});
	// changing image on hover
	$("#bagel-broker").mouseenter(function() {
    	$(".img.img__top-ten").attr( "src", "images/R&D-5.jpg" );
	}).mouseleave(function() {
    	$( ".img.img__top-ten" ).attr( "src", "images/top-ten.jpeg" );
	});
});



