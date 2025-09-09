function guardar() {
    const street = document.getElementById('calle').value
    const num = document.getElementById('numero').value

    let addresses = localStorage.getItem("direcciones")
    if (!addresses) {
        addresses = []
    } else {
        addresses = JSON.parse(addresses)
    }

    addresses.push({
        street: street,
        num: num
    });

    localStorage.setItem("direcciones", JSON.stringify(datos))
}