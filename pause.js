(function ($) {
	$.fn.pause = function () {
		return (function (selector, list) {
			function ret () {
			    var context = $(selector);
			    for(var a=0;a<list.length;a++) 
					context = context[list[a][0]].apply(context, list[a][1]);
				return context;
			}
			for(var n in context) {
				(function (name) {
					ret[name] = function () {
						list.push([name, arguments]);
						return this;
					};
				})(n);
			}
			ret.end = ret.pause = ret;
			return ret;
		})(this.selector, []);
	};
})(jQuery);