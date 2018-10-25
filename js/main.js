// Nav functionality start

var isSlideOneOpen = false
var isSlideTwoOpen = false
var isSlideThreeOpen = false
var isSlideFourOpen = false
var isSlideFiveOpen = false
var isSlideSixOpen = false
var isSlideSevenOpen = false

function toggleSlide(slide, isSlideOpen) {
    if (isSlideOpen) {
        //close slide
        $(slide).animate({
            left: '+=60%'
        }, 1000, 'easeOutQuad');
    } else {
        //open slide
        $(slide).animate({
            left: '-=60%'
        }, 1000, 'easeOutQuad');
    }
}

$( document ).ready(function() {
    $("#slide-one").click(function () {
        var hasChildrenOpen = false
        if (isSlideTwoOpen === true) {
            toggleSlide($("#slide-two"), isSlideTwoOpen);
            isSlideTwoOpen = false
            hasChildrenOpen = true
        }
        if (isSlideThreeOpen === true) {
            toggleSlide($("#slide-three"), isSlideThreeOpen);
            isSlideThreeOpen = false
            hasChildrenOpen = true
        }
        if (isSlideFourOpen === true) {
            toggleSlide($("#slide-four"), isSlideFourOpen);
            isSlideFourOpen = false
            hasChildrenOpen = true
        }
        if (isSlideFiveOpen === true) {
            toggleSlide($("#slide-five"), isSlideFiveOpen);
            isSlideFiveOpen = false
            hasChildrenOpen = true
        }
        if (isSlideSixOpen === true) {
            toggleSlide($("#slide-six"), isSlideSixOpen);
            isSlideSixOpen = false
            hasChildrenOpen = true
        }
        if (isSlideSevenOpen === true) {
            toggleSlide($("#slide-seven"), isSlideSevenOpen);
            isSlideSevenOpen = false
            hasChildrenOpen = true
        }
        //if children are open do not close this tab
        if (hasChildrenOpen === false) {
            toggleSlide($("#slide-one"), isSlideOneOpen);
            isSlideOneOpen = !isSlideOneOpen
        }
    });

    $("#slide-two").click(function () {
        var hasChildrenOpen = false
        //if slide 2 is closed
        if (isSlideOneOpen === false) {
            toggleSlide($("#slide-one"), isSlideOneOpen);
            isSlideOneOpen = true
        }
        if (isSlideThreeOpen === true) {
            toggleSlide($("#slide-three"), isSlideThreeOpen);
            isSlideThreeOpen = false
            hasChildrenOpen = true
        }
        if (isSlideFourOpen === true) {
            toggleSlide($("#slide-four"), isSlideFourOpen);
            isSlideFourOpen = false
            hasChildrenOpen = true
        }
        if (isSlideFiveOpen === true) {
            toggleSlide($("#slide-five"), isSlideFiveOpen);
            isSlideFiveOpen = false
            hasChildrenOpen = true
        }
        if (isSlideSixOpen === true) {
            toggleSlide($("#slide-six"), isSlideSixOpen);
            isSlideSixOpen = false
            hasChildrenOpen = true
        }
        if (isSlideSevenOpen === true) {
            toggleSlide($("#slide-seven"), isSlideSevenOpen);
            isSlideSevenOpen = false
            hasChildrenOpen = true
        }
        //if children are open do not close this tab
        if (hasChildrenOpen === false) {
            toggleSlide($("#slide-two"), isSlideTwoOpen);
            isSlideTwoOpen = !isSlideTwoOpen
        }
    });

    $("#slide-three").click(function () {
        var hasChildrenOpen = false
        //if slide 3 is closed
        if (isSlideOneOpen === false) {
            toggleSlide($("#slide-one"), isSlideOneOpen);
            isSlideOneOpen = true
        }
        if (isSlideTwoOpen === false) {
            toggleSlide($("#slide-two"), isSlideTwoOpen);
            isSlideTwoOpen = true
        }
        if (isSlideFourOpen === true) {
            toggleSlide($("#slide-four"), isSlideFourOpen);
            isSlideFourOpen = false
            hasChildrenOpen = true
        }
        if (isSlideFiveOpen === true) {
            toggleSlide($("#slide-five"), isSlideFiveOpen);
            isSlideFiveOpen = false
            hasChildrenOpen = true
        }
        if (isSlideSixOpen === true) {
            toggleSlide($("#slide-six"), isSlideSixOpen);
            isSlideSixOpen = false
            hasChildrenOpen = true
        }
        if (isSlideSevenOpen === true) {
            toggleSlide($("#slide-seven"), isSlideSevenOpen);
            isSlideSevenOpen = false
            hasChildrenOpen = true
        }
        //if children are open do not close this tab
        if (hasChildrenOpen === false) {
            toggleSlide($("#slide-three"), isSlideThreeOpen);
            isSlideThreeOpen = !isSlideThreeOpen
        }
    });

    $("#slide-four").click(function () {
        var hasChildrenOpen = false
        //if slide 4 is closed
        if (isSlideOneOpen === false) {
            toggleSlide($("#slide-one"), isSlideOneOpen);
            isSlideOneOpen = true
        }
        if (isSlideTwoOpen === false) {
            toggleSlide($("#slide-two"), isSlideTwoOpen);
            isSlideTwoOpen = true
        }
        if (isSlideThreeOpen === false) {
            toggleSlide($("#slide-three"), isSlideThreeOpen);
            isSlideThreeOpen = true
        }
        if (isSlideFiveOpen === true) {
            toggleSlide($("#slide-five"), isSlideFiveOpen);
            isSlideFiveOpen = false
            hasChildrenOpen = true
        }
        if (isSlideSixOpen === true) {
            toggleSlide($("#slide-six"), isSlideSixOpen);
            isSlideSixOpen = false
            hasChildrenOpen = true
        }
        if (isSlideSevenOpen === true) {
            toggleSlide($("#slide-seven"), isSlideSevenOpen);
            isSlideSevenOpen = false
            hasChildrenOpen = true
        }
        //if children are open do not close this tab
        if (hasChildrenOpen === false) {
            toggleSlide($("#slide-four"), isSlideFourOpen);
            isSlideFourOpen = !isSlideFourOpen
        }
    });

    $("#slide-five").click(function () {
        var hasChildrenOpen = false
        //if slide 5 is closed
        if (isSlideOneOpen === false) {
            toggleSlide($("#slide-one"), isSlideOneOpen);
            isSlideOneOpen = true
        }
        if (isSlideTwoOpen === false) {
            toggleSlide($("#slide-two"), isSlideTwoOpen);
            isSlideTwoOpen = true
        }
        if (isSlideThreeOpen === false) {
            toggleSlide($("#slide-three"), isSlideThreeOpen);
            isSlideThreeOpen = true
        }
        if (isSlideFourOpen === false) {
            toggleSlide($("#slide-four"), isSlideFourOpen);
            isSlideFourOpen = true
        }
        if (isSlideSixOpen === true) {
            toggleSlide($("#slide-six"), isSlideSixOpen);
            isSlideSixOpen = false
            hasChildrenOpen = true
        }
        if (isSlideSevenOpen === true) {
            toggleSlide($("#slide-seven"), isSlideSevenOpen);
            isSlideSevenOpen = false
            hasChildrenOpen = true
        }
        //if children are open do not close this tab
        if (hasChildrenOpen === false) {
            toggleSlide($("#slide-five"), isSlideFiveOpen);
            isSlideFiveOpen = !isSlideFiveOpen
        }
    });

    $("#slide-six").click(function () {
        var hasChildrenOpen = false
        //if slide 6 is closed
        if (isSlideOneOpen === false) {
            toggleSlide($("#slide-one"), isSlideOneOpen);
            isSlideOneOpen = true
        }
        if (isSlideTwoOpen === false) {
            toggleSlide($("#slide-two"), isSlideTwoOpen);
            isSlideTwoOpen = true
        }
        if (isSlideThreeOpen === false) {
            toggleSlide($("#slide-three"), isSlideThreeOpen);
            isSlideThreeOpen = true
        }
        if (isSlideFourOpen === false) {
            toggleSlide($("#slide-four"), isSlideFourOpen);
            isSlideFourOpen = true
        }
        if (isSlideFiveOpen === false) {
            toggleSlide($("#slide-five"), isSlideFiveOpen);
            isSlideFiveOpen = true
        }
        if (isSlideSevenOpen === true) {
            toggleSlide($("#slide-seven"), isSlideSevenOpen);
            isSlideSevenOpen = false
            hasChildrenOpen = true
        }
        //if children are open do not close this tab
        if (hasChildrenOpen === false) {
            toggleSlide($("#slide-six"), isSlideSixOpen);
            isSlideSixOpen = !isSlideSixOpen
        }
    });

    $("#slide-seven").click(function () {
        var hasChildrenOpen = false
        if (isSlideOneOpen === false) {
            toggleSlide($("#slide-one"), isSlideOneOpen);
            isSlideOneOpen = true
        }
        if (isSlideTwoOpen === false) {
            toggleSlide($("#slide-two"), isSlideTwoOpen);
            isSlideTwoOpen = true
        }
        if (isSlideThreeOpen === false) {
            toggleSlide($("#slide-three"), isSlideThreeOpen);
            isSlideThreeOpen = true
        }
        if (isSlideFourOpen === false) {
            toggleSlide($("#slide-four"), isSlideFourOpen);
            isSlideFourOpen = true
        }
        if (isSlideFiveOpen === false) {
            toggleSlide($("#slide-five"), isSlideFiveOpen);
            isSlideFiveOpen = true
        }
        if (isSlideSixOpen === false) {
            toggleSlide($("#slide-six"), isSlideSixOpen);
            isSlideSixOpen = true
        }
        //if children are open do not close this tab
        if (hasChildrenOpen === false) {
            toggleSlide($("#slide-seven"), isSlideSevenOpen);
            isSlideSevenOpen = !isSlideSevenOpen
        }
    });


    // hover over text, subheader floats up
	$("#broker-section").mouseenter(function() {
    	$( "#los-angeles" ).css({ 
    		"height": "auto",
    		"opacity": 1,
    		"transition": "ease-in 1s"
    	});
	// }).mouseleave(function() {
 //    	$( "#los-angeles" ).css({
 //    		"opacity": 0,
 //    		"transition": "ease-out 1s"
 //    	});
	});
	// Text block function
		$("#broker-section").mouseenter(function() {
    	$( "#bagel-broker-text" ).css( "display", "block" );
	});
	//copy-block-transition
	$("#broker-section").mouseenter(function() {
    	$( "#bagel-broker-text" ).css({ 
    		"height": "auto", //auto
    		"opacity": 1,
    		"transition": "ease-in 1s"
    	});
	});
	// changing image on hover
	$("#broker-section").mouseenter(function() {
    	$(".img.img__top-ten").attr({ 
    		"src": "images/bagel-1.png",
    		"style":  "opacity: 1"
    	});
	}).mouseleave(function() {
    	$( ".img.img__top-ten" ).css({ 
    		// "src": "images/top-ten.jpeg",
    		"display": "none"

    	});
	});
	$("#broker-section").mouseenter(function() {
    	$("#bagel-broker").css({
    		"color": "white", 
    		"-webkit-text-stroke-width": "1px",
    		"-webkit-text-stroke-color": "blue"
    	});
    	$(".span.span__number").css("color", "blue");
	});
    // hover over text, subheader floats up
	$("#bialy-section").mouseenter(function() {
    	$( "#cleveland-ohio" ).css({ 
    		"height": "auto",
    		"opacity": 1,
    		"transition": "ease-in 1s"
    	});
	});
	// Text block function
	$("#bialy-section").mouseenter(function() {
    	$( "#bialy-text" ).css( "display", "block" );
	});
	//copy-block-transition
	$("#bialy-section").mouseenter(function() {
    	$( "#bialy-text" ).css({ 
    		"height": "auto",
    		"opacity": 1,
    		"transition": "ease-in 1s"
    	});
	});
	// changing image on hover
	$("#bialy-section").mouseenter(function() {
    	$(".img.img__top-ten").attr({ 
    		"src": "images/bagel-2.png",
    		"style":  "opacity: 1"
    	});
	}).mouseleave(function() {
    	$( ".img.img__top-ten" ).css({ 
    		"display": "none"
    	});
	});
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

    // Nav functionality end

    	$("#bialy-section").mouseenter(function() {
        	$( "#top-ten-text" ).css( "display", "none" );
    	}).mouseleave(function() {
        	$( "#top-ten-text" ).css( "display", "block" );
    	});
//////// THIRD BAGEL SHOP
    // hover over text, subheader floats up
    $("#wholy-section").mouseenter(function() {
        $( "#austin-tx" ).css({ 
            "height": "auto",
            "opacity": 1,
            "transition": "ease-in 1s"
        });
    });
    // Text block function
    $("#wholy-section").mouseenter(function() {
        $( "#wholy-text" ).css( "display", "block" );
    });
    //copy-block-transition
    $("#wholy-section").mouseenter(function() {
        $( "#wholy-text" ).css({ 
            "height": "auto",
            "opacity": 1,
            "transition": "ease-in 1s"
        });
    });
    // changing image on hover
    $("#wholy-section").mouseenter(function() {
        $(".img.img__top-ten").attr({ 
            "src": "images/bagel-3.png",
            "style":  "opacity: 1"
        });
    }).mouseleave(function() {
        $( ".img.img__top-ten" ).css({ 
            // "src": "images/top-ten.jpeg",
            "display": "none"
        });
    });
    $("#wholy-section").mouseenter(function() {
        $("#wb-header").css({
            "color": "white", 
            "-webkit-text-stroke-width": "1px",
            "-webkit-text-stroke-color": "blue",
            "cursor": "not-allowed"
        });
        $("#span-three").css("color", "blue");
    }).mouseleave(function() {
        $( "#wb-header" ).css( "color", "blue" );
        $("#span-three").css({
            "color": "white", 
            "-webkit-text-stroke-width": "1px",
            "-webkit-text-stroke-color": "blue"
        });
    });
    // getting rid of copy transion home function

    $("#wholy-section").mouseenter(function() {
            $( "#top-ten-text" ).css( "display", "none" );
        }).mouseleave(function() {
            $( "#top-ten-text" ).css( "display", "block" );
        });

        $("#wholy-section").mouseenter(function() {
            $( "#top-ten-text" ).css( "display", "none" );
        }).mouseleave(function() {
            $( "#top-ten-text" ).css( "display", "block" );
        });


//////// FOURTH BAGEL SHOP
    // hover over text, subheader floats up
    $("#bb-section").mouseenter(function() {
        $( "#georgia" ).css({ 
            "height": "auto",
            "opacity": 1,
            "transition": "ease-in 1s"
        });
    });
    // Text block function
    $("#bb-section").mouseenter(function() {
        $( "#bb-text" ).css( "display", "block" );
    });
    //copy-block-transition
    $("#bb-section").mouseenter(function() {
        $( "#bb-text" ).css({ 
            "height": "auto",
            "opacity": 1,
            "transition": "ease-in 1s"
        });
    });
    // changing image on hover
    $("#bb-section").mouseenter(function() {
        $(".img.img__top-ten").attr({ 
            "src": "images/bagel-4.png",
            "style":  "opacity: 1"
        });
    }).mouseleave(function() {
        $( ".img.img__top-ten" ).css({ 
            "display": "none"
        });
    });
    $("#bb-section").mouseenter(function() {
        $("#bagelB-header").css({
            "color": "white", 
            "-webkit-text-stroke-width": "1px",
            "-webkit-text-stroke-color": "blue",
            "cursor": "not-allowed"
        });
        $("#span-four").css("color", "blue");
    }).mouseleave(function() {
        $( "#bagelB-header" ).css( "color", "blue" );
        $("#span-four").css({
            "color": "white", 
            "-webkit-text-stroke-width": "1px",
            "-webkit-text-stroke-color": "blue"
        });
    });
    // getting rid of copy transion home function

    $("#bb-section").mouseenter(function() {
            $( "#top-ten-text" ).css( "display", "none" );
        }).mouseleave(function() {
            $( "#top-ten-text" ).css( "display", "block" );
        });

        $("#bb-section").mouseenter(function() {
            $( "#top-ten-text" ).css( "display", "none" );
        }).mouseleave(function() {
            $( "#top-ten-text" ).css( "display", "block" );
        });



//////// FIFTH BAGEL SHOP
    // hover over text, subheader floats up
    $("#water-section").mouseenter(function() {
        $( "#georgia" ).css({ 
            "height": "auto",
            "opacity": 1,
            "transition": "ease-in 1s"
        });
    });
    // Text block function
    $("#water-section").mouseenter(function() {
        $( "#bb-text" ).css( "display", "block" );
    });
    //copy-block-transition
    $("#water-section").mouseenter(function() {
        $( "#bb-text" ).css({ 
            "height": "auto",
            "opacity": 1,
            "transition": "ease-in 1s"
        });
    });
    // changing image on hover
    $("#water-section").mouseenter(function() {
        $(".img.img__top-ten").attr({ 
            "src": "images/bagel-4.png",
            "style":  "opacity: 1"
        });
    }).mouseleave(function() {
        $( ".img.img__top-ten" ).css({ 
            "display": "none"
        });
    });
    $("#water-section").mouseenter(function() {
        $("#bagelB-header").css({
            "color": "white", 
            "-webkit-text-stroke-width": "1px",
            "-webkit-text-stroke-color": "blue",
            "cursor": "not-allowed"
        });
        $("#span-five").css("color", "blue");
    }).mouseleave(function() {
        $( "#bagelB-header" ).css( "color", "blue" );
        $("#span-five").css({
            "color": "white", 
            "-webkit-text-stroke-width": "1px",
            "-webkit-text-stroke-color": "blue"
        });
    });
    // getting rid of copy transion home function

    $("#bb-section").mouseenter(function() {
        $( "#top-ten-text" ).css( "display", "none" );
    }).mouseleave(function() {
        $( "#top-ten-text" ).css( "display", "block" );
    });

    $("#bb-section").mouseenter(function() {
        $( "#top-ten-text" ).css( "display", "none" );
    }).mouseleave(function() {
        $( "#top-ten-text" ).css( "display", "block" );
    });
     //end of doc
});

//HOME PAGE IMG RELOADER 

var imageRotator = [
    "images/img-rotator-10.png",
    "images/img-rotator-20.png",
    "images/landing-2.png",
    "images/img-rotator-30.png",
    "images/img-rotator-40.png",
    "images/img-rotator-50.png",
    "images/img-rotator-60.png",
];

var n = Math.floor(Math.random()*imageRotator.length);
document.querySelector('#base').style.backgroundImage = 'url(' + imageRotator[n] + ')';

