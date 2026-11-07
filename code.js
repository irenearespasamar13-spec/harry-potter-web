// ==========================================================================
// 1. DECLARACIÓN DE VARIABLES Y SELECCIÓN DE ELEMENTOS DEL DOM
// Mantengo tus nombres exactos de archivo ('code.js') e identificadores
// ==========================================================================

// ESCENA 1: Alacena y Carta
const escenaAlacena = document.getElementById('escena-alacena');
const bloqueTitulo = document.getElementById('bloque-titulo');
const btnCarta = document.getElementById('btn-carta');
const modalFormulario = document.getElementById('modal-formulario');
const formNombre = document.getElementById('form-nombre');
const inputNombre = document.getElementById('input-nombre');
const modalCartaAbierta = document.getElementById('modal-carta-abierta');
const saludoCarta = document.getElementById('saludo-carta');
const btnEntrarHogwarts = document.getElementById('btn-entrar-hogwarts');

// ESCENA 2: Gran Comedor (Presentación)
const escenaGranComedor = document.getElementById('escena-gran-comedor');
const btnIrTest = document.getElementById('btn-ir-test');

// ESCENA 3: Test del Sombrero Seleccionador
const escenaTestSombrero = document.getElementById('escena-test-sombrero');
const textoPregunta = document.getElementById('texto-pregunta');
const contenedorRespuestas = document.getElementById('contenedor-respuestas');
const btnSiguientePregunta = document.getElementById('btn-siguiente-pregunta');

// ESCENA 4: Resultado del Test de Casas
const escenaResultadoCasa = document.getElementById('escena-resultado-casa');
const imagenEscudoResultado = document.getElementById('imagen-escudo-resultado');
const nombreCasaResultado = document.getElementById('nombre-casa-resultado');
const descripcionCasaResultado = document.getElementById('descripcion-casa-resultado');
const btnIrGranComedorFinal = document.getElementById('btn-ir-gran-comedor-final');

// Variables globales ('let') de estado
let nombreMago = "";
let casaAsignada = "";
let indicePreguntaActual = 0;
let opcionSeleccionadaCasa = "";

// Objeto acumulador de puntos de las casas
let contadorPuntosCasas = {
  gryffindor: 0,
  ravenclaw: 0,
  hufflepuff: 0,
  slytherin: 0
};

// OBJETO CON INFORMACIÓN DE LAS 4 CASAS PARA MOSTRAR EN LA PANTALLA FINAL
const informacionCasas = {
  gryffindor: {
    nombre: "GRYFFINDOR!!",
    imagen: "assets/img/escudo-gryffindor.png", // Asegúrate de que esta ruta existe en tus carpetas
    descripcion: "¡Enhorabuena, has entrado en Gryffindor! Esta es la casa de los valientes, los audaces y los que nunca se rinden ante los desafíos. En Gryffindor destacan aquellos que tienen un corazón de león, listos para defender a sus amigos, hacer lo correcto incluso cuando da miedo y lanzarse a grandes aventuras. Tu fuerza interior, tu entusiasmo y tu valor para superar cualquier obstáculo demuestran que llevas dentro la auténtica magia de un verdadero Gryffindor."
  },
  ravenclaw: {
    nombre: "RAVENCLAW!!",
    imagen: "assets/img/escudo-ravenclaw.png",
    descripcion: "¡Enhorabuena, has entrado en Ravenclaw! Esta es la casa de la sabiduría, el ingenio y la creatividad sin límites. En Ravenclaw destacan aquellos que aman aprender cosas nuevas, resolver grandes misterios y usar su imaginación para encontrar soluciones brillantes. Tu curiosidad inagotable, tu inteligencia y tu mente abierta demuestran que llevas dentro la auténtica magia de un verdadero Ravenclaw."
  },
  hufflepuff: {
    nombre: "HUFLEPUFF!!",
    imagen: "assets/img/escudo-hufflepuff.png",
    descripcion: "¡Enhorabuena, has entrado en Hufflepuff! Esta es la casa de los leales, los justos y los trabajadores incansables. En Hufflepuff destacan aquellos que valoran la amistad sincera por encima de todo, ayudan a quienes lo necesitan y nunca le dan la espalda a un compañero. Tu gran corazón, tu amabilidad y tu firme sentido de la justicia demuestran que llevas dentro la auténtica magia de un verdadero Hufflepuff."
  },
  slytherin: {
    nombre: "SLITHERIN!!",
    imagen: "assets/img/escudo-slytherin.png",
    descripcion: "¡Enhorabuena, has entrado en Slytherin! Esta es la casa de los astutos, los ambiciosos y los líderes natos. En Slytherin destacan aquellos que tienen metas muy claras, gran destreza para superar retos difíciles y la capacidad de conseguir todo lo que se proponen con inteligencia. Tu astucia, tu determinación y tu afán de superación demuestran que llevas dentro la auténtica magia de un verdadero Slytherin."
  }
};

