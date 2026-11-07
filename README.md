# Hogwarts: tu propia aventura

Web interactiva basada en *Harry Potter y la piedra filosofal* para niños de 8 a 12 años que acaban de leer el libro. El niño recibe su carta de Hogwarts, el sombrero seleccionador le asigna una casa y supera tres pruebas para ayudar a su casa a ganar la Copa.

Proyecto de Gráfica Multimedia (Producción) · ESD Madrid.

## Cómo abrirla

Abre `index.html` en el navegador (Chrome, Firefox, Safari o Edge). No necesita instalar nada.

## El recorrido

1. **La alacena**: llega una carta. El niño escribe su nombre y la carta de Hogwarts aparece con él.
2. **El Gran Comedor**: presenta las cuatro casas.
3. **El sombrero seleccionador**: 4 preguntas. Gana la casa con más respuestas; si hay empate, la de la última respuesta.
4. **Torneo de la Copa**: marcador con los puntos de las 4 casas. Cada prueba superada da 50 puntos a la casa del niño (solo la primera vez); las otras casas también suben, pero la del niño siempre gana.
5. **Sala de los minijuegos**:
   - **Aula de pociones**: arrastrar 6 ingredientes al caldero en el orden correcto. Si te equivocas, explota.
   - **Llaves voladoras**: atrapar la llave vieja entre las que vuelan.
   - **Ajedrez mágico**: juego de memoria de 8 rondas; en cada ronda se ilumina una pieza más.
6. **Final**: el Gran Comedor se tiñe con los colores de la casa ganadora.

## Archivos

```
index.html            carcasa: un <main id="pantalla"> donde se pinta cada pantalla
style.css             estilos, por pantallas, y responsive (tablet 900 px, móvil 600 px)
code.js               una función por pantalla + los tres minijuegos
assets/img/           imágenes (LISTA-IMAGENES.md: cuáles hay y cuáles faltan)
diseno/               prototipo de Figma, funcionamiento.md y guia-estilo.md
apuntes/              apuntes de clase, resumen.md (temario) y enunciado
```

## Cómo está hecho

- **HTML, CSS y JavaScript sin librerías**, con lo visto en clase (`apuntes/resumen.md`).
- Cada pantalla es una función de `code.js` que escribe su HTML con `innerHTML` y una plantilla literal, y después escucha sus botones con `addEventListener`.
- El color de la casa del niño es una clase (`gryffindor`, `slytherin`…) que cambia el fondo del Gran Comedor.
- Los minijuegos usan algunas técnicas que no se han dado en clase (arrastrar, animación, temporizadores, números al azar). Están autorizadas, agrupadas en la parte 4 de `code.js` y explicadas paso a paso.

## Accesibilidad

- Todo lo que se pulsa es un `<button>`: se puede usar con teclado (Tab y Enter).
- Las imágenes tienen texto alternativo, o `alt=""` si son decorativas.
- En pociones, con el teclado, Enter echa el ingrediente al caldero.
- Si el sistema pide "reducir movimiento", las llaves vuelan más despacio.
- Los mensajes de los juegos se anuncian a los lectores de pantalla (`aria-live`).
