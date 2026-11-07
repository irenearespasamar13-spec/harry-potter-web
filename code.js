/* =========================================================
   HOGWARTS · code.js

   Cómo funciona la web:
   - En index.html solo hay un <main id="pantalla"> vacío.
   - Cada pantalla es una función (pintarAlacena, pintarCarta...)
     que escribe su HTML dentro de ese <main> con innerHTML
     y después escucha los clicks de sus botones.
   - Para pasar de una pantalla a otra, solo hay que llamar
     a la función de la siguiente.

   Partes del archivo:
   1. Variables
   2. Funciones de ayuda
   3. Pantallas: inicio, test, torneo, sala y final   (temario)
   4. Minijuegos                                       (ZONA AUTORIZADA:
      usa cosas que no hemos dado, explicadas paso a paso)
   5. Arranque
   ========================================================= */


/* =========================================================
   📷 IMÁGENES QUE FALTAN  (busca "FALTA IMAGEN" con Ctrl+F)

   Guarda cada imagen en la carpeta assets/img/ con EXACTAMENTE
   este nombre. Si la tuya tiene otro nombre o extensión
   (.jpg, .webp...), cambia la ruta en la línea marcada con
   "FALTA IMAGEN" (aquí en code.js o en style.css).

   FONDOS DEL GRAN COMEDOR (van en style.css, sección 6):
     assets/img/fondo-gran-comedor-gryffindor.jpg
     assets/img/fondo-gran-comedor-slytherin.jpg
     assets/img/fondo-gran-comedor-ravenclaw.jpg
     assets/img/fondo-gran-comedor-hufflepuff.jpg

   TEST DEL SOMBRERO (función cargarPregunta):
     assets/img/respuesta-varita.png      assets/img/respuesta-libro.png
     assets/img/respuesta-giratiempo.png  assets/img/respuesta-capa.png
     assets/img/respuesta-manos.png       assets/img/respuesta-corazon.png
     assets/img/respuesta-escudo.png      assets/img/respuesta-regalo.png
     assets/img/respuesta-buho.png        assets/img/respuesta-gato.png
     assets/img/respuesta-fenix.png       assets/img/respuesta-tejon.png
     assets/img/respuesta-copa.png        assets/img/respuesta-estrella.png
     assets/img/respuesta-snitch.png      assets/img/respuesta-dados.png

   POCIONES (pintarPocionesExplicacion y pintarPocionesJuego):
     assets/img/caldero.png
     assets/img/ingrediente-mandragora.png
     assets/img/ingrediente-ojos-arana.png
     assets/img/ingrediente-pelo-unicornio.png
     assets/img/ingrediente-baba-sapo.png
     assets/img/ingrediente-escamas-dragon.png
     assets/img/ingrediente-cola-escorpion.png

   LLAVES VOLADORAS (pintarSala, pintarLlavesExplicacion, empezarLlaves
   y style.css sección 11):
     assets/img/fondo-llaves.jpg
     assets/img/llave-normal.png
     assets/img/llave-vieja.png

   Consejo: iconos, ingredientes y llaves en PNG con fondo
   transparente; fondos en JPG de unos 2560 px de ancho.
   ========================================================= */


/* ---------------------------------------------------------
   1. VARIABLES
   --------------------------------------------------------- */

// el <main> donde se pinta cada pantalla
const pantalla = document.querySelector("#pantalla");

// datos del niño
let nombre = "";
let casa = "";          // "gryffindor", "ravenclaw", "slytherin" o "hufflepuff"

// test del sombrero
let preguntaActual = 1;     // de 1 a 4
let respuestaElegida = 0;   // tarjeta elegida (1 a 4). 0 = ninguna todavía
let ultimaCasaVotada = "";  // sirve para deshacer empates
let votosGryffindor = 0;
let votosRavenclaw = 0;
let votosSlytherin = 0;
let votosHufflepuff = 0;

// textos de la pregunta que se está viendo (los rellena cargarPregunta)
let textoPregunta = "";
let texto1 = "";
let texto2 = "";
let texto3 = "";
let texto4 = "";
let imagen1 = "";
let imagen2 = "";
let imagen3 = "";
let imagen4 = "";
// casa de cada tarjeta, por orden, con su inicial: "GRHS" = Gryffindor, Ravenclaw, Hufflepuff, Slytherin
let ordenCasas = "";

// puntos del torneo
let puntosGryffindor = 0;
let puntosRavenclaw = 0;
let puntosSlytherin = 0;
let puntosHufflepuff = 0;

// minijuegos superados
let pocionesSuperado = false;
let llavesSuperado = false;
let ajedrezSuperado = false;

// número de "partida": cambia cada vez que cambia la pantalla.
// Lo usan los minijuegos para parar sus temporizadores al salir (ver parte 4).
let partida = 0;


/* ---------------------------------------------------------
   2. FUNCIONES DE AYUDA
   --------------------------------------------------------- */

// pinta una pantalla nueva y vuelve arriba del todo
let cambiarPantalla = (html) => {
    partida++;
    pantalla.innerHTML = html;
    window.scrollTo(0, 0);
};

// nombre bonito de cada casa
let nombreCasa = (casaBuscada) => {
    switch(casaBuscada){
        case "gryffindor":
            return "Gryffindor";
        case "ravenclaw":
            return "Ravenclaw";
        case "slytherin":
            return "Slytherin";
        default:
            return "Hufflepuff";
    }
};

// ruta del escudo de cada casa
let escudoCasa = (casaBuscada) => {
    switch(casaBuscada){
        case "gryffindor":
            return "assets/img/escudo-gryffindor.png";
        case "ravenclaw":
            return "assets/img/escudo-ravenclaw.avif";
        case "slytherin":
            return "assets/img/escudo-slitherin.png";
        default:
            return "assets/img/escudo-hufflepuff.webp";
    }
};

// convierte la inicial ("G", "R", "S", "H") en el nombre de la casa
let casaDeLetra = (letra) => {
    switch(letra){
        case "G":
            return "gryffindor";
        case "R":
            return "ravenclaw";
        case "S":
            return "slytherin";
        default:
            return "hufflepuff";
    }
};

// votos del test de una casa
let votosDe = (casaBuscada) => {
    switch(casaBuscada){
        case "gryffindor":
            return votosGryffindor;
        case "ravenclaw":
            return votosRavenclaw;
        case "slytherin":
            return votosSlytherin;
        default:
            return votosHufflepuff;
    }
};

// puntos del torneo de una casa
let puntosDe = (casaBuscada) => {
    switch(casaBuscada){
        case "gryffindor":
            return puntosGryffindor;
        case "ravenclaw":
            return puntosRavenclaw;
        case "slytherin":
            return puntosSlytherin;
        default:
            return puntosHufflepuff;
    }
};

// suma puntos del torneo a una casa
function sumarPuntos(casaQueSuma, cantidad){
    switch(casaQueSuma){
        case "gryffindor":
            puntosGryffindor += cantidad;
            break;
        case "ravenclaw":
            puntosRavenclaw += cantidad;
            break;
        case "slytherin":
            puntosSlytherin += cantidad;
            break;
        default:
            puntosHufflepuff += cantidad;
            break;
    }
}

