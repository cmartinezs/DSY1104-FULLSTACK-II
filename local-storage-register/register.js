function validarRegistro() {

    const nameError = document.getElementById('name-error');
    const apellidoError = document.getElementById('apellido-error');
    const emailError = document.getElementById('email-error');
    const ageError = document.getElementById('age-error');
    const passwordError = document.getElementById('password-error');
    const repeatPasswordError = document.getElementById('repeat-password-error');

    let hasError = false;

    nameError.style.display = 'none';
    apellidoError.style.display = 'none';
    emailError.style.display = 'none';
    ageError.style.display = 'none';
    passwordError.style.display = 'none';
    repeatPasswordError.style.display = 'none';

    const name = document.getElementById('name').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeat-password').value;

    if (!name || !apellido || !email || !password) {
        console.log('Por favor, complete todos los campos.');
        hasError = true;

        if (!name) {
            nameError.style.display = 'inline';
        }

        if (!apellido) {
            apellidoError.style.display = 'inline';
        }

        if (!email) {
            emailError.style.display = 'inline';
        }

        if (!age) {
            ageError.style.display = 'inline';
        }

        if (!gender) {
            genderError.style.display = 'inline';
        }

        if (!password) {
            passwordError.style.display = 'inline';
        }
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        console.log('Por favor, ingrese un correo electrónico válido.');
        emailError.style.display = 'inline';
        hasError = true;
    }

    if (password.length < 6) {
        console.log('La contraseña debe tener al menos 6 caracteres.');
        passwordError.style.display = 'inline';
        hasError = true;
    }

    if (password !== repeatPassword) {
        console.log('Las contraseñas no coinciden.');
        repeatPasswordError.style.display = 'inline';
        hasError = true;
    }

    if (age < 18 || age > 100) {
        console.log('La edad debe ser un número entre 18 y 100.');
        ageError.style.display = 'inline';
        hasError = true;
    }

    if (hasError) {
        return false;
    }

    const usuario = {
        name: name,
        apellido: apellido,
        email: email,
        age: age,
        gender: gender,
        password: password
    };

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    console.log('Registro exitoso:', usuario);
    document.getElementById('success-message').style.display = 'block';
    return true;
}