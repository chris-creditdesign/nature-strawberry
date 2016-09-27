$(function() {

	var drawer = $("#related-draw-content");
	var drawerBtn = $("#related-drawer-btn");
	var input = $("input.form-control");

	var searchDefault = $(".search-default");
	var searchResults = $(".search-results");

	drawerBtn.click(function () {
		$(this).toggleClass("expand-btn-open");
		drawer.toggleClass("related-draw-open");
	});


	input.keyup(function() {
		if (input.val().length > 0) {
			input.addClass("search-text");
			searchDefault.fadeOut();
			searchResults.fadeIn(800);
		} else {
			input.removeClass("search-text");
			searchDefault.fadeIn(800);
			searchResults.fadeOut();
		}
	});
	
});