/* Las otras 3 casas también suben cada vez que el niño supera una prueba:
   la primera +40, la segunda +30 y la tercera +20.
   Después de las 3 pruebas tendrán como mucho 120 puntos,
   y la casa del niño 150: así el niño siempre gana. */
function sumarPuntosOtrasCasas(){
    let reparto = 40;
    if(casa != "gryffindor"){
        puntosGryffindor += reparto;
        reparto -= 10;
    }
    if(casa != "ravenclaw"){
        puntosRavenclaw += reparto;
        reparto -= 10;
    }
    if(casa != "slytherin"){
        puntosSlytherin += reparto;
        reparto -= 10;
    }
    if(casa != "hufflepuff"){
        puntosHufflepuff += reparto;
    }
}

/* Se llama al ganar un minijuego. Devuelve true si da puntos
   (la primera vez) y false si ya estaba superado. */
function ganarMinijuego(juego){
    let yaSuperado = false;
    switch(juego){
        case "pociones":
            yaSuperado = pocionesSuperado;
            pocionesSuperado = true;
            break;
        case "llaves":
            yaSuperado = llavesSuperado;
            llavesSuperado = true;
            break;
        default:
            yaSuperado = ajedrezSuperado;
            ajedrezSuperado = true;
            break;
    }
    if(!yaSuperado){
        sumarPuntos(casa, 50);
        sumarPuntosOtrasCasas();
    }
    return !yaSuperado;
}

// botones "Sala de los minijuegos" y "Contador de puntos" (van en cada minijuego)
let navegacionMinijuego = () => `
    <nav class="navegacion-minijuego">
        <button id="ir-sala" class="boton boton-oscuro">Sala de los minijuegos</button>
        <button id="ir-torneo" class="boton boton-oscuro">Contador de puntos</button>
    </nav>`;

function escucharNavegacion(){
    document.querySelector("#ir-sala").addEventListener("click", () => {
        pintarSala();
    });
    document.querySelector("#ir-torneo").addEventListener("click", () => {
        pintarTorneo();
    });
}


/* ---------------------------------------------------------
   3. PANTALLAS
   --------------------------------------------------------- */

/* ===== Pantalla 1.1 · LA ALACENA (diseno/1-inicio.png) ===== */
function pintarAlacena(){
    cambiarPantalla(`
        <section id="alacena" class="pantalla alacena">
            <header>
                <h1>Bienvenido<br>pequeño mago</h1>
            </header>
            <button id="boton-carta" class="boton-carta">
                <img src="assets/img/icono-carta-03.png" alt="">
                <p>¡Te ha llegado una carta!</p>
            </button>
        </section>
    `);

    document.querySelector("#boton-carta").addEventListener("click", () => {
        pintarNombre("");
    });
}

/* ===== Pantalla 1.2 · ¿CÓMO TE LLAMAS? =====
   "aviso" es un mensaje que sale si el niño no escribe su nombre */
function pintarNombre(aviso){
    // el botón "Seguir sin nombre" solo aparece si hay aviso
    let botonSinNombre = (aviso == "") ? "" : `<button id="sin-nombre" class="boton boton-oscuro">Seguir sin nombre</button>`;

    cambiarPantalla(`
        <section id="nombre" class="pantalla alacena">
            <div class="caja-nombre">
                <h2>¿Cómo te llamas?</h2>
                <button id="boton-nombre" class="campo-nombre">Introduce tu nombre...</button>
                <p class="aviso">${aviso}</p>
                ${botonSinNombre}
            </div>
        </section>
    `);

    document.querySelector("#boton-nombre").addEventListener("click", () => {
        pedirNombre();
    });

    if(aviso != ""){
        document.querySelector("#sin-nombre").addEventListener("click", () => {
            nombre = "joven mago";
            pintarCarta();
        });
    }
}

// pide el nombre con prompt() y lo guarda
function pedirNombre(){
    let respuesta = prompt("¿Cómo te llamas?");

    if(respuesta == null){
        // ha pulsado "Cancelar"
        pintarNombre("Necesitamos tu nombre para escribirte la carta.");
    }else{
        // quito los espacios del principio y del final
        respuesta = respuesta.trimStart().trimEnd();

        if(respuesta.length == 0){
            pintarNombre("Escribe tu nombre para poder seguir.");
        }else{
            // primera letra en mayúscula: "paula" → "Paula"
            nombre = `${respuesta[0].toUpperCase()}${respuesta.slice(1)}`;
            console.log(`Nombre guardado: ${nombre}`);
            pintarCarta();
        }
    }
}

/* ===== Pantalla 1.3 · LA CARTA DE HOGWARTS ===== */
function pintarCarta(){
    cambiarPantalla(`
        <section id="carta" class="pantalla alacena">
            <div class="carta">
                <img src="assets/img/icono-howgarts-04.png" alt="Escudo de Hogwarts" class="escudo-hogwarts">
                <p>Querido/a ${nombre},</p>
                <p>Tenemos el placer de informarle de que ha sido admitido/a en el colegio Hogwarts de magia y hechicería.</p>
                <p>Aquí encontrará una lista de todos los libros y equipamiento necesarios.</p>
                <p>Atentamente,<br>Minerva McGonagall.</p>
                <button id="boton-entrar" class="boton">Entrar en Hogwarts</button>
            </div>
        </section>
    `);

    document.querySelector("#boton-entrar").addEventListener("click", () => {
        pintarCasas();
    });
}

/* ===== Pantalla 1.4 · GRAN COMEDOR: LAS CUATRO CASAS ===== */
function pintarCasas(){
    cambiarPantalla(`
        <section id="casas" class="pantalla comedor neutro">
            <header>
                <h2>Las cuatro casas de Hogwarts</h2>
                <p>En la escuela existen 4 casas, Gryffindor, Ravenclaw, Slytherin y Hufflepuff. Tras recibir tu carta, el sombrero seleccionador te asignará una casa, y tú tendrás que superar pruebas para ganar la copa de la casa.</p>
            </header>
            <div class="fila-tarjetas">
                <div class="tarjeta-casa">
                    <img src="assets/img/escudo-gryffindor.png" alt="Escudo de Gryffindor">
                    <h3>Gryffindor</h3>
                    <p>Es la casa de los valientes, atrevidos y decididos. Sus miembros destacan por su coraje y su nobleza, incluso cuando tienen miedo.</p>
                </div>
                <div class="tarjeta-casa">
                    <img src="assets/img/escudo-ravenclaw.avif" alt="Escudo de Ravenclaw">
                    <h3>Ravenclaw</h3>
                    <p>Es la casa de los inteligentes, creativos y curiosos. Sus miembros destacan por su sabiduría y originalidad. Siempre buscan aprender cosas nuevas.</p>
                </div>
                <div class="tarjeta-casa">
                    <img src="assets/img/escudo-slitherin.png" alt="Escudo de Slytherin">
                    <h3>Slytherin</h3>
                    <p>Es la casa de los ambiciosos, astutos y determinados. Sus miembros son ingeniosos y estratégicos. Valoran el liderazgo y la superación personal.</p>
                </div>
                <div class="tarjeta-casa">
                    <img src="assets/img/escudo-hufflepuff.webp" alt="Escudo de Hufflepuff">
                    <h3>Hufflepuff</h3>
                    <p>Es la casa de los leales y honestos. Sus miembros valoran la amistad y la justicia. Son personas pacientes y comprometidas, dispuestos a ayudar.</p>
                </div>
            </div>
            <button id="boton-test" class="boton boton-oscuro">Descubre a qué casa perteneces</button>
        </section>
    `);

    document.querySelector("#boton-test").addEventListener("click", () => {
        empezarTest();
    });
}


