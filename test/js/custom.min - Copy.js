$(window).load(function() {
	$(".se-pre-con").fadeOut("slow");;
});
$('.modal').on('show.bs.modal', function(event) {
    var idx = $('.modal:visible').length;
    $(this).css('z-index', 1040 + (10 * idx));
});
$('.modal').on('shown.bs.modal', function(event) {
    var idx = ($('.modal:visible').length) -1; // raise backdrop after animation.
    $('.modal-backdrop').not('.stacked').css('z-index', 1039 + (10 * idx));
    $('.modal-backdrop').not('.stacked').addClass('stacked');
});

 

var global_url = "";               



$( document ).ready( function( ) {



  $.fn.extend({

    animateCss: function( animationName, callback ) {

      var animationEnd = ( function( el ) {

        var animations = {

          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',

        };

        for( var t in animations ) {

          if ( el.style[ t ] !== undefined ) {

            return animations[ t ];

          }

        }

      } )( document.createElement( 'div' ) );

      this.addClass( 'animated ' + animationName ).one( animationEnd, function() {

        $( this ).removeClass( 'animated ' + animationName );

        if ( typeof callback === 'function' ) callback();

      });

      return this;

    },

  });

  //--------------------------[ Web Page Arsenal ]----------------------------------

  $( ".searchInput" ).on( 'keyup', function() {

    var value = $( this ).val().toLowerCase();

    $( '.searchApp' ).filter( function() {

      $( '.app-section-content' ).css( 'height', $( '.app-section-content' ).height() );

      $( this ).toggle( $( this ).text().toLowerCase().indexOf( value ) > -1 )

    });

  });

  $( '.searchApp' ).click( function() {

  	$( '.avatar-modal img' ).attr( 'src', $( this ).find( '.app-img' ).attr( 'src' ) );
  	$( '.name-modal' ).html( $( this ).attr( 'data-app' ) );
  	$( '.name-modal' ).attr( 'data-name', $( this ).attr( 'data-name' ) );

  	$( '#appModal' ).modal( { backdrop: 'static', keyboard: false } ); 

  	$( '.console-log' ).html( 'Downloading ' + $( this ).attr( 'data-name' ) ); 
	
  	global_url = $( this ).attr( 'data-url' );

  });

  function FinalTimer() {

		setTimeout( function() {

			$( '.progress-bar' ).css( 'width', '85%' );		

			setTimeout( function() {

				$( '.progress-bar' ).css( 'width', '90%' );	

				setTimeout( function() {

					$( '.progress-bar' ).css( 'width', '95%' );	

					setTimeout( function() {

						$( '.progress-bar' ).css( 'width', '99%' );			

						setTimeout( function() {

							// CONTENT LOCKER LINK
							 window.location.href = global_url;
							// CONTENT LOCKER LINK

						}, 1000 );				  												  		

					}, 1000 );							  												  		

				}, 1000 );							  												  		

			}, 1000 );						  												  		

		}, 1000 );	

  }

  $( '.btn-injection' ).click( function() {

  	$( '#loadModal' ).modal( { backdrop: 'static', keyboard: false } ); 

  	setTimeout( function() {

  		$( '.progress-bar' ).css( 'width', '5%' );

	  	setTimeout( function() {

	  		$( '.progress-bar' ).css( 'width', '10%' );

		  	setTimeout( function() {

		  		$( '.progress-bar' ).css( 'width', '15%' );

		  	}, 1000 );

		  	setTimeout( function() {

		  		$( '.progress-bar' ).css( 'width', '20%' );

		  		$( '.console-log' ).html( 'Installing ' + $( '.name-modal' ).attr( 'data-name' ) ); 

			  	setTimeout( function() {

			  		$( '.progress-bar' ).css( 'width', '25%' );

				  	setTimeout( function() {

				  		$( '.progress-bar' ).css( 'width', '30%' );

					  	setTimeout( function() {

					  		$( '.progress-bar' ).css( 'width', '35%' );

						  	setTimeout( function() {

						  		$( '.progress-bar' ).css( 'width', '40%' );

							  	setTimeout( function() {

							  		$( '.progress-bar' ).css( 'width', '60%' );

							  		$( '.console-log' ).html( 'App Downloads Required...' ); 

								  	setTimeout( function() {

								  		$( '.progress-bar' ).css( 'width', '65%' );

									  	setTimeout( function() {

									  		$( '.progress-bar' ).css( 'width', '70%' );

										  	setTimeout( function() {

										  		$( '.progress-bar' ).css( 'width', '75%' );

											  	setTimeout( function() {

											  		$( '.progress-bar' ).css( 'width', '80%' );

											  		FinalTimer();
													$( '.console-log' ).html( 'Loading Apps for ' + $( '.name-modal' ).attr( 'data-name' ) ); 	
											  												  		

											  	}, 1000 );											  		

										  	}, 1000 );										  		

									  	}, 1000 );									  		

								  	}, 1000 );									  		

							  	}, 1000 );						  		

						  	}, 1000 );					  		

					  	}, 1000 );				  	

				  	}, 1000 );

			  	}, 1000 );

		  	}, 1000 );

	  	}, 1000 );

  	}, 1000 );

  });

 });










