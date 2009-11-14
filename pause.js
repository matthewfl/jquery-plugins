(function ($) {
	$.fn.pause = function () {
		return (function (context, list) {
			function ret () {
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
		})(this, []);
	};
})(jQuery);