// BANCO DE PREGUNTAS DEL TEST
const preguntasTest = [
  {
    pregunta: "SI TUVIERAS UN SUPERPODER, ¿CUÁL ELEGIRÍAS?",
    opciones: [
      {
        texto: "Ser súper fuerte y no tenerle miedo a nada.",
        casa: "gryffindor",
        imagen: "assets/img/opcion-1.png"
      },
      {
        texto: "Poder leer la mente y saber la respuesta a cualquier pregunta.",
        casa: "ravenclaw",
        imagen: "assets/img/opcion-2.png"
      },
      {
        texto: "Curar a los enfermos y conseguir que nadie se sienta solo.",
        casa: "hufflepuff",
        imagen: "assets/img/opcion-3.png"
      },
      {
        texto: "Volverte invisible para hacer travesuras y salirte con la tuya.",
        casa: "slytherin",
        imagen: "assets/img/opcion-4.png"
      }
    ]
  },
  {
    pregunta: "¿QUÉ OBJETO MÁGICO PREFERIRÍAS LLEVAR EN TU MOCHILA?",
    opciones: [
      {
        texto: "Una espada dorada capaz de vencer a cualquier criatura.",
        casa: "gryffindor",
        imagen: "assets/img/espada.png"
      },
      {
        texto: "Un libro de hechizos antiguos con todos los secretos del universo.",
        casa: "ravenclaw",
        imagen: "assets/img/libro.png"
      },
      {
        texto: "Una bolsa mágica de semillas que curan la naturaleza.",
        casa: "hufflepuff",
        imagen: "assets/img/semillas.png"
      },
      {
        texto: "Una varita de sauce oscuro que concede todos tus deseos.",
        casa: "slytherin",
        imagen: "assets/img/varita.png"
      }
    ]
  },
  {
    pregunta: "¿CÓMO TE GUSTARÍA QUE TE RECORDARAN TUS AMIGOS?",
    opciones: [
      {
        texto: "Como alguien valiente que siempre defendió a los demás.",
        casa: "gryffindor",
        imagen: "assets/img/valiente.png"
      },
      {
        texto: "Como el estudiante más inteligente y brillante de la clase.",
        casa: "ravenclaw",
        imagen: "assets/img/inteligente.png"
      },
      {
        texto: "Como el amigo más leal, divertido y amable del grupo.",
        casa: "hufflepuff",
        imagen: "assets/img/amigo.png"
      },
      {
        texto: "Como un gran mago poderoso que logró todo lo que se propuso.",
        casa: "slytherin",
        imagen: "assets/img/poderoso.png"
      }
    ]
  }
];

// ==========================================================================
// 2. FUNCIONES DE LÓGICA E INTERACCIÓN CON EL DOM
// ==========================================================================

function abrirFormularioNombre() {
  bloqueTitulo.classList.add('oculto');
  btnCarta.classList.add('oculto');
  modalFormulario.classList.remove('oculto');
  inputNombre.focus();
}

function guardarNombreYContinuar(evento) {
  evento.preventDefault();
  const textoIngresado = inputNombre.value.trim();
  
  if (textoIngresado !== "") {
    nombreMago = textoIngresado;
    console.log("Nombre del alumno registrado correctamente: " + nombreMago);
    modalFormulario.classList.add('oculto');
    
    let saludoGenero = "Querido/a";
    const ultimaLetra = nombreMago.charAt(nombreMago.length - 1).toLowerCase();
    
    if (ultimaLetra === 'a') {
      saludoGenero = "Querida";
    } else if (ultimaLetra === 'o' || ultimaLetra === 'e' || ultimaLetra === 'r') {
      saludoGenero = "Querido";
    }

    saludoCarta.textContent = saludoGenero + " " + nombreMago + ",";
    modalCartaAbierta.classList.remove('oculto');
  } else {
    alert("Por favor, introduce tu nombre para recibir la carta de Hogwarts.");
  }
}

function irAlGranComedor() {
  escenaAlacena.classList.add('oculto');
  escenaGranComedor.classList.remove('oculto');
}

function iniciarTestSombrero() {
  escenaGranComedor.classList.add('oculto');
  escenaTestSombrero.classList.remove('oculto');
  
  indicePreguntaActual = 0;
  contadorPuntosCasas = { gryffindor: 0, ravenclaw: 0, hufflepuff: 0, slytherin: 0 };
  
  cargarPreguntaEnPantalla();
}

