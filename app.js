
$('#addContactButton').on('click', function(){
	var element = $('#nameField');
	var name = element.val();
	$('.userContainer').prepend('<div class="contact-list-item"><span>' + name + '</span> <button class="btn btn-sm btn-danger remove-contact">Delete </button></div>');
	element.val('').focus();
});


$('body').on('click', '.remove-contact', function(){
	console.log(this, event );
	var parent = $(this).parent();
	parent.remove();
});

$('#showMe').click(function(){
	var people = $('.contact-list-item');
	console.log(people.length);
});

$('#searchItems').keyup(function(){
	var val = $(this).val().toLowerCase();
	$('.contact-list-item').each(function(){
		var el = $(this);
		var content = el.find('span').text().trim().toLowerCase();
		console.log(content);
		var exists = content.indexOf(val) !== -1;
		if(exists){
			el.show();
		} else {
			el.hide();
		}
	});

});

function buildTemplate (name) { // VIEW
	return '<div class="contact-list-item"><span>' + name + '</span> <button class="btn btn-sm btn-danger remove-contact">Delete </button></div>';
}

function loadContacts (container, contacts) { // CONTROLLER
	contacts.forEach(function(item){
		$(container).append(buildTemplate(item));
	});
}

$(document).ready(function(){
	var existingContacts = ['Maria', 'Jamal', 'John', 'Jenny', 'Alice']; // MODEL
	loadContacts('.userContainer', existingContacts);
});

