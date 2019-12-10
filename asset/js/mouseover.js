$(document).ready(function () {
	//mouseover시 일어나는 effect	
	var $infraEle = $("#infra .infra_list li");

	$infraEle.on({
		focusin : function () {
			$(this).addClass("on");
		},
		focusout : function () {
			$(this).removeClass("on");
		}		
	});
});