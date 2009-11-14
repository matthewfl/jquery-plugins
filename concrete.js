/*
by matthew@matthewfl.com

based off the ideas from http://github.com/hafriedlander/jquery.concrete but with the goal to make the same system smaller
not done at this point
* need a way to work with events of objects
*/

(function ($) {
    var jQueryFN={_concrete_each: true, _concrete_filter: true},
	Events={};
    // selector
    $.fn._concrete_each = $.fn.each;
    $.fn._concrete_filter = $.fn.filter;
    function setFunction (name) {
	if(jQueryFN[name]) return; // if function all ready inited
	jQueryFN[name] = $.fn[name];
	$.fn[name] = function () {
	    var arg=arguments;
	    this._concrete_each(function () {
		var self=$(this);
		var supers=[function () {}]; // array of functions for this action
		if(jQueryFN[name]) supers.push(jQueryFN[name]);
		for(var i=0; i < Events[name].length; ++i) {
		    if(self._concrete_filter(Events[name][i][0]).length)
			supers.push(Events[name][i][1]);
		}
		self._super = function () {
		    return supers.pop().apply(self, arg);
		};
		self._super()
	    });
	    return this; // this is a problem
	};
    }
    $.fn.concrete = function (events) {
	for(var name in events) {
	    setFunction (name);
	    if(typeof Events[name] == "undefined")
		Events[name] = [];
	    Events[name].push([this.selector, events[name]]);
	}
    };
})(jQuery);