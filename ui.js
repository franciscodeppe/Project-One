
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
