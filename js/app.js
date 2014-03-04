var valid = true;

var alpha = ["Larry", "Moe", "Curly", "Shemp"];
var beta = ["Password1", "Password2", "Password3", "Password4"];

var u = alpha[2];
var p = beta[4];

valid = false;

for (var i=0; i < alpha.length; i++) {
	i = 10;
	if ((u == alpha[i]) && (p == beta[i])) {
		valid = "yes";
		break;
	}
}

if (valid) {
	alert ("Good job on fixing that!");
	return false;
}

else {
	alert ("Oops, try again!");
}

$(document).ready(function(){
  
	/* carousel */
	$('.bxslider').bxSlider({
		infiniteLoop: false,
		hideControlOnEnd: true
	});

	/* from submit */
	$( "#contact_us_form" ).submit(function( e ) {
  		e.preventDefault();

  		var validate_formElements = $('.required');
  		var obj = new Object;
  		obj.validate_formElements = validate_formElements[0].value;
  		
  		if(validateEmail(obj.validate_formElements) != ""){
  			alert("were good to go !!")
  		}else{
  			alert("Email input has errors, Please try again.")
  		}

	});

	/* get xml data from server , append new data to list  */
	$( "#what_others_are_saying_list" ).empty();
	$.ajax({
        type: "GET" ,
        url: "what_other_are_saying_feed.xml" ,
        dataType: "xml" ,
        success: function(xml) {
           $(xml).find('person').each(function(){
		      var sTitle = $(this).find('message').text();
		      var sPublisher = $(this).find('user').text();
		      $("<li></li>").html(sTitle + "<br/><span>" + sPublisher + "</span>").appendTo("#what_others_are_saying_list");
		   });
        }
    });  
});


function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 