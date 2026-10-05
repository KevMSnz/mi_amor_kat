const CONTRASENA = "090820026";

const pantallaPassword = document.getElementById("pantalla-password");
const campoPassword = document.getElementById("password");
const botonEntrar = document.getElementById("boton-entrar");
const mensajeError = document.getElementById("error-password");
const togglePassword = document.getElementById("toggle-password");

function entrar() {
    const password = campoPassword.value;

    if (password === CONTRASENA) {
        botonEntrar.textContent = "💖 BIENVENIDA...";

        pantallaPassword.classList.add("saliendo");

        setTimeout(() => {
            pantallaPassword.style.display = "none";
        }, 850);

    } else {
        mensajeError.textContent = "❌ Esa no es la contraseña miamor 😭💔";

        document.querySelector(".login-card").classList.remove("error");

        void document.querySelector(".login-card").offsetWidth;

        document.querySelector(".login-card").classList.add("error");

        campoPassword.value = "";
        campoPassword.focus();
    }
}

botonEntrar.addEventListener("click", entrar);

campoPassword.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        entrar();
    }
});

togglePassword.addEventListener("click", () => {
    const mostrando = campoPassword.type === "text";

    campoPassword.type = mostrando ? "password" : "text";
    togglePassword.textContent = mostrando ? "👁️" : "🙈";
    togglePassword.title = mostrando
        ? "Mostrar contraseña"
        : "Ocultar contraseña";
});


const fechaInicio = new Date(
            2026,  // AÑO
            7,     // AGOSTO
            9,    // DÍA
            13,    // HORA (8 PM)
            44,    // MINUTOS
            50      // SEGUNDOS
        );

        function actualizarContador() {
            // Hora actual
            const ahora = new Date();
            // Diferencia entre ahora y el inicio
            const diferencia =
                ahora - fechaInicio;
            // Convertimos la diferencia
            // a segundos
            const segundosTotales =
                Math.floor(
                    diferencia / 1000
                );

            const dias =
                Math.floor(
                    segundosTotales / 86400
                );

            const horas =
                Math.floor(
                    (segundosTotales % 86400)
                    / 3600
                );

            const minutos =
                Math.floor(
                    (segundosTotales % 3600)
                    / 60
                );

            const segundos =
                segundosTotales % 60;

                
            document.getElementById("dias")
                .textContent =
                String(dias)
                    .padStart(3, "0");
            document.getElementById("horas")
                .textContent =
                String(horas)
                    .padStart(2, "0");
            document.getElementById("minutos")
                .textContent =
                String(minutos)
                    .padStart(2, "0");
            document.getElementById("segundos")
                .textContent =
                String(segundos)
                    .padStart(2, "0");
        }

        setInterval(
            actualizarContador,
            1000
        );
        // Ejecutarlo inmediatamente - recuerdalo Kevin tmr
        // al abrir la página
        actualizarContador();

        function mostrarMensaje() {
            alert(
                "Tú eres mi enamorada🥰 , mi niña 👧, mi bb 🍼, mi princesa 👸, mi vida 😍, mi reina👑, mi corazón ❤️, mi amor💖, mi tesoro 🪎, mi ratoncita 🐭, mi loquita 🤪,  mi periquita🦜, mi kiti🐹, mi chiquita 🤗, mi mujer👩🏽‍🤝‍👨🏻, mi ojitos lindos 🥹, mi cachetitos🫪, mi niña de labios ricos🫦, mi chinita 😌, mi renegonsita 😡, mi ternurita 🤭, mi razón de ser 🤠, mi obsesión🥴, mi canelita😜, mi manitas pequeñas😚, mi osita 🧸 y sobre todo, el amor de mi vidaaaaaa 🍓💖"
            );
        }
