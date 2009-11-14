;(function ($) {
	$.each("bind", "live", function () {
		$[this] = function (list) {
			$(function () {
				for(var n in list) {
					var o = $(n);
					for(var a in list[n]) {
						o[this](a, list[n][a]);
					}
				}
			});
		};
	});
})(jQuery);