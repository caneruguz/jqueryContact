$('#addContactButton').click(function(){
	var name = $('#nameField').val();
	$('.userContainer').prepend('<div class="contact-list-item">' + name + '</div>');
});








