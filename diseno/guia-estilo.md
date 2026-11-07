# Guía de estilo (sacada del prototipo de Figma)

Colores, tipografías y estilos que se ven en las imágenes de esta carpeta.

- **Colores**: medidos sobre los píxeles de las imágenes exportadas. Los colores
  de la interfaz (cajas, botones, tarjetas) son exactos. Los de las
  ilustraciones son los tonos planos que más se repiten.
- **Tipografías**: identificadas a ojo. Conviene confirmar el nombre exacto en
  Figma (panel derecho → *Text*) antes de usarlas.

---

## 1. Tamaño de pantalla

- Marcos de Figma de **1512 × 982 px** (formato escritorio, horizontal). Es el
  tamaño "MacBook Pro 14"" de Figma; las imágenes están exportadas a 2x.
- Cada pantalla ocupa toda la ventana: ilustración de fondo a pantalla completa
  y el contenido encima, centrado.

---

## 2. Colores

### 2.1 Colores de la interfaz (comunes a toda la web)

| Uso | Color | Dónde aparece |
|---|---|---|
| Naranja principal (botones y cajas destacadas) | `#F4A549` | Botones "Siguiente pregunta", "Jugar", "Comenzar a jugar", "Entrar en Hogwarts", "Volver al Gran Comedor"; caja "¿Cómo te llamas?"; sobre de la carta; líneas junto al sombrero |
| Azul noche muy oscuro (fondo de paneles) | `#0F141D` | Fondo del test del sombrero y caja de explicación/enhorabuena de los minijuegos |
| Azul pizarra oscuro (tarjetas) | `#1A2332` | Tarjetas de las casas, caja de "Enhorabuena, tu casa es...", marcadores del torneo, tarjetas de minijuegos, botones secundarios ("Descubre a qué casa perteneces", "Torneo de las 4 casas", "Jugar" del torneo, "Volver al recuento de puntos") |
| Azul grisáceo (tarjetas de respuesta) | `#3A4D66` | Las 4 respuestas de cada pregunta del test |
| Blanco | `#FFFFFF` | Textos sobre fondo oscuro, la carta de Hogwarts, estrellas del cielo |
| Negro / gris oscuro | `#000000` aprox. | Texto de la carta y de los botones naranjas |
| Cielo nocturno | `#080309` | Cielo con estrellas del Gran Comedor |

### 2.2 La alacena (pantallas de inicio)

| Uso | Color |
|---|---|
| Fondo más oscuro | `#000626` / `#02012D` |
| Azul marino | `#001848` / `#001D49` |
| Azul de paredes | `#003050` / `#003658` |
| Azul de la escalera | `#005574` / `#005679` |
| Azul claro (brillos de la escalera) | `#327C95` |

### 2.3 Gran Comedor — colores de cada versión

El Gran Comedor es la misma ilustración con cinco combinaciones de color: una
**neutra** (antes de tener casa y al inicio de la pantalla final) y una por
cada casa. Las pantallas de resultado del test, el Torneo de la Copa, la Sala
de los minijuegos y el final usan la versión de la casa que toca.

| Parte de la ilustración | Neutro | Gryffindor | Slytherin | Ravenclaw | Hufflepuff |
|---|---|---|---|---|---|
| Arcos y torres del fondo (oscuro) | `#460643` | `#5E0000` | `#001E0F` | `#001944` | `#2A1B10` |
| Paredes y columnas (principal) | `#FC9340` | `#F78A1E` | `#AF9A86` | `#B18772` | `#E1A56A` |
| Suelo | `#8A1F57` | `#BA4C13` | `#49493D` | `#4E210F` | `#975010` |
| Ventanas / acento fuerte | `#D73157` | `#A40402` | `#0A3225` | `#35434D` | `#392210` |
| Luz de las ventanas | `#FEAF77` | `#FFB93C` | `#578B5C` | `#0092D1` | `#FFDF3E` |
| Detalles claros | `#B9788C` | `#D4925D` | `#71685B` | `#C69B83` | `#EBAC66` |

Resumen de cada casa en una frase:
- **Neutro**: morado, rosa fucsia y naranja melocotón.
- **Gryffindor**: rojo granate, naranja y amarillo.
- **Slytherin**: verde muy oscuro, verde hoja y beige/gris piedra.
- **Ravenclaw**: azul marino, azul celeste y marrón claro.
- **Hufflepuff**: marrón chocolate, ocre/naranja y amarillo.

### 2.4 Minijuegos (fondos ilustrados)

Cada minijuego tiene su propia ilustración de fondo, que no cambia con la casa:
- **Aula de pociones**: azules turquesa y petróleo.
- **Llaves voladoras**: grises y malvas (sala de columnas de piedra).
- **Ajedrez mágico**: marrones, beige y dorado (las piezas iluminadas brillan en dorado/naranja).

---

## 3. Tipografías

En el diseño se usan tres familias (más una cuarta solo para la carta):