function cargarPreguntaEnPantalla() {
  opcionSeleccionadaCasa = "";
  const datosPregunta = preguntasTest[indicePreguntaActual];
  textoPregunta.textContent = datosPregunta.pregunta;
  contenedorRespuestas.innerHTML = "";
  
  for (let i = 0; i < datosPregunta.opciones.length; i++) {
    const opcion = datosPregunta.opciones[i];
    const botonOpcion = document.createElement('button');
    botonOpcion.type = "button";
    botonOpcion.className = "tarjeta-opcion";
    botonOpcion.setAttribute('data-casa', opcion.casa);
    
    botonOpcion.innerHTML = `
      <div class="caja-imagen-opcion">
        <img src="${opcion.imagen}" alt="Opción ${i + 1}" class="imagen-opcion">
      </div>
      <p class="texto-opcion">${opcion.texto}</p>
    `;
    
    botonOpcion.addEventListener('click', function() {
      seleccionarOpcionRespuesta(botonOpcion, opcion.casa);
    });
    
    contenedorRespuestas.appendChild(botonOpcion);
  }
}

function seleccionarOpcionRespuesta(elementoBoton, nombreCasa) {
  const todasLasOpciones = document.querySelectorAll('.tarjeta-opcion');
  for (let i = 0; i < todasLasOpciones.length; i++) {
    todasLasOpciones[i].classList.remove('tarjeta-seleccionada');
  }
  elementoBoton.classList.add('tarjeta-seleccionada');
  opcionSeleccionadaCasa = nombreCasa;
}

function procesarSiguientePregunta() {
  if (opcionSeleccionadaCasa === "") {
    alert("¡Por favor, elige una opción antes de continuar!");
    return;
  }
  
  contadorPuntosCasas[opcionSeleccionadaCasa]++;
  indicePreguntaActual++;
  
  if (indicePreguntaActual < preguntasTest.length) {
    cargarPreguntaEnPantalla();
  } else {
    determinarCasaGanadora();
  }
}

/**
 * FUNCIÓN CORREGIDA: Calcula la casa con más puntos y pasa DIRECTAMENTE
 * a la Escena 4 (Resultado) sin mostrar mensajes alert() flotantes.
 */
function determinarCasaGanadora() {
  let casaGanadora = "gryffindor";
  let maxPuntos = -1;
  
  // Recorremos el objeto acumulador de puntos
  for (let casa in contadorPuntosCasas) {
    if (contadorPuntosCasas[casa] > maxPuntos) {
      maxPuntos = contadorPuntosCasas[casa];
      casaGanadora = casa;
    }
  }
  
  // Guardamos la casa en la variable global
  casaAsignada = casaGanadora;
  console.log("¡El Sombrero Seleccionador ha hablado! Casa ganadora: " + casaAsignada);
  
  // Extraemos la información de la casa ganadora del objeto
  const datosCasa = informacionCasas[casaAsignada];
  
  // MANIPULACIÓN DEL DOM: Inyectamos los datos en la pantalla de resultado
  nombreCasaResultado.textContent = datosCasa.nombre;
  descripcionCasaResultado.textContent = datosCasa.descripcion;
  imagenEscudoResultado.src = datosCasa.imagen;
  imagenEscudoResultado.alt = "Escudo de " + casaAsignada;
  
  // Ocultamos la escena del test
  escenaTestSombrero.classList.add('oculto');
  
  // Mostramos la escena del resultado de la casa quitando 'oculto'
  escenaResultadoCasa.classList.remove('oculto');
}

/**
 * Se ejecuta al pulsar 'Ir al Gran Comedor' desde la pantalla final de resultado.
 */
function finalizarResultadoEIrAlGranComedor() {
  console.log("El niño " + nombreMago + " avanza al Gran Comedor con " + casaAsignada);
  
  // Ocultamos la pantalla de resultado
  escenaResultadoCasa.classList.add('oculto');
  
  // Mostramos el Gran Comedor
  escenaGranComedor.classList.remove('oculto');
}

// ==========================================================================
// 3. REGISTRO DE EVENTOS (EVENT LISTENERS)
// ==========================================================================

btnCarta.addEventListener('click', abrirFormularioNombre);
formNombre.addEventListener('submit', guardarNombreYContinuar);
btnEntrarHogwarts.addEventListener('click', irAlGranComedor);
btnIrTest.addEventListener('click', iniciarTestSombrero);
btnSiguientePregunta.addEventListener('click', procesarSiguientePregunta);
btnIrGranComedorFinal.addEventListener('click', finalizarResultadoEIrAlGranComedor);