/* ===== Pantalla 2 · TEST DEL SOMBRERO (diseno/2-test-seleccion-casa.png) ===== */

// pone a cero el test y enseña la primera pregunta
function empezarTest(){
    preguntaActual = 1;
    respuestaElegida = 0;
    votosGryffindor = 0;
    votosRavenclaw = 0;
    votosSlytherin = 0;
    votosHufflepuff = 0;
    pintarPregunta();
}

// rellena los textos de la pregunta actual
function cargarPregunta(){
    switch(preguntaActual){
        case 1:
            textoPregunta = "Si tuvieras un superpoder, ¿cuál elegirías?";
            texto1 = "Ser súper fuerte y no tenerle miedo a nada.";
            texto2 = "Poder leer la mente y saber la respuesta a cualquier pregunta.";
            texto3 = "Curar a los enfermos y conseguir que nadie se sienta solo.";
            texto4 = "Volverte invisible para hacer travesuras y salirte con la tuya.";
            imagen1 = "respuesta-varita";       // FALTA IMAGEN: assets/img/respuesta-varita.png
            imagen2 = "respuesta-libro";        // FALTA IMAGEN: assets/img/respuesta-libro.png
            imagen3 = "respuesta-giratiempo";   // FALTA IMAGEN: assets/img/respuesta-giratiempo.png
            imagen4 = "respuesta-capa";         // FALTA IMAGEN: assets/img/respuesta-capa.png
            ordenCasas = "GRHS";
            break;
        case 2:
            textoPregunta = "¿Qué es lo más importante para ser un buen amigo?";
            texto1 = "No dejarlo nunca solo y compartirlo todo con él.";
            texto2 = "Defenderlo si alguien intenta molestarle.";
            texto3 = "Guardar sus secretos y ayudarle a conseguir lo que quiere.";
            texto4 = "Ayudarle a hacer deberes o enseñarle cosas divertidas.";
            imagen1 = "respuesta-manos";        // FALTA IMAGEN: assets/img/respuesta-manos.png
            imagen2 = "respuesta-corazon";      // FALTA IMAGEN: assets/img/respuesta-corazon.png
            imagen3 = "respuesta-escudo";       // FALTA IMAGEN: assets/img/respuesta-escudo.png
            imagen4 = "respuesta-regalo";       // FALTA IMAGEN: assets/img/respuesta-regalo.png
            ordenCasas = "HGSR";
            break;
        case 3:
            textoPregunta = "Te dan a elegir una mascota para llevar al cole, ¿cuál elegirías?";
            texto1 = "Un búho listo que te traiga libros e información.";
            texto2 = "Un gato misterioso y astuto que solo te obedezca a ti.";
            texto3 = "Un ave fénix valiente que te proteja.";
            texto4 = "Cualquier animal fiel que siempre quiera jugar contigo.";
            imagen1 = "respuesta-buho";         // FALTA IMAGEN: assets/img/respuesta-buho.png
            imagen2 = "respuesta-gato";         // FALTA IMAGEN: assets/img/respuesta-gato.png
            imagen3 = "respuesta-fenix";        // FALTA IMAGEN: assets/img/respuesta-fenix.png
            imagen4 = "respuesta-tejon";        // FALTA IMAGEN: assets/img/respuesta-tejon.png
            ordenCasas = "RSGH";
            break;
        default:
            textoPregunta = "¿Cómo prefieres ganar en un juego?";
            texto1 = "Jugando con muchas ganas y siendo el más valiente.";
            texto2 = "Jugando en equipo, para que todos se diviertan.";
            texto3 = "Pensando en la mejor estrategia antes de jugar.";
            texto4 = "Haciendo lo que sea necesario para ganar.";
            imagen1 = "respuesta-copa";         // FALTA IMAGEN: assets/img/respuesta-copa.png
            imagen2 = "respuesta-estrella";     // FALTA IMAGEN: assets/img/respuesta-estrella.png
            imagen3 = "respuesta-snitch";       // FALTA IMAGEN: assets/img/respuesta-snitch.png
            imagen4 = "respuesta-dados";        // FALTA IMAGEN: assets/img/respuesta-dados.png
            ordenCasas = "GHRS";
            break;
    }
}

// HTML de una tarjeta de respuesta. Si es la elegida, lleva la clase "seleccionada"
// La ruta se forma así: "assets/img/" + imagen1 (por ejemplo "respuesta-varita") + ".png"
// Si tus imágenes del test no son .png, cambia ".png" aquí abajo   ← FALTA IMAGEN
let tarjetaRespuesta = (numero, imagen, texto) => `
    <button id="respuesta-${numero}" class="tarjeta-respuesta ${(respuestaElegida == numero) ? "seleccionada" : ""}">
        <img src="assets/img/${imagen}.png" alt="">
        <p>${texto}</p>
    </button>`;

// pinta la pantalla de la pregunta
function pintarPregunta(){
    cargarPregunta();
    let textoBoton = (preguntaActual == 4) ? "Descubrir mi casa" : "Siguiente pregunta";

    cambiarPantalla(`
        <section id="pregunta" class="pantalla test">
            <header class="cabecera-test">
                <div class="sombrero-con-lineas">
                    <div class="linea"></div>
                    <img src="assets/img/sombrero-seleccionador.png" alt="El sombrero seleccionador">
                    <div class="linea"></div>
                </div>
                <p class="contador-preguntas">Pregunta ${preguntaActual} de 4</p>
                <h2>${textoPregunta}</h2>
            </header>
            <div id="respuestas" class="fila-tarjetas"></div>
            <p id="aviso" class="aviso"></p>
            <button id="siguiente" class="boton">${textoBoton}</button>
        </section>
    `);

    pintarRespuestas();

    document.querySelector("#siguiente").addEventListener("click", () => {
        siguientePregunta();
    });
}

/* pinta solo las 4 tarjetas. Se vuelve a llamar al elegir una,
   para que la elegida se vea marcada (sin mover la pantalla) */
function pintarRespuestas(){
    document.querySelector("#respuestas").innerHTML = `
        ${tarjetaRespuesta(1, imagen1, texto1)}
        ${tarjetaRespuesta(2, imagen2, texto2)}
        ${tarjetaRespuesta(3, imagen3, texto3)}
        ${tarjetaRespuesta(4, imagen4, texto4)}
    `;

    // un escuchador para cada tarjeta
    for(let i = 1; i <= 4; i++){
        document.querySelector(`#respuesta-${i}`).addEventListener("click", () => {
            respuestaElegida = i;
            document.querySelector("#aviso").textContent = "";
            pintarRespuestas();
        });
    }
}

