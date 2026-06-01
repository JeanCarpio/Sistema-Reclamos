function validarFormulario() {

    // Obtener los valores de cada campo
    var nombre = document.getElementById("nombre").value;
    var categoria = document.getElementById("categoria").value;
    var asunto = document.getElementById("asunto").value;
    var descripcion = document.getElementById("descripcion").value;

    document.getElementById("error-nombre").textContent = "";
    document.getElementById("error-categoria").textContent = "";
    document.getElementById("error-asunto").textContent = "";
    document.getElementById("error-descripcion").textContent = "";

    var hayError = false;

    // Validar nombre 
    if (nombre === "") {
        document.getElementById("error-nombre").textContent = "El nombre es obligatorio.";
        hayError = true;
    }

    // Validar categoría
    if (categoria === "") {
        document.getElementById("error-categoria").textContent = "Debes seleccionar una categoría.";
        hayError = true;
    }

    // Validar asunto
    if (asunto === "") {
        document.getElementById("error-asunto").textContent = "El asunto es obligatorio.";
        hayError = true;
    }

    // Validar descripción
    if (descripcion === "") {
        document.getElementById("error-descripcion").textContent = "La descripción es obligatoria.";
        hayError = true;
    }

    // Si no hay errores, mostrar mensaje de éxito
    if (hayError === false) {
        alert("¡Reclamo registrado correctamente!");

        // Limpiar el formulario
        document.getElementById("nombre").value = "";
        document.getElementById("categoria").value = "";
        document.getElementById("asunto").value = "";
        document.getElementById("descripcion").value = "";
    }

}