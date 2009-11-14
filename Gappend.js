// full
(function ($)
{
	$.fn.Gappend = function (type)
	{
		var ret = $(type).appendTo(this.eq(0)); // append the Dom object to the first node
		ret.prevObject = this; // Set up the object so that end() can be use to go to parent
		return ret;
	}
})(jQuery);


// min

	jQuery.fn.Gappend=function(t){var r=jQuery(t).appendTo(this.eq(0));r.prevObject=this;return r;}; // Gappend
