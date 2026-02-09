
//Función para generar un número aleatorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = " 🪨"
    }
    else if (jugada == 2) {
        resultado = " 📄"
    }
    else if (jugada == 3) {
        resultado = " ✂️"
    }
    return resultado
}

//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0


//Ciclo para jugar varias veces
while (triunfos < 3 && perdidas < 3) {

    //Creamos un aleatorio para que la opción del PC sea aleatoria (Entre 1 y 3)
    pc = aleatorio(1, 3)
    jugador = prompt("🖖¡Hola! ingresa el número de tu elección:\n🪨 PIEDRA es 1, 📄 PAPEL es 2 y ✂️ TIJERA es 3")
    //alert("Elegiste " + jugador)

    //Hacemos un condicional principal para que solo se juegue si el usuario pone un número del 1 al 3
    if (jugador == 1 || jugador == 2 || jugador == 3) {

        alert("PC elige : " + eleccion(pc))
        alert("Tú eliges : " + eleccion(jugador))

        //Combate
        if (pc == jugador) {
            alert("EMPATE")
        }
        else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
            alert("GANASTE")
            triunfos++
        }
        else {
            alert("PERDISTE")
            perdidas++
        }
    }
    else {
        alert("Elige piedra, papel o tijera ( 1 al 3)")
    }

}
alert("PERDISTE " + perdidas + " veces " + "\n GANASTE " + triunfos + " veces")



