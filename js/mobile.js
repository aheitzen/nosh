// Nav functionality start

var isSlideOneOpen = false
var isSlideTwoOpen = false
var isSlideThreeOpen = false
var isSlideFourOpen = false
var isSlideFiveOpen = false
var isSlideSixOpen = false
var isSlideSevenOpen = false


$(".banner").mouseenter(function () {
    $("#banna").css("animation", 'drip 180s linear infinite');
});

$(".banner").mouseout(function () {
    $("#banna").css("animation-play-state", 'paused');
});


    function toggleSlide(slide, isSlideOpen) {
        if (isSlideOpen) {
            //close slide
            $(slide).animate({
                top: '+=60%'
            }, 1000, 'easeOutQuad');
        } else {
            //open slide
            $(slide).animate({
                top: '-=60%'
            }, 1000, 'easeOutQuad');
        }
    }



//function myFunction(x) {
//    if (x.matches) { // If media query matches
//        function toggleSlide(slide, isSlideOpen) {
//            if (isSlideOpen) {
//                //close slide
//                $(slide).animate({
//                    bottom: '+=60%'
//                }, 1000, 'easeOutQuad');
//            } else {
//                //open slide
//                $(slide).animate({
//                    bottom: '-=60%'
//                }, 1000, 'easeOutQuad');
//            }
//        } else {
//            function toggleSlide(slide, isSlideOpen) {
//                if (isSlideOpen) {
//                    //close slide
//                    $(slide).animate({
//                        left: '+=60%'
//                    }, 1000, 'easeOutQuad');
//                } else {
//                    //open slide
//                    $(slide).animate({
//                        left: '-=60%'
//                    }, 1000, 'easeOutQuad');
//                }
//            }
//        }
//    }
//
//
//    var x = window.matchMedia("(max-width: 641px)")
//    myFunction(x) // Call listener function at run time
//    x.addListener(myFunction) // Attach listener function on state changes



    $(document).ready(function () {
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
    });

    // Nav functionality end


    $(document).ready(function () {
        // hover over text, subheader floats up
        $("#broker-section").mouseenter(function () {
            $("#los-angeles").css({
                "height": "auto",
                "opacity": 1,
                "transition": "ease-in 1s"
            });
        }).mouseleave(function () {
            $("#los-angeles").css({
                "opacity": 0,
                "transition": "ease-out 1s"
            });
        });
        // Text block function
        $("#broker-section").mouseenter(function () {
            $("#bagel-broker-text").css("display", "block");
        }).mouseleave(function () {
            $("#bagel-broker-text").css("display", "none");
        });
        //copy-block-transition
        $("#broker-section").mouseenter(function () {
            $("#bagel-broker-text").css({
                "height": "auto", //auto
                "opacity": 1,
                "transition": "ease-in 1s"
            });
        }).mouseleave(function () {
            $("#bagel-broker-text").css({
                "opacity": 0,
                "transition": "ease-out .2s",
            });
        });
        // changing image on hover
        $("#broker-section").mouseenter(function () {
            $(".img.img__top-ten").attr({
                "src": "images/R&D-5.jpg",
                "style": "opacity: 1"
            });
        }).mouseleave(function () {
            $(".img.img__top-ten").css({
                // "src": "images/top-ten.jpeg",
                "display": "none"

            });
        });
        $("#broker-section").mouseenter(function () {
            $("#bagel-broker").css({
                "color": "white",
                "-webkit-text-stroke-width": "1px",
                "-webkit-text-stroke-color": "blue"
            });
            $(".span.span__number").css("color", "blue");
        }).mouseleave(function () {
            $("#bagel-broker").css("color", "blue");
            $(".span.span__number").css({
                "color": "white",
                "-webkit-text-stroke-width": "1px",
                "-webkit-text-stroke-color": "blue"
            });
        });
        // hover over text, subheader floats up
        $("#bialy-section").mouseenter(function () {
            $("#cleveland-ohio").css({
                "height": "auto",
                "opacity": 1,
                "transition": "ease-in 1s"
            });
        }).mouseleave(function () {
            $("#cleveland-ohio").css({
                "opacity": 0,
                "transition": "ease-out 1s"
            });
        });
        // Text block function
        $("#bialy-section").mouseenter(function () {
            $("#bialy-text").css("display", "block");
        }).mouseleave(function () {
            $("#bialy-text").css("display", "none");
        });
        //copy-block-transition
        $("#bialy-section").mouseenter(function () {
            $("#bialy-text").css({
                "height": "auto",
                "opacity": 1,
                "transition": "ease-in 1s"
            });
        }).mouseleave(function () {
            $("#bialy-text").css({
                "opacity": 0,
                "transition": "ease-out .2s",
            });
        });
        // changing image on hover
        $("#bialy-section").mouseenter(function () {
            $(".img.img__top-ten").attr({
                "src": "images/test.jpeg",
                "style": "opacity: 1"
            });
        }).mouseleave(function () {
            $(".img.img__top-ten").css({
                // "src": "images/top-ten.jpeg",
                "display": "none"
            });
        });
        $("#bialy-section").mouseenter(function () {
            $("#bb-header").css({
                "color": "white",
                "-webkit-text-stroke-width": "1px",
                "-webkit-text-stroke-color": "blue",
                "cursor": "not-allowed"
            });
            $("#span-two").css("color", "blue");
        }).mouseleave(function () {
            $("#bb-header").css("color", "blue");
            $("#span-two").css({
                "color": "white",
                "-webkit-text-stroke-width": "1px",
                "-webkit-text-stroke-color": "blue"
            });
        });
        // getting rid of copy transion home function

        $("#broker-section").mouseenter(function () {
            $("#top-ten-text").css("display", "none");
        }).mouseleave(function () {
            $("#top-ten-text").css("display", "block");
        });

        $("#bialy-section").mouseenter(function () {
            $("#top-ten-text").css("display", "none");
        }).mouseleave(function () {
            $("#top-ten-text").css("display", "block");
        });
    }); //end of doc


    function modal() {
        var modal = $(".modal")[0],
            trigger = $(".modal-trigger")[0],
            close = $(".modalClose");

        closeModal = function () {
            modal.classList.remove("modal-show");
            modal.classList.add("modal-hide");
            // Remove hide class after animation is done
            afterAnimation = function () {
                modal.classList.remove("modal-hide");
            };
            // This listens for the CSS animations to finish and then hides the modal
            modal.addEventListener("webkitAnimationEnd", afterAnimation, false);
            modal.addEventListener("oAnimationEnd", afterAnimation, false);
            modal.addEventListener("msAnimationEnd", afterAnimation, false);
            modal.addEventListener("animationend", afterAnimation, false);
        };

        // Open the modal
        trigger.onclick = function () {
            modal.classList.add("modal-show");
        };

        // Close the modal with any element with class 'modalClose'
        for (var i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                closeModal();
            };
        }

        // Click outside of the modal and close it
        window.onclick = function (e) {
            if (e.target == modal) {
                closeModal();
            }
        };

        // Use the escape key to close modal
        document.onkeyup = function (e) {
            e = e || window.event;
            if (modal.classList.contains("modal-show")) {
                if (e.keyCode == 27) {
                    closeModal();
                }
            }
        };
    }
    modal();
