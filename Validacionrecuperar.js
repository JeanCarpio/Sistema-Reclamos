document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('Formatorecuperar');
    form.addEventListener('submit', function(event){
        let valid = true;

        document.querySelectorAll('.error-message')
        .forEach(el => el.textContent = '');

        const correo = document.getElementById('Correo').value.trim();
        const correoPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if(correo === ''){
            document.getElementById('CorreoError').textContent =
            'Ingrese su correo electronico.';
            valid = false;
        }

        // Verificar formato
        else if(!correoPattern.test(correo)){
            document.getElementById('CorreoError').textContent =
            'El correo electronico no es valido.';
            valid = false;
        }

        if(!valid){
            event.preventDefault();
        }
    });
});