// suma un voto a una casa
function sumarVoto(casaVotada){
    switch(casaVotada){
        case "gryffindor":
            votosGryffindor++;
            break;
        case "ravenclaw":
            votosRavenclaw++;
            break;
        case "slytherin":
            votosSlytherin++;
            break;
        default:
            votosHufflepuff++;
            break;
    }
}

function siguientePregunta(){
    if(respuestaElegida == 0){
        document.querySelector("#aviso").textContent = "Elige una respuesta antes de seguir.";
    }else{
        // la casa de la tarjeta elegida: su inicial está en ordenCasas
        // (la tarjeta 1 es la posición 0 del texto, por eso el - 1)
        ultimaCasaVotada = casaDeLetra(ordenCasas[respuestaElegida - 1]);
        sumarVoto(ultimaCasaVotada);
        console.log(`Pregunta ${preguntaActual}: voto para ${ultimaCasaVotada}`);

        preguntaActual++;
        respuestaElegida = 0;

        if(preguntaActual > 4){
            calcularCasa();
            pintarResultado();
        }else{
            pintarPregunta();
        }
    }
}

/* Gana la casa con más votos.
   Si hay empate, gana la casa de la última respuesta. */
function calcularCasa(){
    casa = ultimaCasaVotada;
    if(votosGryffindor > votosDe(casa)){
        casa = "gryffindor";
    }
    if(votosRavenclaw > votosDe(casa)){
        casa = "ravenclaw";
    }
    if(votosSlytherin > votosDe(casa)){
        casa = "slytherin";
    }
    if(votosHufflepuff > votosDe(casa)){
        casa = "hufflepuff";
    }
    console.log(`El sombrero ha elegido: ${casa}`);
}

/* ===== Pantalla 2.2 · RESULTADO: ENHORABUENA, TU CASA ES... ===== */
function pintarResultado(){
    let texto = "";
    switch(casa){
        case "gryffindor":
            texto = "¡Tu lugar está en Gryffindor! Eres una persona valiente, decidida y con un gran sentido de la justicia. No tienes miedo de enfrentarte a nuevos desafíos ni de defender aquello en lo que crees, incluso cuando las cosas se ponen difíciles. Tu coraje no significa que nunca tengas miedo, sino que sabes encontrar la fuerza para seguir adelante a pesar de él. Valoras la amistad, la lealtad y hacer lo correcto. Tu espíritu aventurero y tu determinación te convierten en alguien capaz de hacer grandes cosas. ¡La verdadera valentía está en tu interior!";
            break;
        case "slytherin":
            texto = "¡Bienvenido a Slytherin! Eres una persona ambiciosa, astuta y llena de determinación. Sabes lo que quieres y no te rindes fácilmente hasta conseguirlo. Destacas por tu inteligencia, tu capacidad para encontrar soluciones y tu habilidad para adaptarte a cualquier situación. Te gusta tener el control de tus decisiones y siempre buscas la manera de alcanzar tus objetivos. Tu ingenio y tu confianza en ti mismo son tus mayores fortalezas. Recuerda que tener grandes ambiciones es el primer paso para conseguir grandes cosas.";
            break;
        case "ravenclaw":
            texto = "¡Has sido seleccionado para Ravenclaw! Eres una persona curiosa, inteligente y con una imaginación extraordinaria. Te encanta aprender, descubrir cosas nuevas y explorar ideas que otras personas quizá nunca se plantearían. Tu mente siempre está en movimiento y disfrutas encontrando respuestas a preguntas difíciles. Valoras la creatividad, la originalidad y el conocimiento, pero sabes que ser inteligente también significa tener una mente abierta y estar dispuesto a cambiar de opinión. Tu mayor virtud es que nunca dejas de cuestionar el mundo que te rodea.";
            break;
        default:
            texto = "¡Tu casa es Hufflepuff! Eres una persona amable, leal y de gran corazón. Para ti, la amistad, la confianza y el respeto son fundamentales. Siempre estás dispuesto a ayudar a los demás y sabes que los pequeños gestos pueden marcar una gran diferencia. Eres trabajador, paciente y constante, y no necesitas destacar por encima de los demás para demostrar todo lo que vales. Tu mayor fortaleza está en tu capacidad para cuidar de quienes te rodean y mantenerte fiel a tus principios. Recuerda que la bondad también es una forma de valentía.";
            break;
    }

    // la clase ${casa} pone el fondo del Gran Comedor de esa casa (style.css)
    cambiarPantalla(`
        <section id="resultado" class="pantalla comedor ${casa}">
            <header>
                <h2>Enhorabuena, tu casa es...</h2>
            </header>
            <div class="caja-resultado">
                <img src="${escudoCasa(casa)}" alt="Escudo de ${nombreCasa(casa)}">
                <div>
                    <h3>${nombreCasa(casa)}!!</h3>
                    <p>${texto}</p>
                </div>
            </div>
            <button id="boton-torneo" class="boton boton-oscuro">Torneo de las 4 casas</button>
        </section>
    `);

    document.querySelector("#boton-torneo").addEventListener("click", () => {
        pintarTorneo();
    });
}


/* ===== Pantalla 3 · TORNEO DE LA COPA (diseno/3-copa-de-la-casa.png) ===== */

// HTML de un marcador. La casa del niño lleva la etiqueta "Tu casa"
let tarjetaMarcador = (casaTarjeta) => `
    <div class="tarjeta-casa marcador">
        <img src="${escudoCasa(casaTarjeta)}" alt="Escudo de ${nombreCasa(casaTarjeta)}">
        <h3>${nombreCasa(casaTarjeta)}</h3>
        <p class="puntos">${puntosDe(casaTarjeta)}</p>
        ${(casaTarjeta == casa) ? `<p class="tu-casa">Tu casa</p>` : ""}
    </div>`;

function pintarTorneo(){
    // cuando están los 3 minijuegos superados, el botón lleva al final
    let todoSuperado = pocionesSuperado && llavesSuperado && ajedrezSuperado;
    let textoBoton = todoSuperado ? "Ver la casa ganadora" : "Jugar";

    cambiarPantalla(`
        <section id="torneo" class="pantalla comedor ${casa}">
            <header>
                <h2>Torneo de la Copa de la Casa</h2>
                <p>Las 4 casas competirán en diferentes pruebas y ganarán puntos cuando ganen. Tu misión es conseguir puntos en diferentes minijuegos para ayudar a tu casa a ganar la copa.</p>
            </header>
            <div class="fila-tarjetas">
                ${tarjetaMarcador("gryffindor")}
                ${tarjetaMarcador("ravenclaw")}
                ${tarjetaMarcador("slytherin")}
                ${tarjetaMarcador("hufflepuff")}
            </div>
            <button id="boton-jugar" class="boton boton-oscuro">${textoBoton}</button>
        </section>
    `);

    document.querySelector("#boton-jugar").addEventListener("click", () => {
        if(todoSuperado){
            pintarFinalEspera();
        }else{
            pintarSala();
        }
    });
}


/* ===== Pantalla 4 · SALA DE LOS MINIJUEGOS (diseno/4-sala-minijuegos.png) ===== */

