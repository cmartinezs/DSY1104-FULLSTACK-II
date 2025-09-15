function cargarUsuarios() {
    // Obtener la lista de usuarios del almacenamiento local
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Mostrar la lista de usuarios en la tabla
    const userTableBody = document.getElementById('user-table-body');
    usuarios.forEach(usuario => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${usuario.name}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.email}</td>
            <td>${usuario.age}</td>
            <td>${usuario.gender}</td>
        `;
        userTableBody.appendChild(row);
    });
}
