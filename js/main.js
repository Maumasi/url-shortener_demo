//	jquery javaScript

$(function(){
	
	$.ajax({
		type: 'GET',
		url: 'localhost:3000/api/v1/newlink',
		success: function(data) {
			console.log('success ', data);
		}

	});
	
});