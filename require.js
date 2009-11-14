;(function ($) {
	var files = [];
	$.require = function (file, back) {
		if(back === true) { // tell the system that the file is loaded
			files.push(file);
			return;
		}
		back = back || function () {};
		var loaded = false;
		for(var a=0;a<files.length;a++)
			if(files[a] == file) {
			return back();
		}
		$.ajax({
			cache: true,
			type: "GET",
			data: null,
			success: function () {
				files.push(file);
				back();
			},
			dataType: "script",
			url: $.require.base+file
		});
	};
	$.require.base="/js/";
	$.require('jquery.js', true);
})(jQuery);
