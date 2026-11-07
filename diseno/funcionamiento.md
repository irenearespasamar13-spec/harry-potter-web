# Funcionamiento de la web (según el prototipo de Figma)

Transcripción de las anotaciones (textos explicativos y flechas) del prototipo,
organizadas por pantalla y en el orden en que las recorre el niño.
Las imágenes originales están en esta misma carpeta.

> Las anotaciones se copian tal cual aparecen en Figma. Los textos que se ven
> dentro de cada pantalla (títulos, botones, descripciones) se recogen debajo
> de cada una como "Contenido de la pantalla".

---

## 1. Inicio — `1-inicio.png`

Flujo: **Alacena → ¿Cómo te llamas? → Carta de Hogwarts → Gran Comedor (las cuatro casas)**.
Las flechas unen cada pantalla con la siguiente, de izquierda a derecha.

### 1.1 La alacena bajo las escaleras

> El niño al meterse en la web aparece en la alacena bajo las escaleras. Le
> llega una carta, y debe hacerle click para abrirla

Contenido de la pantalla:
- Título: **BIENVENIDO PEQUEÑO MAGO**
- Icono de sobre (naranja) con el texto **TE HA LLEGADO UNA CARTA!** → se hace click para abrirla.

➡ Flecha hacia la pantalla 1.2.

### 1.2 ¿Cómo te llamas?

> Antes de leer la carta debe introducir su nombre en esta campo de
> formulario. Para más tarde, poder personalizar su carta.

Contenido de la pantalla:
- Caja naranja con el título **¿CÓMO TE LLAMAS?**
- Campo de texto con el texto de ejemplo `Introduce tu nombre...`

➡ Flecha hacia la pantalla 1.3.

### 1.3 La carta de Hogwarts

> Al tener el nombre del niño guardado en la memora, podemos hacer real que le
> llegue una carta de Hogwarts con su propio nombre.

Contenido de la pantalla (carta blanca con el escudo de Hogwarts):

> Querida **Paula**,
>
> Tenemos el placer de informarle de que ha sido admitida en el colegio
> Hogwarts de magia y hechicería.
>
> Aquí encontrará una lista de todos los libros y equipamiento necesarios.
>
> Atentamente,
> Minerva McGonagall.

- "Paula" es un ejemplo: aquí va el nombre que escribió el niño en 1.2.
- Botón: **Entrar en Hogwarts**

➡ Flecha hacia la pantalla 1.4.

### 1.4 Gran Comedor — Las cuatro casas de Hogwarts

> Al entrar en Hogwarts aparece en el Gran Comedor, pero todavía no pertenece
> a ninguna casa, para ello, tendrá que informarse sobre ellas y hacer el test
> del sombrero seleccionador.

Contenido de la pantalla (Gran Comedor con colores neutros: morado, rosa y naranja):
- Título: **LAS CUATRO CASAS DE HOGWARTS**
- Texto: "En la escuela existen 4 casas, Griffindor, Ravenclaw, Slitherin y
  Hufflepuff. Tras recibir tu carta, el sombrero seleccionador te asignará una
  casa, y tú tendrás que superar pruebas para ganar la copa de la casa."
- Cuatro tarjetas, cada una con escudo, nombre y descripción:
  - **GRIFFINDOR**: Es la casa de los valientes, atrevidos y decididos. Sus
    miembros destacan por su coraje y su nobleza, incluso cuando tienen miedo.
  - **RAVENCLAW**: Es la casa de los inteligentes, creativos y curiosos. Sus
    miembros destacan por su sabiduría y originalidad. Siempre buscan aprender
    cosas nuevas.
  - **SLITHERIN**: Es la casa de los ambiciosos, astutos y determinados. Sus
    miembros son ingeniosos y estratégicos. Valoran el liderazgo y la
    superación personal.
  - **HUFLEPUFF**: Es la casa de los leales y honestos. Sus miembros valoran la
    amistad y la justicia. Son personas pacientes y comprometidas, dispuestos a
    ayudar.
- Botón: **Descubre a qué casa perteneces** → lleva al test (pantalla 2).

---

## 2. Test del sombrero seleccionador — `2-test-seleccion-casa.png`

### 2.1 Las 4 preguntas

> Debe responder a 4 preguntas para saber a qué casa pertenece según los
> valores que conteste.

Las flechas unen las cuatro preguntas en orden (1 → 2 → 3 → 4). Todas tienen
el sombrero seleccionador arriba, entre dos líneas naranjas, cuatro tarjetas
de respuesta con imagen y el botón **Siguiente pregunta**.

