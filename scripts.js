function toggle(id) {
	var row = document.getElementById(id);
	var symb = document.getElementById(id+"s");
	if(row.style.maxHeight == row.scrollHeight+"px") {
		row.style.maxHeight = "0px";
		row.style.opacity = "0";
		symb.innerHTML = "+";
	}
	else {
		row.style.opacity = "1";
		row.style.maxHeight = row.scrollHeight+"px";
		symb.innerHTML = "-";
	}
}


$(window).scroll(function() {
	var h = $(window).scrollTop();
	if(h==0) {
		$(".topbar").css({'padding':'30px'})
	} else {
		$(".topbar").css({'padding':'15px 30px 15px 30px'})
	}
});
