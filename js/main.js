function iniciarsesion () {
	var titulo = document.getElementById('form-signin-heading');
	var nuevoTitulo = 'Porfavor inicia sesion'
	titulo.innerHTML = nuevoTitulo;
}
iniciarsesion();

function correo() {
	var inputE = document.getElementById('inputEmail').placeholder = 'Correo Electronico';
}
correo();

function contrasena() {
	var pass = document.getElementById('inputPassword').placeholder = 'Contraseña';
}
contrasena();

function checkBox() {
	var check = document.getElementsByTagName('span')[0].innerHTML = 'Recordar datos';
}
checkBox();

function boton() {
	var button = document.getElementsByTagName('button')[0].innerHTML = 'Iniciar Sesión';
}
boton();