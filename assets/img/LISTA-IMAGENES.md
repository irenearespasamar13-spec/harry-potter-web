# Imágenes de la web

Todas van en esta carpeta: `assets/img/`.
El código ya las busca con estos nombres. Si subes una con otra extensión
(por ejemplo `.jpg` en vez de `.png`), avísame y cambio la ruta.

**Cómo subirlas:** en GitHub, entra en la carpeta `assets/img` de la rama
`claude/nice-wozniak-ubiq3z` → *Add file* → *Upload files* → arrastra las
imágenes → *Commit changes*. Si las subes a `main`, avísame y las traigo.

Para iconos, escudos, piezas, llaves e ingredientes usa **PNG con fondo
transparente**. Para los fondos, JPG de unos 1920 px de ancho es suficiente:
pesarán menos que los de 6300 px y la web cargará más rápido en el móvil.

## ✅ Ya están

| Archivo | Dónde se usa |
|---|---|
| `ilustracion-inicio-02.jpg` | Fondo de la alacena (pantallas 1.1, 1.2, 1.3) |
| `icono-carta-03.png` | Sobre de "¡Te ha llegado una carta!" |
| `icono-howgarts-04.png` | Escudo de Hogwarts en la carta |
| `fondo-gran-comedor.jpg` | Gran Comedor **neutro** (las cuatro casas y el final) |
| `sombrero-seleccionador.png` | Cabecera del test |
| `escudo-gryffindor.png`, `escudo-ravenclaw.avif`, `escudo-slitherin.png`, `escudo-hufflepuff.webp` | Tarjetas de casas, resultado y marcador |
| `ilustracion-clase-pociones-04.jpg` | Fondo del aula de pociones y su tarjeta en la sala |
| `ajedrez-completo.png` | Explicación del ajedrez y su tarjeta en la sala (la imagen original con piezas) |
| `fondo-ajedrez.jpg` | Fondo del juego del ajedrez (sin piezas; las zonas borrosas quedan tapadas por las piezas) |
| `pieza-torre-blanca.png`, `pieza-caballo-blanco.png`, `pieza-alfil-blanco.png`, `pieza-rey-blanco.png`, `pieza-rey-negro.png`, `pieza-alfil-negro.png`, `pieza-caballo-negro.png`, `pieza-torre-negra.png` | Las 8 piezas del juego, recortadas de `ajedrez-completo.png`. El brillo de las piezas iluminadas se hace con CSS |

## ⬜ Faltan

### Gran Comedor de cada casa (fondos)
| Archivo | Pantallas |
|---|---|
| `fondo-gran-comedor-gryffindor.jpg` | Resultado, Torneo, Sala y Final si gana Gryffindor |
| `fondo-gran-comedor-slytherin.jpg` | Ídem Slytherin |
| `fondo-gran-comedor-ravenclaw.jpg` | Ídem Ravenclaw |
| `fondo-gran-comedor-hufflepuff.jpg` | Ídem Hufflepuff |

### Test del sombrero (16 imágenes de respuestas)
| Pregunta | Archivos (en el orden de las tarjetas) |
|---|---|
| 1 · Superpoder | `respuesta-varita.png`, `respuesta-libro.png`, `respuesta-giratiempo.png`, `respuesta-capa.png` |
| 2 · Buen amigo | `respuesta-manos.png`, `respuesta-corazon.png`, `respuesta-escudo.png`, `respuesta-regalo.png` |
| 3 · Mascota | `respuesta-buho.png`, `respuesta-gato.png`, `respuesta-fenix.png`, `respuesta-tejon.png` |
| 4 · Ganar un juego | `respuesta-copa.png`, `respuesta-estrella.png`, `respuesta-snitch.png`, `respuesta-dados.png` |

### Llaves voladoras
| Archivo | Uso |
|---|---|
| `fondo-llaves.jpg` | Fondo de la sala de columnas y tarjeta en la sala de minijuegos |
| `llave-normal.png` | Las llaves que distraen |
| `llave-vieja.png` | La llave que hay que atrapar |

### Pociones
| Archivo | Uso |
|---|---|
| `caldero.png` | Caldero del juego |
| `ingrediente-mandragora.png` | 1. Hojas de mandrágora |
| `ingrediente-ojos-arana.png` | 2. Ojos de araña |
| `ingrediente-pelo-unicornio.png` | 3. Pelo de unicornio |
| `ingrediente-baba-sapo.png` | 4. Baba de sapo |
| `ingrediente-escamas-dragon.png` | 5. Escamas de dragón |
| `ingrediente-cola-escorpion.png` | 6. Cola de escorpión |
