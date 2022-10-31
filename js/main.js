$(document).ready(function() {

	$("header").vegas({
		slides: [
			{ src: "img/slide1.jpg" },
			{ src: "img/slide2.jpg" },
			{ src: "img/slide3.jpg" },
			{ src: "img/slide4.jpg" },
			{ src: "img/slide5.jpg" }
		]
	});
	
	var itemSelector = '.grid-item'; 
	var qsRegex;
	var $container = $('.games-grid').isotope({
		itemSelector: itemSelector,
		filter: function() {
			var $this = $(this);
			var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
			return searchResult;
		},
	})
	
	var $quicksearch = $('.quicksearch').keyup( debounce( function() {
		if ($('#filters').data('clicked')) {
			counter = initShow;
			$('#filters').data('clicked', false);
		} else {
			counter = counter;
		};
		counter = counter + initShow;
		loadMore(counter);
		qsRegex = new RegExp( $quicksearch.val(), 'gi' );
		$container.isotope();
	}) );
	
	function debounce( fn, threshold ) {
	  var timeout;
	  threshold = threshold || 100;
	  return function debounced() {
		clearTimeout( timeout );
		var args = arguments;
		var _this = this;
		function delayed() {
		  fn.apply( _this, args );
		}
		timeout = setTimeout( delayed, threshold );
	  };
	}
	
	var initShow = 12;
	var counter = initShow;
	var iso = $container.data('isotope');
	loadMore(initShow);
	function loadMore(toShow) {
		$container.find(".hidden").removeClass("hidden");
		var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
			return item.element;
		});
		$(hiddenElems).addClass('hidden');
		$container.isotope('layout');
		if (hiddenElems.length == 0) {
			jQuery("#load-more").hide();
		} else {
			jQuery("#load-more").show();
		};
	}
	$container.after('<button id="load-more">Load More</button>');
	$("#load-more").click(function() {
		if ($('#filters').data('clicked')) {
			counter = initShow;
			$('#filters').data('clicked', false);
		} else {
			counter = counter;
		};
		counter = counter + initShow;
		loadMore(counter);
	});
	$("#filters").click(function() {
		$(this).data('clicked', true);
		loadMore(initShow);
	});
	
	document.addEventListener("contextmenu", function(e){
		e.preventDefault();
	}, false);

    $('.popup-tos').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-pp').magnificPopup({
        type: 'inline',
        preloader: false
    });
	
});