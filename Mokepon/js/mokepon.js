function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {

    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    }
    else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    }
    else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    }
    else {
        alert("Selecciona alguna mascota")
    }
}



window.addEventListener("load", iniciarJuego)