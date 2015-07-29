$(function() {

	var drawer = $("#related-draw-content");
	var drawerBtn = $("#related-drawer-btn");

	drawerBtn.click(function () {
		$(this).toggleClass("expand-btn-open");
		drawer.toggleClass("related-draw-open");
	});
	
});