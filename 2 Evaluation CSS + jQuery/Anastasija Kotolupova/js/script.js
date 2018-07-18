$(document).ready(function(){
  console.log("JS loaded");


  $('form').submit(function(){
    event.preventDefault();
    var formScore = 0;

    // check if selected
    if ($('[name="list"]').val().length === 0){
			$('select').next().text('Choisissez votre chat.');
		} else {
			formScore++;
    }
    
    // check if number of characters > 15
		if ($('[name="raison"]').val().length < 15){
			$('textarea').next().text('Raison d\'adoption minimum 15 caractères');
		} else {
			formScore++;
    }
    
    // send the form if all condition are ok
		if (formScore === 2) {
			$('select, textarea, label, [type="submit"]').fadeOut();
			$('fieldset').fadeIn().addClass('valid').text('Merci d\'avoir rempli le formulaire!');
		}
  });

});
