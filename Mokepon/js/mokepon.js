function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {

    //Variable booleana para cuando se seleccione una mascota
    let juego = 1;
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
        juego = 0
    }


    if (juego == 1) {
        seleccionarMascotaEnemigo()
    }
}

function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }
    else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }
    else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener("load", iniciarJuego)