**Pregunta 1 — SI TUVIERAS UN SUPERPODER, ¿CUÁL ELEGIRÍAS?**
- (varita) Ser súper fuerte y no tenerle miedo a nada.
- (libro) Poder leer la mente y saber la respuesta a cualquier pregunta.
- (giratiempo) Curar a los enfermos y conseguir que nadie se sienta solo.
- (capa) Volverte invisible para hacer travesuras y salirte con la tuya.

**Pregunta 2 — ¿QUÉ ES LO MÁS IMPORTANTE PARA SER UN BUEN AMIGO?**
- (apretón de manos) No dejarlo nunca solo y compartirlo todo con él.
- (bocadillo con corazón) Defenderlo si alguien intenta molestarle.
- (escudo con león) Guardar sus secretos y ayudarle a conseguir lo que quiere.
- (regalo) Ayudarle a hacer deberes o enseñarle cosas divertidas.

**Pregunta 3 — TE DAN A ELEGIR UNA MASCOTA PARA LLEVAR AL COLE ¿CUÁL ELEGIRÍAS?**
- (búho) Un búho listo que te traiga libros e información.
- (gato negro) Un gato misterioso y astuto que solo te obedezca a ti.
- (fénix) Un ave fénix valiente que te proteja.
- (tejón) Cualquier animal fiel que siempre quiera jugar contigo.

**Pregunta 4 — ¿CÓMO PREFIERES GANAR EN UN JUEGO?**
- (copa) Jugando con muchas ganas y siendo el más valiente.
- (estrella) Jugando en equipo, para que todos se diviertan.
- (snitch) Pensando en la mejor estrategia antes de jugar.
- (dados) Haciendo lo que sea necesario para ganar.

> Nota: el prototipo no indica qué respuesta corresponde a cada casa ni cómo
> se resuelve un empate. Hay que decidirlo antes de programar.

### 2.2 Resultado: "Enhorabuena, tu casa es..."

> Una vez seleccionado para una casa volverá al Gran Comedor, que esta vez
> estará personalizado con los colores de la casa seleccionada, e información
> sobre ella.

Desde la pregunta 4 salen cuatro flechas, una a cada posible resultado. Las
cuatro pantallas son iguales salvo los colores del Gran Comedor, el escudo y
el texto:

- Título: **ENHORABUENA, TU CASA ES...**
- Botón (en todas): **Torneo de las 4 casas** → lleva a la pantalla 3.

**GRYFFINDOR!!** (Gran Comedor rojo y naranja)
> ¡Tu lugar está en Gryffindor! Eres una persona valiente, decidida y con un
> gran sentido de la justicia. No tienes miedo de enfrentarte a nuevos desafíos
> ni de defender aquello en lo que crees, incluso cuando las cosas se ponen
> difíciles. Tu coraje no significa que nunca tengas miedo, sino que sabes
> encontrar la fuerza para seguir adelante a pesar de él. Valoras la amistad,
> la lealtad y hacer lo correcto. Tu espíritu aventurero y tu determinación te
> convierten en alguien capaz de hacer grandes cosas. ¡La verdadera valentía
> está en tu interior!

**SLITHERIN!!** (Gran Comedor verde y beige)
> ¡Bienvenido a Slytherin! Eres una persona ambiciosa, astuta y llena de
> determinación. Sabes lo que quieres y no te rindes fácilmente hasta
> conseguirlo. Destacas por tu inteligencia, tu capacidad para encontrar
> soluciones y tu habilidad para adaptarte a cualquier situación. Te gusta
> tener el control de tus decisiones y siempre buscas la manera de alcanzar tus
> objetivos. Tu ingenio y tu confianza en ti mismo son tus mayores fortalezas.
> Recuerda que tener grandes ambiciones es el primer paso para conseguir
> grandes cosas.

**RAVENCLAW!!** (Gran Comedor azul y marrón claro)
> ¡Has sido seleccionado para Ravenclaw! Eres una persona curiosa, inteligente
> y con una imaginación extraordinaria. Te encanta aprender, descubrir cosas
> nuevas y explorar ideas que otras personas quizá nunca se plantearían. Tu
> mente siempre está en movimiento y disfrutas encontrando respuestas a
> preguntas difíciles. Valoras la creatividad, la originalidad y el
> conocimiento, pero sabes que ser inteligente también significa tener una
> mente abierta y estar dispuesto a cambiar de opinión. Tu mayor virtud es que
> nunca dejas de cuestionar el mundo que te rodea.

