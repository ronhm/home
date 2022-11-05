$(document).ready(function() {

	
$('.start1-button').click(function() {
		$(".message-content p.console-message").hide();
		$.magnificPopup.open({
			items: {
				src: '#message-wrapper',
			},
			type: 'inline',
			preloader: false,
			modal: true,
			mainClass: 'mfp-fade'
		});

		setTimeout(function() {
			$(".console-loadbar").fadeIn();
			$(".message-content p.console-message").typed({
				strings: ["Processing..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(2, $('#progressBarConsole'));
				}
			});
		}, 200);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Downloading Files..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(25, $('#progressBarConsole'));
				}
			});
		}, 2700);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Unpacking Files..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(50, $('#progressBarConsole'));
				}
			});
		}, 6800);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Injecting Data Packets..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(60, $('#progressBarConsole'));
				}
			});
		}, 9800);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Performing Automatic Device Verification..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
		}, 11800);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["<b class='highlighted'>Automatic Device Verification Failed</b>..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
		}, 13500);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Manual Device Verification Required..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
		}, 14800);
		setTimeout(function() {
			$(".message-content p.console-message").fadeOut(function() {
				$(".human-verification-wrapper").fadeIn();
			});
		}, 16800);
	});
	$('.popup-tos').magnificPopup({
		type: 'inline',
		preloader: false
	});
	$('.popup-contact').magnificPopup({
		type: 'inline',
		preloader: false
	});
	$('.popup-pp').magnificPopup({
		type: 'inline',
		preloader: false
	});
	$("#video-wrapper").fitVids();
});


	

	

