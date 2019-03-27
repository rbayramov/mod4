$(function(){
    $(".clickme").click(function() {
    	$.getJSON("http://localhost:8082/api/forecast", function(data) {
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



