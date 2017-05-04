$('#whole-doc').hide();
$('whole-doc').ready(scrollSpy);
$('#whole-doc').ready().fadeIn(1500);

/***** Start of attachable & detachable nav *****/
var navPosition = $('#nav').offset();
	
	/* fix nav starting point if window resized to different size header */
$(window).resize(function() {
	navPosition = $('#nav').offset();
});

$(window).scroll(fixNavToTop)

/* Start of function to attach or detach nav */
function fixNavToTop() {
	/* this variable knows your view position from the top */
    var currentPosition = $(window).scrollTop();
    /* IF your view is past the nav starting point, fix the nav to top of screen */
    if (currentPosition >= navPosition.top) {
        $('#nav').addClass('fixed-header');
        $('#content-container').addClass('nav-compensation');
    /* ELSE detach the nav from the top of the screen */
    } else {
    	$('#nav').removeClass('fixed-header');
        $('#content-container').removeClass('nav-compensation');
    };
};
/***** End of attachable & detachable nav *****/


$(window).scroll(scrollSpy);

/***** Start of Scroll Spy *****/
function scrollSpy() {
	/* Variable to know your current location, + extra height in px to offset */
	var view = $(window).scrollTop() + 800;
	/* Variable assigned to buttons */
	var studioDiv = $('#studio-content').offset();
	var aboutDiv = $('#about-content').offset();
	var bookDiv = $('#book-content').offset();
	/* This removes Scroll Spy class from all nav buttons for every scroll event */
	$('a').removeClass('scroll-spy-color');
	/* IF you scroll passed "studio div" but not to "about div" add scroll Spy class */
	if (view >= studioDiv.top && view < aboutDiv.top) {
		$('#studio-btn').addClass('scroll-spy-color');
	/* ELSE IF passed "about div" but before "booking div" add scroll Spy class */
	} else if (view >= aboutDiv.top && view < bookDiv.top) {
		$('#about-btn').addClass('scroll-spy-color');
	/* ELSE IF passed "contact" add scroll Spy class */
	} else if (view >= bookDiv.top) {
		$('#book-btn').addClass('scroll-spy-color');
	};
};


$(window).scroll(navColorTrans);

function navColorTrans() {
	var studioHeader = $('#studio-header').css('background-color');
	var aboutHeader = $('#about-header').css('background-color');
	var bookHeader = $('#book-header').css('background-color');
	var studioDiv = $('#studio-content').offset();
	var aboutDiv = $('#about-content').offset();
	var bookDiv = $('#book-content').offset();
	var view = $(window).scrollTop() + 800;

	function transition() {
		$('#nav').css('transition', 'background-color 0.5s linear 0s');
	};

    if (view >= studioDiv.top && view < aboutDiv.top) {
		$('#nav').css('background-color', studioHeader);
		transition();
    } else if (view >= aboutDiv.top && view < bookDiv.top) {
		$('#nav').css('background-color', aboutHeader);
		transition();
    } else if (view >= bookDiv.top) {
    	$('#nav').css('background-color', bookHeader);
		transition();
    }
};


$('.required-color').keyup(function() {
	if ($(this).val().length > 0) {
		$(this).removeClass('required-isEmpty').addClass('required-isFilled');
	} else {
		$(this).removeClass('required-isFilled').addClass('required-isEmpty');
	};
});


$('input').keyup(validateForm)

function validateForm() {
	var nameFilled = $('#full-name').val().length > 0;
	var emailFilled = $('#e-mail').val().length > 0;
	var phoneFilled = $('#phone').val().length > 0;

	if (nameFilled === true && emailFilled === true && phoneFilled === true) {
	$('#submit').prop('disabled', false)
	$('#submit').addClass('btn-true').removeClass('btn-false');
	} else {
	$('#submit').prop('disabled', true)
	$('#submit').removeClass('btn-true').addClass('btn-false');
	};
};

















