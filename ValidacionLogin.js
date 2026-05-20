document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('Formatologin');
    form.addEventListener('submit', function(event){
        let valid = true;

        document.querySelectorAll('.error-message')
        .forEach(el => el.textContent = '');

        // Validacion de correo
        const correo = document.getElementById('Correo').value.trim();
        const correoPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if(correo === ''){
            document.getElementById('CorreoError').textContent =
            'Ingrese su correo electronico.';
            valid = false;
        }

        // Verificar del correo
        else if(!correoPattern.test(correo)){
            document.getElementById('CorreoError').textContent =
            'El correo electronico no es valido.';
            valid = false;
        }

        // Validacion de contraseña
        const contraseña = document.getElementById('Contraseña').value.trim();
        if(contraseña === ''){
            document.getElementById('ContraseñaError').textContent =
            'Ingrese su contraseña.';
            valid = false;
        }

        // Verificar longitud minima
        else if(contraseña.length < 8){
            document.getElementById('ContraseñaError').textContent =
            'La contraseña debe tener al menos 8 caracteres.';
            valid = false;
        }
        if(!valid){
            event.preventDefault();
        }
    });
});