**HUFFLEPUFF!!** (Gran Comedor amarillo y marrón)
> ¡Tu casa es Hufflepuff! Eres una persona amable, leal y de gran corazón. Para
> ti, la amistad, la confianza y el respeto son fundamentales. Siempre estás
> dispuesto a ayudar a los demás y sabes que los pequeños gestos pueden marcar
> una gran diferencia. Eres trabajador, paciente y constante, y no necesitas
> destacar por encima de los demás para demostrar todo lo que vales. Tu mayor
> fortaleza está en tu capacidad para cuidar de quienes te rodean y mantenerte
> fiel a tus principios. Recuerda que la bondad también es una forma de
> valentía.

---

## 3. Torneo de la Copa de la Casa — `3-copa-de-la-casa.png`

> Ya podrá pasar al torneo de las casas, donde cada casa comienza con el
> contador a 0, según el niño vaya superando pruebas, se le sumarán 50 puntos
> por cada prueba completada a su casa. Las demás casas subirán automáticamente
> 5 puntos por cada minuto que pase en la web.

La pantalla aparece con los colores de la casa del niño (hay una versión por
casa: Gryffindor, Slytherin, Ravenclaw, Hufflepuff).

Contenido de la pantalla:
- Título: **TORNEO DE LA COPA DE LA CASA**
- Texto: "Las 4 casas competirán en diferentes pruebas y ganarán puntos cuando
  ganen. Tu misión es conseguir puntos en diferentes minijuegos para ayudar a
  tu casa a ganar la copa."
- Cuatro marcadores (escudo + nombre + puntos, empiezan en **0**):
  GRIFFINDOR, RAVENCLAW, SLITHERIN, HUFLEPUFF.
- Botón: **Jugar** → lleva a la sala de los minijuegos (pantalla 4).

Reglas de puntos:
- Casa del niño: **+50 puntos** por cada prueba superada.
- Las otras tres casas: **+5 puntos cada minuto** que pase en la web, solas.

---

## 4. Sala de los minijuegos — `4-sala-minijuegos.png`

> Luego pasará a la sala de los minijuegos, donde tendrá 3 para elegir

También aparece con los colores de la casa del niño (una versión por casa).

Contenido de la pantalla:
- Título: **SALA DE LOS MINIJUEGOS**
- Tres tarjetas (imagen + nombre + texto + botón **Jugar**):
  - **AULA DE POCIONES** — "En esta prueba tendrás que..."
  - **LLAVES VOLADORAS** — "En esta prueba tendrás que..."
  - **AJEDREZ MÁGICO** — "En esta prueba tendrás que..."
  (El texto de las tarjetas está sin terminar en el prototipo.)
- Botón inferior: **Volver al recuento de puntos** → vuelve a la pantalla 3.

---

## 5. Minijuegos — `5-minijuegos.png`

Cada minijuego tiene tres pantallas en columna, unidas por flechas hacia abajo:
**explicación → juego → enhorabuena**.

> Antes de comenzar cada minijuego saldrá una explicación del mismo

> Cada vez que acabe una prueba, volverá al recuento de puntos para ver como
> van subiendo los contadores.

### 5.1 Aula de pociones

**Explicación** — Título: **SALA DE POCIONES**
> En esta prueba deberás crear una poción con el profesor Snape. Pero cuidado,
> la poción solo funcionará si agregas los ingredientes en el orden correcto,
> si no lo haces, explotará.
>
> Ten cuidado y memoriza bien el orden de los ingredientes antes de comenzar a
> jugar. El orden es el siguiente:

Ingredientes en orden: 1. Hojas de mandrágora · 2. Ojos de araña · 3. Pelo de
unicornio · 4. Baba de sapo · 5. Escamas de dragón · 6. Cola de escorpión.

Botón: **Comenzar a jugar**

**Juego** (caldero en el centro, ingredientes alrededor):
> Juego de pociones: en este juego el niño deberá crear una poción arrastrando
> al caldero los ingredientes en el orden correcto, si no lo hace, volverá a la
> página de explicación del minijuego

**Enhorabuena**:
> ENHORABUENA!! CONSEGUISTE HACER LA POCIÓN PERFECTA. EL PROFESOR SNAPE TE DA
> 50 PUNTOS PARA TU CASA.

Botón: **Volver al Gran Comedor**

### 5.2 Las llaves voladoras

