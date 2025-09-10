function guardar() {
    const calle = document.getElementById('calle').value
    const numero = document.getElementById('numero').value

    let addresses = localStorage.getItem("direcciones")
    if (!addresses) {
        addresses = []
    } else {
        addresses = JSON.parse(addresses)
    }

    let address = {
        street: calle,
        num: numero
    }

    addresses.push(address);

    localStorage.setItem("direcciones", JSON.stringify(addresses))

    document.getElementById('calle').value = ''
    document.getElementById('numero').value = ''

    mostrarMensaje(`Dirección ${calle} ${numero} guardada correctamente` )
}

function mostrar() {
    let addresses = localStorage.getItem("direcciones")
    if (!addresses) {
        addresses = []
    } else {
        addresses = JSON.parse(addresses)
    }

    const div = document.getElementById('datos')
    div.innerHTML = ''

    addresses.forEach(address => {
        const p = document.createElement('p')
        p.innerText = `${address.street} ${address.num}`
        div.appendChild(p)
    });

    /*for (const address of addresses) {
        const p = document.createElement('p')
        p.innerText = `${address.street} ${address.num}`
        div.appendChild(p)
    }

    for (let index = 0; index < addresses.length; index++) {
        const element = addresses[index];
        const p = document.createElement('p')
        p.innerText = `${element.street} ${element.num}`
        div.appendChild(p)
    }*/
}

function ocultarMensaje() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = '';
}

function mostrarMensaje(msg) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = msg;
}