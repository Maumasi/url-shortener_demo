//	jquery javaScript

$(function(){
	
	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/api/v1/status',
		success: function(data) {
			console.log('success ', data);
		}

	});
	
});