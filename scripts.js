function toggle(id) {
	var row = document.getElementById(id);
	var symb = document.getElementById(id+"s");
	if(row.style.display == "table-row") {
		row.style.display = "none";
		symb.innerHTML = "+";
	}
	else {
		row.style.display = "table-row";
		symb.innerHTML = "-";
	}
}