// HTML de la tarjeta de un minijuego
let tarjetaMinijuego = (id, imagen, titulo, texto, superado) => `
    <div class="tarjeta-minijuego">
        <img src="assets/img/${imagen}" alt="">
        <h3>${titulo}</h3>
        <p>${superado ? "¡Prueba superada!" : texto}</p>
        <button id="${id}" class="boton">${superado ? "Volver a jugar" : "Jugar"}</button>
    </div>`;

function pintarSala(){
    // FALTA IMAGEN: la tarjeta de las llaves usa assets/img/fondo-llaves.jpg
    cambiarPantalla(`
        <section id="sala" class="pantalla comedor ${casa}">
            <header>
                <h2>Sala de los minijuegos</h2>
            </header>
            <div class="fila-tarjetas">
                ${tarjetaMinijuego("jugar-pociones", "sala-pociones-03.jpg", "Aula de pociones", "En esta prueba tendrás que preparar una poción con el profesor Snape.", pocionesSuperado)}
                ${tarjetaMinijuego("jugar-llaves", "llaves-voladoras.png", "Llaves voladoras", "En esta prueba tendrás que atrapar la llave vieja del castillo.", llavesSuperado)}
                ${tarjetaMinijuego("jugar-ajedrez", "ajedrez-magico.png", "Ajedrez mágico", "En esta prueba tendrás que derrotar al rey del ajedrez.", ajedrezSuperado)}
            </div>
            <button id="boton-recuento" class="boton boton-oscuro">Volver al recuento de puntos</button>
        </section>
    `);

    document.querySelector("#jugar-pociones").addEventListener("click", () => {
        pintarPocionesExplicacion();
    });
    document.querySelector("#jugar-llaves").addEventListener("click", () => {
        pintarLlavesExplicacion();
    });
    document.querySelector("#jugar-ajedrez").addEventListener("click", () => {
        pintarAjedrezExplicacion();
    });
    document.querySelector("#boton-recuento").addEventListener("click", () => {
        pintarTorneo();
    });
}

// pantalla de "¡Enhorabuena!" de cualquier minijuego
function pintarEnhorabuena(juego, texto, conPuntos){
    // si ya lo había superado antes, se lo decimos
    let textoPuntos = conPuntos ? texto : "Ya habías superado esta prueba, así que esta vez no suma puntos.";

    cambiarPantalla(`
        <section id="${juego}-enhorabuena" class="pantalla minijuego ${juego}">
            <div class="caja-minijuego caja-enhorabuena">
                <h2>¡Enhorabuena!</h2>
                <p>${textoPuntos}</p>
                <button id="volver-comedor" class="boton">Volver al Gran Comedor</button>
            </div>
        </section>
    `);

    // vuelve al recuento de puntos para ver cómo suben los contadores
    document.querySelector("#volver-comedor").addEventListener("click", () => {
        pintarTorneo();
    });
}


/* ===== Pantalla 6 · FINAL (diseno/6-final.png) ===== */

// 6.1 Gran Comedor neutro: todavía no se sabe quién gana
function pintarFinalEspera(){
    cambiarPantalla(`
        <section id="final-espera" class="pantalla comedor neutro final">
            <h2>La casa ganadora del torneo es...</h2>
            <button id="descubrir" class="boton boton-oscuro">Descubrir la casa ganadora</button>
        </section>
    `);

    document.querySelector("#descubrir").addEventListener("click", () => {
        pintarFinalGanadora();
    });
}

// 6.2 El Gran Comedor se tiñe con los colores de la casa con más puntos
function pintarFinalGanadora(){
    let ganadora = "gryffindor";
    if(puntosRavenclaw > puntosDe(ganadora)){
        ganadora = "ravenclaw";
    }
    if(puntosSlytherin > puntosDe(ganadora)){
        ganadora = "slytherin";
    }
    if(puntosHufflepuff > puntosDe(ganadora)){
        ganadora = "hufflepuff";
    }

    let mensaje = (ganadora == casa) ? `¡Lo has conseguido, ${nombre}! Tu casa gana la copa con ${puntosDe(ganadora)} puntos.` : `Ha ganado con ${puntosDe(ganadora)} puntos.`;

    cambiarPantalla(`
        <section id="final-ganadora" class="pantalla comedor ${ganadora} final">
            <h2>${nombreCasa(ganadora)}!!</h2>
            <p class="mensaje-final">${mensaje}</p>
            <button id="empezar" class="boton boton-oscuro">Volver a empezar</button>
        </section>
    `);

    document.querySelector("#empezar").addEventListener("click", () => {
        volverAEmpezar();
    });
}

// pone todo a cero y vuelve a la alacena
function volverAEmpezar(){
    nombre = "";
    casa = "";
    puntosGryffindor = 0;
    puntosRavenclaw = 0;
    puntosSlytherin = 0;
    puntosHufflepuff = 0;
    pocionesSuperado = false;
    llavesSuperado = false;
    ajedrezSuperado = false;
    pintarAlacena();
}


/* =========================================================
   4. MINIJUEGOS · ZONA AUTORIZADA

   Aquí uso cosas que NO hemos dado en clase. Están autorizadas
   solo para que los minijuegos funcionen como en el Figma
   (apuntes/resumen.md, sección 5.3):

   · setTimeout(función, ms)
       Ejecuta una función pasados unos milisegundos.
       Lo uso para esperar entre una pieza iluminada y otra.

   · requestAnimationFrame(función)
       Pide al navegador que ejecute la función en el siguiente
       "fotograma" (unas 60 veces por segundo). Llamándola una y otra
       vez se consigue una animación: así vuelan las llaves.

   · Math.random()
       Da un número al azar entre 0 y 1. Multiplicado y redondeado
       con Math.floor() sirve para elegir algo al azar.

   · Arrays [ ] y objetos { }
       Un array es una lista de valores: orden[0], orden[1]...
       Un objeto agrupa datos con nombre: llave.x, llave.y...

   · elemento.classList.add("clase") / .remove("clase")
       Pone o quita una clase de CSS a un elemento ya pintado
       (por ejemplo "iluminada" en las piezas del ajedrez).

   · elemento.style.transform = "translate(...)"
       Mueve un elemento desde JS (ingredientes y llaves).

   · Eventos de puntero: pointerdown, pointermove, pointerup
       Como mousedown, mousemove y mouseup (están en la tabla de
       eventos de los apuntes), pero funcionan también con el dedo
       en el móvil. Sirven para arrastrar.

   · getBoundingClientRect()
       Dice dónde está un elemento en la pantalla (izquierda,
       derecha, arriba, abajo). Sirve para saber si el ingrediente
       se ha soltado encima del caldero.
   ========================================================= */

/* esperar(ms, accion): como setTimeout, pero si mientras tanto
   se ha cambiado de pantalla, NO hace nada.
   Así, si el niño sale del ajedrez a mitad de ronda, las piezas
   dejan de iluminarse. */
function esperar(milisegundos, accion){
    let miPartida = partida;
    setTimeout(() => {
        if(miPartida == partida){
            accion();
        }
    }, milisegundos);
}


/* ===== Pantalla 5.1 · POCIONES ===== */

