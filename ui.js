
var open = false;
$("#logo").on("click", function() {
    if (open === false) {
        open = true;
        openNav()
    } else {
		open= false;
		closeNav()
	}
});

function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("main").style.marginLeft = "400px";
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


$("#nySlider").slider();
$("#nySlider").on("slide", function(slideEvt) {
    $("#nySliderVal").text(slideEvt.value)
	num = slideEvt.value;
});

$("#nySliderVal").text($("#nyCurrentSliderValLabel").attr("data-slider-value"))

point to "#main"div on index.html

$(yes/no switch)on("change" function() {
	var newsDiv = $("<div>")
	newsDiv.addClass("col-lg-4")
	for (# of news inputs) {
		var newsRow = $("<div>").addClass("row")
		var newsImage = img from news source
		newsImage.addClass(col-lg-5)
		var content = contect from news source
		content.addClass(col-lg-7)
		newsRow.append(newsImage)
		newsRow.append(content)

		newsDiv.append(newsRow)
	}

	$("#main").append(newsDiv)
})
