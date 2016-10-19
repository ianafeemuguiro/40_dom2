function validateForm(){
	var spans = document.getElementsByTagName("span");
	for (var i = 0; i < spans.length; i ++){
			spans[i].parentNode.removeChild(spans[i])
		}

	var name = document.getElementById ("name");
	if (name.value == null || name.value ==""){
		var span = document.createElement ("span");
		span.innerHTML  = "Campo Incorrecto";
		name.parentNode.appendChild (span);
	}

	var lastName = document.getElementById ("lastname");
	if (lastName.value == null || lastName.value ==""){
		var span = document.createElement ("span");
		span.innerHTML  = "Campo Incorrecto";
		lastName.parentNode.appendChild (span);
	}

	var email = document.getElementById ("input-email");
	if (email.value == null || email.value ==""){
		var span = document.createElement ("span");
		span.innerHTML  = "Campo Incorrecto";
		email.parentNode.appendChild (span);
	}

	var password = document.getElementById ("input-password");
	if (password.value == null || password.value ==""){
		var span = document.createElement ("span");
		span.innerHTML  = "Campo Incorrecto";
		password.parentNode.appendChild (span);
	}
}

