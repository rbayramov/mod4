$(function(){
    $(".clickme").click(function() {
    	$.getJSON("https://sf-pyw.mosyag.in/m04/api/forecasts", function(data) {
		message = data["prophecies"]
		set_divs(message);
		});   
    });
});

function set_divs(msg) {
	$.each(msg, function(i, d) {
		p = $("#p-" + i)
		p.html("<p>" + d + "</p>")
	})
};



