

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

// var scroll = new SmoothScroll('a[href*="#"]');







$(document).ready(function() {

	// $(function() {
 //          $.scrollify({
 //            section : ".section section__topTen",
 //          });
 //        });
 		 // $(function() {
    //             $.scrollify({
    //             	section : ".section section__topTen",
                    
    //             });
    //     }); 




	// hover over text, subheader floats up
	$("#broker-section").mouseenter(function() {
    	$( "#los-angeles" ).css({ 
    		"height": "auto",
    		"opacity": 1,
    		"transition": "ease-in 1s"
    	});
	}).mouseleave(function() {
    	$( "#los-angeles" ).css({
    		"opacity": 0,
    		"transition": "ease-out 1s"
    	});
	});
	// Text block function
		$("#broker-section").mouseenter(function() {
    	$( "#bagel-broker-text" ).css( "display", "block" );
	}).mouseleave(function() {
    	$( "#bagel-broker-text" ).css( "display", "none" );
	});
	//copy-block-transition
	$("#broker-section").mouseenter(function() {
    	$( "#bagel-broker-text" ).css({ 
    		"height": "auto", //auto
    		"opacity": 1,
    		"transition": "ease-in 1s"
    	});
	}).mouseleave(function() {
    	$( "#bagel-broker-text" ).css({
    		"opacity": 0,
    		"transition": "ease-out .2s",
    	});
	});
	// changing image on hover
	$("#broker-section").mouseenter(function() {
    	$(".img.img__top-ten").attr({ 
    		"src": "images/R&D-5.jpg",
    		"style":  "opacity: 1"
    	});
	}).mouseleave(function() {
    	$( ".img.img__top-ten" ).css({ 
    		// "src": "images/top-ten.jpeg",
    		"display": "none"

    	});
	});
	//CSS images transtitions
	// $(".section.section__topTen").mouseenter(function() {
 //    	$(".img.img__top-ten").css( "transition", "ease-in 3s" );
	// }).mouseleave(function() {
 //    	$( ".img.img__top-ten" ).css( "transition", "ease-out 3s" );
	// });
	//Header change css/js
	$("#broker-section").mouseenter(function() {
    	$("#bagel-broker").css({
    		"color": "white", 
    		"-webkit-text-stroke-width": "1px",
    		"-webkit-text-stroke-color": "blue"
    	});
    	$(".span.span__number").css("color", "blue");
	}).mouseleave(function() {
    	$( "#bagel-broker" ).css( "color", "blue" );
    	$(".span.span__number").css({
    		"color": "white", 
    		"-webkit-text-stroke-width": "1px",
    		"-webkit-text-stroke-color": "blue"
    	});
	});



	







	// hover over text, subheader floats up
	$("#bialy-section").mouseenter(function() {
    	$( "#cleveland-ohio" ).css({ 
    		"height": "auto",
    		"opacity": 1,
    		"transition": "ease-in 1s"
    	});
	}).mouseleave(function() {
    	$( "#cleveland-ohio" ).css({
    		"opacity": 0,
    		"transition": "ease-out 1s"
    	});
	});
	// Text block function
	$("#bialy-section").mouseenter(function() {
    	$( "#bialy-text" ).css( "display", "block" );
	}).mouseleave(function() {
    	$( "#bialy-text" ).css( "display", "none" );
	});
	//copy-block-transition
	$("#bialy-section").mouseenter(function() {
    	$( "#bialy-text" ).css({ 
    		"height": "auto",
    		"opacity": 1,
    		"transition": "ease-in 1s"
    	});
	}).mouseleave(function() {
    	$( "#bialy-text" ).css({
    		"opacity": 0,
    		"transition": "ease-out .2s",
    	});
	});
	// changing image on hover
	$("#bialy-section").mouseenter(function() {
    	$(".img.img__top-ten").attr({ 
    		"src": "images/test.jpeg",
    		"style":  "opacity: 1"
    	});
	}).mouseleave(function() {
    	$( ".img.img__top-ten" ).css({ 
    		// "src": "images/top-ten.jpeg",
    		"display": "none"
    	});
	});
	//CSS images transtitions
	// $(".section.section__topTen").mouseenter(function() {
 //    	$(".img.img__top-ten").css( "transition", "ease-in 3s" );
	// }).mouseleave(function() {
 //    	$( ".img.img__top-ten" ).css( "transition", "ease-out 3s" );
	// });
	//Header change css/js
	$("#bialy-section").mouseenter(function() {
    	$("#bb-header").css({
    		"color": "white", 
    		"-webkit-text-stroke-width": "1px",
    		"-webkit-text-stroke-color": "blue",
    		"cursor": "not-allowed"
    	});
    	$("#span-two").css("color", "blue");
	}).mouseleave(function() {
    	$( "#bb-header" ).css( "color", "blue" );
    	$("#span-two").css({
    		"color": "white", 
    		"-webkit-text-stroke-width": "1px",
    		"-webkit-text-stroke-color": "blue"
    	});
	});







// getting rid of copy transion home function

$("#broker-section").mouseenter(function() {
    	$( "#top-ten-text" ).css( "display", "none" );
	}).mouseleave(function() {
    	$( "#top-ten-text" ).css( "display", "block" );
	});

	$("#bialy-section").mouseenter(function() {
    	$( "#top-ten-text" ).css( "display", "none" );
	}).mouseleave(function() {
    	$( "#top-ten-text" ).css( "display", "block" );
	});






}); //end of doc