| Uso | Tipografía (aprox.) | Cómo se ve |
|---|---|---|
| Títulos de las pantallas de inicio, test y explicación de minijuegos ("BIENVENIDO PEQUEÑO MAGO", "¿CÓMO TE LLAMAS?", "LAS CUATRO CASAS DE HOGWARTS", preguntas del test, "SALA DE POCIONES", "EL AJEDREZ MÁGICO"...) | **Cinzel** (serif de estilo romano/clásico) | Todo en mayúsculas, trazo fino, blanco |
| Títulos del Gran Comedor ("ENHORABUENA, TU CASA ES...", "GRYFFINDOR!!", "TORNEO DE LA COPA DE LA CASA", "SALA DE LOS MINIJUEGOS", "LA CASA GANADORA DEL TORNEO ES...") y texto de casi todos los botones | Serif clásica de alto contraste, tipo **Times / Old Standard** | Mayúsculas en títulos; en botones, minúscula con la primera en mayúscula |
| Textos de párrafo, descripciones, respuestas del test, nombres de casa en tarjetas, números de los marcadores | **Inter** (sans serif) | Texto pequeño, blanco, sin adornos |
| Texto de la carta de Hogwarts ("Querida Paula, ...") | Serif antigua tipo libro (tipo **IM Fell**) | Negro sobre blanco, aspecto de carta antigua |

Notas:
- Los textos de "ENHORABUENA!! CONSEGUISTE..." de los minijuegos usan Cinzel en
  mayúsculas con la primera letra de cada frase más grande (versalitas).
- Dos botones usan Inter en vez de la serif: "Entrar en Hogwarts" y "Descubre a
  qué casa perteneces". Puede ser un despiste del diseño; conviene unificarlo.

### Jerarquía de tamaños (proporción vista en el diseño)

| Elemento | Tamaño relativo |
|---|---|
| Título de pantalla | Grande (el texto más grande de la pantalla, excepto los marcadores) |
| Números de los marcadores del torneo | Muy grande |
| Nombre de la casa en el resultado ("GRYFFINDOR!!") | Mediano-grande |
| Nombres en tarjetas ("AULA DE POCIONES", "GRIFFINDOR") | Mediano, mayúsculas |
| Párrafos y descripciones | Pequeño |
| Texto de botones | Pequeño |

---

## 4. Componentes

### Botones
- **Botón principal**: fondo naranja `#F4A549`, texto oscuro, rectángulo **sin
  esquinas redondeadas** y sin borde. Ej.: "Siguiente pregunta", "Comenzar a
  jugar", "Jugar" (minijuegos).
- **Botón secundario**: fondo azul oscuro `#1A2332`, texto blanco, mismas
  formas. Se usa sobre las ilustraciones del Gran Comedor. Ej.: "Torneo de las
  4 casas", "Volver al recuento de puntos", "Descubre a qué casa perteneces".
- Siempre centrados horizontalmente, debajo del contenido.

### Tarjetas
- Rectángulos sin esquinas redondeadas, sin borde ni sombra.
- **Tarjeta de casa** (Gran Comedor y marcadores): fondo `#1A2332`, escudo
  arriba, nombre en mayúsculas y descripción o número debajo. Van 4 en fila.
- **Tarjeta de respuesta** (test): fondo `#3A4D66`, imagen ilustrada arriba y
  texto corto abajo. Van 4 en fila, verticales (más altas que anchas).
- **Tarjeta de minijuego**: fondo `#1A2332`, imagen de la sala arriba, nombre,
  texto corto y botón naranja "Jugar". Van 3 en fila.

### Paneles / cajas de texto
- **Caja central** sobre la ilustración: fondo `#0F141D` (minijuegos) o
  `#1A2332` (resultado de la casa), con título, párrafo y botón.
- **Caja del nombre**: fondo naranja `#F4A549`, título oscuro y campo de texto
  con borde fino oscuro y fondo del mismo naranja.
- **Carta de Hogwarts**: rectángulo blanco vertical con el escudo de Hogwarts
  arriba, texto alineado a la izquierda y botón naranja abajo.

### Cabecera del test
- El sombrero seleccionador centrado entre **dos líneas horizontales finas
  naranjas**, encima de la pregunta.
---

## 5. Estilo general

- Ilustración **plana (flat)** con formas geométricas y sin degradados en
  alacena y Gran Comedor; las de los minijuegos y las imágenes de las
  respuestas son más detalladas.
- Ambiente **nocturno**: cielo negro con estrellas blancas pequeñas.
- Interfaz **oscura** (azules casi negros) con un único color de acento: el
  **naranja** `#F4A549`.
- Todo el contenido **centrado** en la pantalla.
- Sin esquinas redondeadas, sin sombras, sin bordes en tarjetas y botones.
- El color de la casa del niño "tiñe" el Gran Comedor a partir del resultado
  del test; la interfaz (tarjetas y botones) no cambia de color.

## 6. Imágenes que hacen falta

Para programar la web habrá que exportar de Figma:
- Ilustraciones de fondo: alacena, Gran Comedor (5 versiones de color), aula de
  pociones, sala de las llaves, sala del ajedrez.
- Escudos: Hogwarts, Gryffindor, Slytherin, Ravenclaw, Hufflepuff.
- Sombrero seleccionador y las 16 imágenes de respuestas del test.
- Icono del sobre.
- Ingredientes de pociones (6), llaves normales y llave vieja, piezas de ajedrez
  (normales e iluminadas), caldero.
- Miniaturas de las 3 salas de minijuegos.