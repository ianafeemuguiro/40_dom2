function validateForm(){
var nombre, apellido, correo, contraseña;
nombre = document.getElementById ('nombre').value; 
apellido = document.getElementById ('apellido').value;
correo = document.getElementById ('correo').value;
contraseña = document.getElementById ('contraseña').value;

if (nombre == null || nombre.length == 0)
var errorNombre = document.createElement ("span"); 
var errorText = document.createTextNode ("Campo vacio");
errorNombre.appendChild ('textError');
document.getElementByTagName ('div')[1].appendChild (errorNombre);
}