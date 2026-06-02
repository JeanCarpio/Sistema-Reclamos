document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('form-registro');

    form.addEventListener('submit', function(event) {

        let valid = true;

        // NOMBRES
        const nombre = document.getElementById('username').value.trim();

        if(nombre === ""){
            document.getElementById('firstNameError').textContent = "Coloque sus nombres.";
            valid = false;
        }
        else{
            document.getElementById('firstNameError').textContent = "";
        }

        // APELLIDOS
        const apellido = document.getElementById('lastname').value.trim();

        if(apellido === ""){
            document.getElementById('lastNameError').textContent = "Coloque sus apellidos.";
            valid = false;
        }
        else{
            document.getElementById('lastNameError').textContent = "";
        }

        // CONTRASEÑA
        const contraseña = document.getElementById('password').value.trim();
        if (contraseña === ""){
            document.getElementById('passwordError').textContent = "Coloque su contraseña.";
            valid = false;
        }
        else if(contraseña.length < 8){
            document.getElementById('passwordError').textContent = "Mínimo 8 caracteres.";
            valid = false;
        }
        else{
            document.getElementById('passwordError').textContent = "";
        }
        // CONFIRMAR CONTRASEÑA
        const confirmarContraseña = document.getElementById('confirmPassword').value.trim();

        if(confirmarContraseña === ""){
            document.getElementById('confirmPasswordError').textContent = "Confirme su contraseña.";
            valid = false;
        }
        else if(confirmarContraseña !== contraseña){
            document.getElementById('confirmPasswordError').textContent = "Las contraseñas no coinciden.";
            valid = false;
        }
        else{
            document.getElementById('confirmPasswordError').textContent = "";
        }

        //CORREO
        const correo = document.getElementById('email').value.trim();
        const correoPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

        if(correo === ""){
            document.getElementById('emailError').textContent = "Coloque su correo electrónico.";
            valid = false;
        }

        else if(!correoPattern.test(correo)){
            document.getElementById('emailError').textContent = "Correo electrónico inválido.";
            valid = false;
        }
        else{
        document.getElementById('emailError').textContent = "";
        }

        // EVITAR ENVÍO
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = "";
    const hayError = !valid;
        if(!valid){
            event.preventDefault();
        }
        if (hayError === false) {
        alert("¡registrado correctamente!");



        // Limpiar el formulario
        document.getElementById("username").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("email").value = "";
    }
    

    });

});