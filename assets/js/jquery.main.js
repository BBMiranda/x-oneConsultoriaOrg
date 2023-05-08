$(document).ready(function() {

	initTextRotator();
	// TextRotator init
	function initTextRotator() {
		"use strict";

		jQuery("#js-rotating").Morphext({
			// The [in] animation type. Refer to Animate.css for a list of available animations.
			animation: "bounceIn",
			// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
			separator: ",",
			// The delay between the changing of each phrase in milliseconds.
			speed: 2000,
			complete: function () {
			    // Called after the entrance animation is executed.
			}
		});
	}

	initTextRotator2();
	// TextRotator2 init
	function initTextRotator2() {
		"use strict";

		jQuery('#rotating2').textillate({
			selector: '.rotating-hold',

			// enable looping
			loop: true,

			// sets the minimum display time for each text before it is replaced
			minDisplayTime: 2000,

			// sets the initial delay before starting the animation
			// (note that depending on the in effect you may need to manually apply
			// visibility: hidden to the element before running this plugin)
			initialDelay: 0,

			// set whether or not to automatically start animating
			autoStart: true,

			// custom set of 'in' effects. This effects whether or not the
			// character is shown/hidden before or after an animation
			inEffects: [],

			// custom set of 'out' effects
			outEffects: [ 'hinge' ],

			// in animation settings
			in: {
				// set the effect name
				effect: 'fadeInLeftBig',

				// set the delay factor applied to each consecutive character
				delayScale: 1.5,

				// set the delay between each character
				delay: 50,

				// set to true to animate all the characters at the same time
				sync: false,

				// randomize the character sequence
				// (note that shuffle doesn't make sense with sync = true)
				shuffle: false,

				// reverse the character sequence
				// (note that reverse doesn't make sense with sync = true)
				reverse: false
			},
			out: {
				effect: 'hinge',
				delayScale: 1.5,
				delay: 50,
				sync: false,
				shuffle: false,
				reverse: false,
			},
			type: 'char'
		});
	}

});

jQuery( window ).on( "load" , function() {
	"use strict";

	jQuery( "#loader" ).delay( 600 ).fadeOut( 300 );

});