function pintarPocionesExplicacion(){
    // FALTA IMAGEN: los 6 ingredientes de esta pantalla
    // (assets/img/ingrediente-mandragora.png, ingrediente-ojos-arana.png, ingrediente-pelo-unicornio.png,
    //  ingrediente-baba-sapo.png, ingrediente-escamas-dragon.png, ingrediente-cola-escorpion.png)
    cambiarPantalla(`
        <section id="pociones-explicacion" class="pantalla minijuego pociones">
            ${navegacionMinijuego()}
            <div class="caja-minijuego">
                <h2>Sala de pociones</h2>
                <p>En esta prueba deberás crear una poción con el profesor Snape. Pero cuidado, la poción solo funcionará si agregas los ingredientes en el orden correcto, si no lo haces, explotará.</p>
                <p>Ten cuidado y memoriza bien el orden de los ingredientes antes de comenzar a jugar. El orden es el siguiente:</p>
                <div class="fila-ingredientes">
                    <div class="ingrediente">
                        <img src="assets/img/hojas-de-mandragora.png" alt="">
                        <p>1. Hojas de mandrágora.</p>
                    </div>
                    <div class="ingrediente">
                        <img src="assets/img/ojo-de-araña.png" alt="">
                        <p>2. Ojos de araña.</p>
                    </div>
                    <div class="ingrediente">
                        <img src="assets/img/pelo-de-unicornio.png" alt="">
                        <p>3. Pelo de unicornio.</p>
                    </div>
                    <div class="ingrediente">
                        <img src="assets/img/baba-de-sapo.png" alt="">
                        <p>4. Baba de sapo.</p>
                    </div>
                    <div class="ingrediente">
                        <img src="assets/img/escamas-de-dragon.png" alt="">
                        <p>5. Escamas de dragón.</p>
                    </div>
                    <div class="ingrediente">
                        <img src="assets/img/cola-de-escorpion.png" alt="">
                        <p>6. Cola de escorpión.</p>
                    </div>
                </div>
                <button id="comenzar" class="boton">Comenzar a jugar</button>
            </div>
        </section>
    `);

    escucharNavegacion();
    document.querySelector("#comenzar").addEventListener("click", () => {
        pintarPocionesJuego();
    });
}

/* El juego: cada ingrediente guarda su número de orden en
   data-orden (1 = el primero que hay que echar).
   Están desordenados alrededor del caldero con las clases lugar-... */
function pintarPocionesJuego(){
    // FALTA IMAGEN: los 6 ingredientes (los mismos de la explicación) y assets/img/caldero.png
    cambiarPantalla(`
        <section id="pociones-juego" class="pantalla minijuego pociones">
            ${navegacionMinijuego()}
            <p id="estado-pociones" class="estado-juego" aria-live="polite">Arrastra los ingredientes al caldero en el orden correcto.</p>
            <div class="mesa-pociones">
                <button class="ingrediente-arrastrable lugar-escamas" data-orden="5"><img src="assets/img/escamas-de-dragon.png" alt="Escamas de dragón"></button>
                <button class="ingrediente-arrastrable lugar-cola" data-orden="6"><img src="assets/img/cola-de-escorpion.png" alt="Cola de escorpión"></button>
                <button class="ingrediente-arrastrable lugar-baba" data-orden="4"><img src="assets/img/baba-de-sapo.png" alt="Baba de sapo"></button>
                <button class="ingrediente-arrastrable lugar-ojos" data-orden="2"><img src="assets/img/ojo-de-araña.png" alt="Ojos de araña"></button>
                <button class="ingrediente-arrastrable lugar-mandragora" data-orden="1"><img src="assets/img/hojas-de-mandragora.png" alt="Hojas de mandrágora"></button>
                <button class="ingrediente-arrastrable lugar-pelo" data-orden="3"><img src="assets/img/pelo-de-unicornio.png" alt="Pelo de unicornio"></button>
                <div id="caldero" class="caldero">
                    <img src="assets/img/caldero.png" alt="Caldero">
                </div>
            </div>
        </section>
    `);

    escucharNavegacion();
    empezarPociones();
}

let siguienteIngrediente = 1;   // número del ingrediente que toca echar
let pocionTerminada = false;    // true cuando explota o se completa

function empezarPociones(){
    siguienteIngrediente = 1;
    pocionTerminada = false;

    // querySelectorAll devuelve todos los ingredientes; los recorro con un for
    let ingredientes = document.querySelectorAll(".ingrediente-arrastrable");
    for(let i = 0; i < ingredientes.length; i++){
        prepararArrastre(ingredientes[i]);
    }
}

// ¿el puntero (ratón o dedo) está encima del caldero?
function encimaDelCaldero(evento){
    let caja = document.querySelector("#caldero").getBoundingClientRect();
    return evento.clientX >= caja.left && evento.clientX <= caja.right && evento.clientY >= caja.top && evento.clientY <= caja.bottom;
}

/* Hace que un ingrediente se pueda arrastrar.
   1. pointerdown: el niño pulsa → apunto dónde empezó.
   2. pointermove: mueve el dedo/ratón → el ingrediente le sigue
      (lo desplazo con transform: translate(x, y)).
   3. pointerup: suelta → si está encima del caldero, lo echo;
      si no, vuelve a su sitio. */
function prepararArrastre(ingrediente){
    let arrastrando = false;
    let inicioX = 0;
    let inicioY = 0;
    const caldero = document.querySelector("#caldero");

    ingrediente.addEventListener("pointerdown", (evento) => {
        if(pocionTerminada){
            return;
        }
        arrastrando = true;
        inicioX = evento.clientX;
        inicioY = evento.clientY;
        // "captura" el puntero: aunque se mueva rápido, los eventos siguen llegando a este ingrediente
        ingrediente.setPointerCapture(evento.pointerId);
        ingrediente.classList.add("arrastrando");
    });

    ingrediente.addEventListener("pointermove", (evento) => {
        if(!arrastrando){
            return;
        }
        let x = evento.clientX - inicioX;
        let y = evento.clientY - inicioY;
        ingrediente.style.transform = `translate(${x}px, ${y}px)`;

        // el caldero brilla cuando el ingrediente está encima
        if(encimaDelCaldero(evento)){
            caldero.classList.add("caldero-activo");
        }else{
            caldero.classList.remove("caldero-activo");
        }
    });

    ingrediente.addEventListener("pointerup", (evento) => {
        if(!arrastrando){
            return;
        }
        arrastrando = false;
        ingrediente.classList.remove("arrastrando");
        caldero.classList.remove("caldero-activo");

        if(encimaDelCaldero(evento)){
            echarIngrediente(ingrediente);
        }else{
            ingrediente.style.transform = "";   // vuelve a su sitio
        }
    });

    // si el navegador cancela el arrastre, el ingrediente vuelve a su sitio
    ingrediente.addEventListener("pointercancel", () => {
        arrastrando = false;
        ingrediente.classList.remove("arrastrando");
        ingrediente.style.transform = "";
    });

    /* Accesibilidad: con el teclado no se puede arrastrar, así que
       al pulsar Enter sobre un ingrediente se echa al caldero.
       (evento.detail == 0 significa "click hecho con el teclado") */
    ingrediente.addEventListener("click", (evento) => {
        if(evento.detail == 0 && !pocionTerminada){
            echarIngrediente(ingrediente);
        }
    });
}