**Explicación** — Título: **LAS LLAVES VOLADORAS**
> En esta prueba deberás atrapar la llave vieja del castillo para poder abrir
> la puerta y continuar al siguiente minijuego.
>
> Pero no será tan fácil, en cuanto comiences el juego verás un montón de
> llaves volando por el espacio, intentando distraerte para que no veas la
> llave vieja. Deberás tener la vista de un verdadero buscador de quidditch y
> atrapar la llave rápido.

Imágenes de ejemplo: "Llaves normales." y "Llave vieja del castillo."
Botón: **Comenzar a jugar**

**Juego** (muchas llaves con alas por la sala):
> Juego de las llaves: en este juego, aparecerán muchas llaves volando por el
> espacio, y una será diferente al resto, más antigua, el niño debe hacer click
> en la llave más antigua para superar el reto.

**Enhorabuena**:
> ENHORABUENA!! CONSEGUISTE ENCONTRAR LA LLAVE CORRECTA. SE SUMAN 50 PUNTOS
> PARA TU CASA.

Botón: **Volver al Gran Comedor**

### 5.3 El ajedrez mágico

**Explicación** — Título: **EL AJEDREZ MÁGICO**
> En esta prueba deberás derrotar al rey del ajedrez. ¿Cómo?, las piezas de
> ajedrez se iluminarán de forma aleatoria en 8 rondas diferentes, en cada
> ronda se sumará una pieza nueva y se aumentará la dificultad.
>
> Tu objetivo es hacer click en las piezas de ajedrez que se hayan iluminado en
> esa ronda, y en el mismo orden con el que se han ido iluminando. Si llegas a
> la ronda donde se iluminan las 8 piezas y consigues acordarte del orden
> correcto, habrás derrotado al rey.

Botón: **Comenzar a jugar**

**Juego** (8 piezas: 4 blancas y 4 negras; las iluminadas brillan en dorado):
> Ajedrez mágico: un juego de memoria donde se irán iluminando 1 pieza más por
> cada ronda que pase, habrá 8 rondas. Se iluminarán de manera aleatoria, y el
> niño cuando acaben de iluminarse las piezas, deberá hacer click en las que se
> han iluminado y en el orden correcto.

**Enhorabuena**:
> ENHORABUENA!! CONSEGUISTE DERROTAR AL REY DEL AJEDREZ. SE SUMAN 50 PUNTOS
> PARA TU CASA POR TU GRAN INGENIO.

Botón: **Volver al Gran Comedor**

---

## 6. Final — `6-final.png`

> Cuando acabe los tres minijuegos y se sepa el resultado de quien ha ganado
> el torneo por tener más puntos, saldrá el gran comedor sin ningun color de
> casas, y en cuestón de 3 segundos, el color de la ilustración cambiará a la
> casa ganadora

Contenido:
1. Gran Comedor con colores neutros (morado, rosa y naranja) y el texto
   **LA CASA GANADORA DEL TORNEO ES...**
2. A los 3 segundos, el Gran Comedor cambia a los colores de la casa ganadora
   y aparece su nombre (en el ejemplo: **HUFFLEPUFF!!**).

---

## Mapa del recorrido

```
Alacena (carta) → ¿Cómo te llamas? → Carta con su nombre → Gran Comedor (4 casas)
   → Test: pregunta 1 → 2 → 3 → 4 → "Enhorabuena, tu casa es..." (colores de su casa)
   → Torneo de la Copa (marcadores) ⇄ Sala de los minijuegos
        → Minijuego: explicación → juego → enhorabuena (+50) → vuelve al Torneo
   → Tras los 3 minijuegos: Final (Gran Comedor neutro → 3 s → colores de la casa ganadora)
```

## Dudas y detalles a revisar en el diseño

- **Nombres de las casas**: aparecen escritos de dos formas. Correcto:
  Gryffindor, Slytherin, Hufflepuff, Ravenclaw. En el Gran Comedor y en los
  marcadores pone "Griffindor", "Slitherin" y "Huflepuff".
- **Botón tras el minijuego**: dice "Volver al Gran Comedor", pero la anotación
  dice que vuelve al recuento de puntos (Torneo de la Copa).
- **Test**: falta decidir qué respuesta suma para qué casa y qué pasa si hay
  empate.
- **Carta**: el texto está en femenino ("admitida") con "Paula" de ejemplo.
  Hay que decidir si el texto cambia según el nombre o se deja neutro.
- **Pociones**: si falla, vuelve a la explicación. En llaves y ajedrez no se
  dice qué pasa si falla.
- **Sala de los minijuegos**: el texto de las tarjetas ("En esta prueba tendrás
  que...") está sin terminar.
