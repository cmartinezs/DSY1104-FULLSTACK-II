function validations(){
    console.log("Validando formulario...");

    let inputName = document.getElementById("name");
    console.log(`inputName.value = ${inputName.value}`)

    let length = inputName.value.length;

    if (length < 10) {
        alert('El nombre debe contener al menos 10 caracteres');
        return false;
    }

    alert("Formulario enviado");
    return true;
}