function echarIngrediente(ingrediente){
    const estado = document.querySelector("#estado-pociones");
    let numero = Number(ingrediente.dataset.orden);

    if(numero == siguienteIngrediente){
        // ¡correcto! el ingrediente desaparece dentro del caldero
        ingrediente.classList.add("dentro-del-caldero");
        estado.textContent = `¡Bien! Llevas ${siguienteIngrediente} de 6 ingredientes.`;
        siguienteIngrediente++;

        if(siguienteIngrediente > 6){
            pocionTerminada = true;
            estado.textContent = "¡La poción está perfecta!";
            esperar(1200, () => {
                let conPuntos = ganarMinijuego("pociones");
                pintarEnhorabuena("pociones", "Conseguiste hacer la poción perfecta. El profesor Snape te da 50 puntos para tu casa.", conPuntos);
            });
        }
    }else{
        // orden equivocado: ¡explota! y vuelve a la explicación
        pocionTerminada = true;
        ingrediente.style.transform = "";
        document.querySelector("#caldero").classList.add("explosion");
        estado.textContent = "¡BOOM! La poción ha explotado. Vuelve a mirar el orden de los ingredientes.";
        esperar(2500, () => {
            pintarPocionesExplicacion();
        });
    }
}


/* ===== Pantalla 5.2 · LLAVES VOLADORAS ===== */

function pintarLlavesExplicacion(){
    // FALTA IMAGEN: assets/img/llave-normal.png y assets/img/llave-vieja.png
    cambiarPantalla(`
        <section id="llaves-explicacion" class="pantalla minijuego llaves">
            ${navegacionMinijuego()}
            <div class="caja-minijuego">
                <h2>Las llaves voladoras</h2>
                <p>En esta prueba deberás atrapar la llave vieja del castillo para poder abrir la puerta y continuar al siguiente minijuego.</p>
                <p>Pero no será tan fácil, en cuanto comiences el juego verás un montón de llaves volando por el espacio, intentando distraerte para que no veas la llave vieja. Deberás tener la vista de un verdadero buscador de quidditch y atrapar la llave rápido.</p>
                <div class="fila-ingredientes">
                    <div class="ingrediente">
                        <img src="assets/img/llave-normal.png" alt="">
                        <p>Llaves normales.</p>
                    </div>
                    <div class="ingrediente">
                        <img src="assets/img/llave-antigua.png" alt="">
                        <p>Llave vieja del castillo.</p>
                    </div>
                </div>
                <button id="comenzar" class="boton">Comenzar a jugar</button>
            </div>
        </section>
    `);

    escucharNavegacion();
    document.querySelector("#comenzar").addEventListener("click", () => {
        pintarLlavesJuego();
    });
}

const totalLlaves = 12;

function pintarLlavesJuego(){
    cambiarPantalla(`
        <section id="llaves-juego" class="pantalla minijuego llaves">
            ${navegacionMinijuego()}
            <p id="estado-llaves" class="estado-juego" aria-live="polite">¡Atrapa la llave vieja del castillo!</p>
            <div id="cielo-llaves" class="cielo-llaves"></div>
        </section>
    `);

    escucharNavegacion();
    empezarLlaves();
}

function empezarLlaves(){
    const cielo = document.querySelector("#cielo-llaves");
    const estado = document.querySelector("#estado-llaves");

    // 1. Elijo al azar cuál de las 12 será la llave vieja
    let posicionVieja = Math.floor(Math.random() * totalLlaves);

    // 2. Pinto las 12 llaves con un bucle for (esto sí es del temario)
    let html = "";
    for(let i = 0; i < totalLlaves; i++){
        // FALTA IMAGEN: assets/img/llave-vieja.png y assets/img/llave-normal.png
        if(i == posicionVieja){
            html += `<button class="llave llave-vieja"><img src="assets/img/llave-antigua.png" alt="Llave vieja del castillo"></button>`;
        }else{
            html += `<button class="llave"><img src="assets/img/llave-normal.png" alt="Llave normal"></button>`;
        }
    }
    cielo.innerHTML = html;

    /* 3. Cada llave tiene una posición (x, y) y una velocidad (vx, vy).
       Las guardo en un array de objetos. */
    let elementos = document.querySelectorAll(".llave");
    let llaves = [];

    // velocidad según el ancho de la pantalla (en el móvil vuelan más despacio)
    let velocidad = cielo.clientWidth / 450;
    // si el sistema pide "reducir movimiento", vuelan mucho más despacio (accesibilidad)
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
        velocidad = velocidad * 0.3;
    }

    let atrapada = false;

    for(let i = 0; i < elementos.length; i++){
        // dirección al azar: hacia la izquierda (-1) o la derecha (1), y arriba o abajo
        let signoX = (Math.random() < 0.5) ? -1 : 1;
        let signoY = (Math.random() < 0.5) ? -1 : 1;

        llaves.push({
            elemento: elementos[i],
            x: Math.random() * (cielo.clientWidth - 80),
            y: Math.random() * (cielo.clientHeight - 80),
            // cada llave va a una velocidad distinta, entre la mitad y la velocidad entera
            vx: signoX * (0.5 + Math.random() * 0.5) * velocidad,
            vy: signoY * (0.5 + Math.random() * 0.5) * velocidad
        });

        // al pulsar una llave
        elementos[i].addEventListener("click", () => {
            if(atrapada){
                return;
            }
            if(elementos[i].classList.contains("llave-vieja")){
                // ¡la vieja! paro las llaves (partida++ detiene la animación) y gano
                atrapada = true;
                partida++;
                elementos[i].classList.add("atrapada");
                estado.textContent = "¡La tienes! Has atrapado la llave vieja.";
                esperar(1200, () => {
                    let conPuntos = ganarMinijuego("llaves");
                    pintarEnhorabuena("llaves", "Conseguiste encontrar la llave correcta. Se suman 50 puntos para tu casa.", conPuntos);
                });
            }else{
                estado.textContent = "¡Esa no es! Busca la llave vieja del castillo.";
            }
        });
    }

    /* 4. La animación: en cada fotograma muevo cada llave un poco.
       Si toca un borde, rebota (cambio el signo de su velocidad). */
    let miPartida = partida;
    let volar = () => {
        // si ya no estamos en esta pantalla (o se ha ganado), paro
        if(miPartida != partida){
            return;
        }
        let ancho = cielo.clientWidth;
        let alto = cielo.clientHeight;

        for(let i = 0; i < llaves.length; i++){
            let llave = llaves[i];
            let tamano = llave.elemento.offsetWidth;
            llave.x += llave.vx;
            llave.y += llave.vy;

            // rebote en los bordes
            if(llave.x < 0){
                llave.x = 0;
                llave.vx = -llave.vx;
            }
            if(llave.x > ancho - tamano){
                llave.x = ancho - tamano;
                llave.vx = -llave.vx;
            }
            if(llave.y < 0){
                llave.y = 0;
                llave.vy = -llave.vy;
            }
            if(llave.y > alto - tamano){
                llave.y = alto - tamano;
                llave.vy = -llave.vy;
            }

            // muevo la llave y la inclino un poco según hacia dónde va
            llave.elemento.style.transform = `translate(${llave.x}px, ${llave.y}px) rotate(${llave.vx * 8}deg)`;
        }

        requestAnimationFrame(volar);
    };
    requestAnimationFrame(volar);
}


