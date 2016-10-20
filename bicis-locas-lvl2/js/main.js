function validateForm(){
	
	
	var spans = document.getElementsByClassName ("error");

	while (spans.length > 0) {
			spans[0].parentElement.removeChild(spans[0]);
	}

	var name = document.getElementById("name");
	var nameExp = /^[a-z]/;
	if (name.value == null || nameExp.test(name.value)== false){
		var span = document.createElement ("span");
		span.setAttribute ("class", "error");
		span.innerHTML  = "Nombre Incorrecto";
		name.parentNode.appendChild(span);
	}

	var lastName = document.getElementById("lastname");
	var lastNameExp = /^[A-Z]/;
	if (lastName.value == null || lastNameExp.test(lastName.value)== false){
		var span = document.createElement ("span");
		span.setAttribute ("class", "error");
		span.innerHTML  = "Apellido Incorrecto";
		lastName.parentNode.appendChild (span);
	}

	var email = document.getElementById("input-email");
	var emailExp = /^[A-Z]/;
	if (emailExp.value == null || emailExp.test(email.value)== false){
		var span = document.createElement ("span");
		span.setAttribute ("class", "error");
		span.innerHTML  = "Correo Incorrecto";
		email.parentNode.appendChild (span);
	}

	var emailExp = /^[A-Z]/;
	if (emailExp.value == null || emailExp.test(email.value)== false){
		var span = document.createElement ("span");
		span.setAttribute ("class", "error");
		span.innerHTML  = "Correo Incorrecto";
		email.parentNode.appendChild (span);
	}
}




	/*var email = document.getElementById ("input-email");
	if (email.value == null || email.value ==""){
		var span = document.createElement ("span");
		span.innerHTML  = "Campo Incorrecto";
		email.parentNode.appendChild (span);
	}

	var password = document.getElementById ("input-password");
	if (password.value == null || password.value ==""){
		var span = document.createElement ("span");
		span.innerHTML  = "	Campo Incorrecto";
		password.parentNode.appendChild (span);
	}
}

*/