/* ===== Pantalla 5.3 · AJEDREZ MÁGICO ===== */

function pintarAjedrezExplicacion(){
    cambiarPantalla(`
        <section id="ajedrez-explicacion" class="pantalla minijuego ajedrez">
            ${navegacionMinijuego()}
            <div class="caja-minijuego">
                <h2>El ajedrez mágico</h2>
                <p>En esta prueba deberás derrotar al rey del ajedrez. ¿Cómo? Las piezas de ajedrez se iluminarán de forma aleatoria en 8 rondas diferentes, en cada ronda se sumará una pieza nueva y se aumentará la dificultad.</p>
                <p>Tu objetivo es hacer click en las piezas de ajedrez que se hayan iluminado en esa ronda, y en el mismo orden con el que se han ido iluminando. Si llegas a la ronda donde se iluminan las 8 piezas y consigues acordarte del orden correcto, habrás derrotado al rey.</p>
                <button id="comenzar" class="boton">Comenzar a jugar</button>
            </div>
        </section>
    `);

    escucharNavegacion();
    document.querySelector("#comenzar").addEventListener("click", () => {
        pintarAjedrezJuego();
    });
}

function pintarAjedrezJuego(){
    cambiarPantalla(`
        <section id="ajedrez-juego" class="pantalla minijuego ajedrez">
            ${navegacionMinijuego()}
            <p id="ronda" class="ronda">Ronda 1 de 8</p>
            <p id="estado-ajedrez" class="estado-juego" aria-live="polite">Mira bien qué piezas se iluminan...</p>
            <div class="tablero">
                <button id="pieza-0" class="pieza pieza-torre-blanca"><img src="assets/img/pieza-torre-blanca.png" alt="Torre blanca"></button>
                <button id="pieza-1" class="pieza pieza-caballo-blanco"><img src="assets/img/pieza-caballo-blanco.png" alt="Caballo blanco"></button>
                <button id="pieza-2" class="pieza pieza-alfil-blanco"><img src="assets/img/pieza-alfil-blanco.png" alt="Alfil blanco"></button>
                <button id="pieza-3" class="pieza pieza-rey-blanco"><img src="assets/img/pieza-rey-blanco.png" alt="Rey blanco"></button>
                <button id="pieza-4" class="pieza pieza-rey-negro"><img src="assets/img/pieza-rey-negro.png" alt="Rey negro"></button>
                <button id="pieza-5" class="pieza pieza-alfil-negro"><img src="assets/img/pieza-alfil-negro.png" alt="Alfil negro"></button>
                <button id="pieza-6" class="pieza pieza-torre-negra"><img src="assets/img/pieza-torre-negra.png" alt="Torre negra"></button>
                <button id="pieza-7" class="pieza pieza-caballo-negro"><img src="assets/img/pieza-caballo-negro.png" alt="Caballo negro"></button>
            </div>
        </section>
    `);

    escucharNavegacion();
    empezarAjedrez();
}

let ordenPiezas = [];       // orden al azar de las 8 piezas, por ejemplo [5, 0, 7, 2, ...]
let rondaAjedrez = 1;       // de 1 a 8: en la ronda 3 se iluminan las 3 primeras de ordenPiezas
let pasoJugador = 0;        // cuántas piezas ha acertado el niño en esta ronda
let turnoJugador = false;   // true cuando el niño puede pulsar

function empezarAjedrez(){
    /* 1. Mezclo las 8 piezas al azar (algoritmo de "barajar"):
       recorro la lista desde el final y cambio cada pieza
       por otra de una posición al azar. */
    ordenPiezas = [0, 1, 2, 3, 4, 5, 6, 7];
    for(let i = ordenPiezas.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let guardada = ordenPiezas[i];
        ordenPiezas[i] = ordenPiezas[j];
        ordenPiezas[j] = guardada;
    }
    console.log(`Orden secreto del ajedrez: ${ordenPiezas}`);

    rondaAjedrez = 1;

    // 2. Cada pieza escucha sus clicks
    for(let i = 0; i < 8; i++){
        document.querySelector(`#pieza-${i}`).addEventListener("click", () => {
            pulsarPieza(i);
        });
    }

    // 3. Empieza la primera ronda
    esperar(800, () => {
        mostrarRonda();
    });
}

// ilumina una pieza durante unos milisegundos
function iluminar(numeroPieza, milisegundos){
    const pieza = document.querySelector(`#pieza-${numeroPieza}`);
    pieza.classList.add("iluminada");
    esperar(milisegundos, () => {
        pieza.classList.remove("iluminada");
    });
}

// enseña las piezas de la ronda, una detrás de otra
function mostrarRonda(){
    turnoJugador = false;
    document.querySelector("#ronda").textContent = `Ronda ${rondaAjedrez} de 8`;
    document.querySelector("#estado-ajedrez").textContent = "Mira bien qué piezas se iluminan...";

    // la pieza i se ilumina a los i × 900 ms, durante 600 ms
    for(let i = 0; i < rondaAjedrez; i++){
        esperar(i * 900, () => {
            iluminar(ordenPiezas[i], 600);
        });
    }

    // cuando acaban, es el turno del niño
    esperar(rondaAjedrez * 900, () => {
        turnoJugador = true;
        pasoJugador = 0;
        document.querySelector("#estado-ajedrez").textContent = "¡Tu turno! Pulsa las piezas en el mismo orden.";
    });
}

function pulsarPieza(numeroPieza){
    if(!turnoJugador){
        return;
    }
    iluminar(numeroPieza, 300);
    const estado = document.querySelector("#estado-ajedrez");

    if(numeroPieza == ordenPiezas[pasoJugador]){
        // acierto
        pasoJugador++;

        if(pasoJugador == rondaAjedrez){
            // ha completado la ronda
            turnoJugador = false;
            if(rondaAjedrez == 8){
                estado.textContent = "¡Jaque mate! Has derrotado al rey.";
                esperar(1500, () => {
                    let conPuntos = ganarMinijuego("ajedrez");
                    pintarEnhorabuena("ajedrez", "Conseguiste derrotar al rey del ajedrez. Se suman 50 puntos para tu casa por tu gran ingenio.", conPuntos);
                });
            }else{
                estado.textContent = "¡Muy bien! Prepárate para la siguiente ronda.";
                rondaAjedrez++;
                esperar(1500, () => {
                    mostrarRonda();
                });
            }
        }
    }else{
        // fallo: vuelve a la explicación
        turnoJugador = false;
        estado.textContent = "¡Oh, no! Esa pieza no tocaba. Vuelve a intentarlo desde el principio.";
        esperar(2500, () => {
            pintarAjedrezExplicacion();
        });
    }
}


/* ---------------------------------------------------------
   5. ARRANQUE: la web empieza en la alacena
   --------------------------------------------------------- */
pintarAlacena();
