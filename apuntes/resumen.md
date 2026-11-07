# Resumen de apuntes — Gráfica Multimedia (Producción)

Profesora: Lourdes Marco · ESD Madrid

Fuentes (carpeta `apuntes/`):

| PDF | Tema |
|---|---|
| `1_Repaso.pdf` | Repaso HTML y CSS (estructura, Flexbox, Grid, multi-columna, media queries) |
| `3_JavaScript. Variables. Tipos de datos.pdf` | Qué es JS, `<script>`, `alert`, sentencias, comentarios, variables, tipos |
| `4_JavaScript. DOM I y evento click.pdf` | `console.log`, `window`/BOM, DOM, selectores, `innerHTML`/`textContent`, eventos |
| `5_JavaScript. Operadores. Condicionales.pdf` | Operadores aritméticos, de asignación, de comparación y lógicos |
| `6_JavaScript. Condicionales II.pdf` | `if`, `else`, `else if`, `switch`, operador condicional (ternario) |
| `7_JavaScript. Bucles y funciones.pdf` | Plantillas literales, `while`, `do…while`, `for`, funciones (tradicionales, por expresión, flecha) |
| `8_JavaScript. Strings.pdf` | Métodos y propiedades de strings |

> No hay tema 2 en la carpeta. Todo lo que no aparezca en esta lista **no se ha dado**.

---

## 1. HTML

### Estructura de una etiqueta
`<h1 class="title">Título</h1>` → etiqueta de apertura (`h1` + atributo `class = "valor"`), contenido, etiqueta de cierre.

### Estructura de un documento HTML5 (plantilla que usa la profesora)
```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estructura básica HTML</title>
</head>
<body>
    <script src="code.js"></script>
</body>
</html>
```

### Etiquetas que aparecen
| Etiqueta | Dónde aparece |
|---|---|
| `<!DOCTYPE html>` | Estructura HTML5 |
| `<html>` (con `lang="es"`) | Estructura HTML5 |
| `<head>` | Estructura HTML5 |
| `<meta>` (`charset`, `http-equiv`, `name="viewport"`, `content`) | Estructura HTML5 |
| `<title>` | Estructura HTML5 |
| `<body>` | Estructura HTML5 |
| `<h1>` | Estructura de etiqueta, selectores JS |
| `<p>` | Multi-columna, DOM, bucles |
| `<em>` | Dentro de `innerHTML` |
| `<br>` | Dentro de plantillas literales en bucles |
| `<div>` | Flexbox, Grid |
| `<section>` | Grid |
| `<header>`, `<nav>`, `<main>`, `<footer>` | Grid con `grid-template-areas` |
| `<button>` | Eventos |
| `<script>` (en línea y con `src="code.js"`) | JS en el navegador |

Solo **mencionadas** (en el evento `change`), sin ejemplo: `<input>`, `<select>`, `<textarea>`.
La hoja de estilos externa se menciona ("igual que sucede con las hojas de estilo CSS") pero `<link>` no aparece escrito en los apuntes.

### Atributos que aparecen
`class`, `id`, `lang`, `charset`, `http-equiv`, `name`, `content`, `src`, `onclick` (manejador como atributo HTML).

### Comentarios HTML
`<!-- comentario -->`

---

## 2. CSS

### Estructura de una norma CSS
`h1 { color: green; }` → selector + bloque de declaración `{ }` con declaraciones `propiedad: valor;`.

### Selectores
| Selector | Ejemplo |
|---|---|
| De etiqueta | `h1`, `p` |
| De clase | `.contenedor`, `.item`, `.columna`, `.columns` |
| De id | `#page` |
| Hijo directo `>` | `#page > header` |

### Propiedades
| Propiedad | Valores vistos |
|---|---|
| `color` | `green` |
| `background-color` | `blue`, `#8ca0ff` |
| `width` | `200px`, `100%` |
| `height` | `150px`, `100%` |
| `display` | `flex`, `grid` |
| `grid-template-columns` | `repeat(6, 1fr)`, `150px 1fr`, `50px 1fr` |
| `grid-template-rows` | `100%`, `50px 1fr 30px` |
| `grid-gap` | `10px` |
| `grid-template-areas` | `"head head" "nav main" "nav foot"` |
| `grid-area` | `head` |
| `columns` | `4 10rem` (combina `column-count` y `column-width`) |
| `column-count`, `column-width` | mencionadas |
| `column-gap` | `1rem` |
| `column-rule` | `1px solid gray` |
| `white-space` | `pre-line` (para cadenas multilínea de JS) |

### Flexbox
Contenedor con `display: flex;` y elementos hijos (`.item`). Conceptos del diagrama: **main axis** (eje principal), **cross axis** (eje transversal), main start/end, cross start/end, main size, cross size, flex container, flex item.
> Las propiedades concretas de Flexbox (`justify-content`, `align-items`, `flex-direction`…) **no aparecen escritas** en los apuntes (salen como `...`).

### Media queries
```css
@media screen and (max-width: 800px){
    #page{
        grid-template-columns: 50px 1fr;
    }
}
```
Idea: el mismo HTML con distinto CSS para móvil, tablet y escritorio.

### Unidades
`px`, `rem`, `%`, `fr`. Colores por nombre (`green`, `blue`, `gray`) y hexadecimal (`#8ca0ff`).

---

## 3. JavaScript

### 3.1 Conceptos generales
- JS es un lenguaje **interpretado**; sigue el estándar **ECMAScript** (ES6, ES2027…). JS cliente vs. JS servidor.
- Can I use (caniuse.com) para comprobar compatibilidad.
- Se puede ejecutar en la **consola** del navegador (Inspeccionar → Consola) o en un **script** dentro del HTML (`<script>` en línea o fichero externo `code.js`, que es lo más común).
- **Sentencia**: orden que acaba en `;`. **Programa**: secuencia de sentencias. **Código fuente**. **Comentarios**: `// una línea` y `/* varias líneas */`.

### 3.2 Variables
- Declaración con `let` (puede cambiar) y `const` (constante, no se puede reasignar).
- Reasignar: `num = num + 5;`
- Normas de nombres: empiezan por letra, `_` o `$`; sin números al principio, sin operadores, sin símbolos (`%`, `#`), sin espacios, sin palabras reservadas.
- **Palabras reservadas**: `break case catch class const continue debugger default delete do else export extends finally for function if import in instanceof new of return super switch this throw try typeof var void while with yield`, literales `null true false`, y antiguas (`abstract boolean byte char double final float goto int long native short synchronized throws transient volatile`).

### 3.3 Tipos de datos
`number` (`10`, `2.5`), `string` (`"Marie"`, `'Curie'`), `undefined` (`let x;`), `boolean` (`true`/`false`), `null`.
`typeof` aparece en una imagen (`typeof("Hola") // string`, etc.).

### 3.4 Funciones/métodos "de serie" vistos
| Función | Para qué |
|---|---|
| `alert(mensaje)` | Cuadro de alerta |
| `prompt(mensaje)` | Pedir un dato al usuario (devuelve string o `null` si se cancela) |
| `console.log(valor)` | Mostrar en la consola para testear |
| `Number(valor)` | Convertir a número (también usado para comprobar si es número) |
| `parseInt('40px', 10)` | Quitar las letras y quedarse con el número |
| `String(valor)` / `valor.toString()` | Convertir a string |

### 3.5 BOM y DOM
- Objeto global `window`. **BOM**: `screen`, `history`, `location`.
- **DOM**: árbol de nodos; `document` es el nodo raíz.
- **Selectores**:
  - `document.getElementById("boton1")`
  - `document.getElementsByName("nombre")`
  - `document.getElementsByClassName("rojo")`
  - `document.getElementsByTagName("h1")`
  - `document.querySelector("#boton1")` ← **el que más usa la profesora**
  - `document.querySelectorAll(".clase")`
  - **Cambiar contenido**: `elemento.textContent = "..."` (solo texto) y `elemento.innerHTML = "..."` (texto + etiquetas). También con `+=` para añadir.

### 3.6 Eventos
- Tabla de eventos / manejadores: `click`/`onclick`, `dblclick`/`ondblclick`, `load`/`onload`, `change`/`onchange`, `mouseover`/`onmouseover`, `mouseout`/`onmouseout`, `mousedown`/`onmousedown`, `mouseup`/`onmouseup`, `blur`/`onblur`, `focus`/`onfocus`, `keydown`/`onkeydown`.
- Tres formas de escuchar:
  1. Atributo HTML: `<button onclick="alert('Mi primer evento JS');">`
  2. Propiedad: `button.onclick = () => alert("...");`
  3. **`addEventListener(evento, función, [capture])`** ← la recomendada (permite varios escuchadores en el mismo elemento).
- Solo se ha **practicado** `click`; el resto aparecen en la tabla.

### 3.7 Operadores
- **Aritméticos**: `+ - * / %` (módulo = resto), `++`, `--` (pre y post incremento).
- **Asignación**: `= += -= *= /= %=`
- **Comparación** (usados en los ejemplos): `==`, `!=`, `>`, `<`, `>=`, `<=`.
  > `===` y `!==` **no aparecen** en los apuntes.
- **Lógicos**: `&&` (and), `||` (or), `!` (not).
- **Concatenación** con `+` entre strings.

### 3.8 Condicionales
- `if (condición) { }`
- `if … else`
- `if … else if … else`
- `switch (expresión) { case valor: …; break; default: …; break; }`
- **Operador condicional (ternario)**: `variable = (condición) ? valor1 : valor2;`

### 3.9 Bucles
- `while (condición) { }` — cuidado con bucles infinitos.
- `do { } while (condición);` — se ejecuta al menos una vez.
- `for (inicialización; condición; post-expresión) { }`
- Concepto bucle determinado / indeterminado.

### 3.10 Funciones
- **Tradicional**: `function nombreFun(parametros){ … }` y llamada `nombreFun(argumentos);`
- **Parámetros** (uno o varios, separados por comas) y **`return`**.
- **Por expresión**: `let sumar = function (num1, num2) { return num1 + num2; }`
- **Arrow function**: `let sumar = (num1, num2) => num1 + num2;`
- **Parámetros por defecto**: `(nom, ape = "Sin apellido") => …`
- Funciones flecha anónimas dentro de `addEventListener("click", () => { … })`.

### 3.11 Strings
| Qué | Cómo |
|---|---|
| Crear | `"dobles"`, `'simples'`, `` `plantilla ${variable}` `` (interpolación, multilínea) |
| Escapar caracteres | `\n`, `\r\n`, `\"` (barra invertida `\`) |
| Longitud | `str.length` |
| Convertir a string | `String(x)`, `x.toString()`, `` `${x}` `` (la recomendada), `"texto" + x` (menos recomendada) |
| Comparar | `> >= < <= ==`, `str1.localeCompare(str2)` (devuelve -1, 0, 1) |
| Buscar | `str.indexOf(sub, [desde])` (devuelve índice o -1), `str.includes(sub)` (true/false) |
| Un carácter | `str[0]` (índices desde 0) |
| Subcadenas | `str.substring(inicio, [fin])`, `str.slice(inicio, [fin])` |
| Quitar espacios | `str.trimStart()`, `str.trimEnd()` |
| Mayúsc./minúsc. | `str.toUpperCase()`, `str.toLowerCase()` |
| Rellenar | `str.padStart(total, '0')`, `str.padEnd(total, '*')` |

### 3.12 Lo que NO se ha dado (ojo)
Arrays y sus métodos, objetos (`{}` solo sale en `typeof`), `var`, `===`, `classList`, `style` desde JS, `createElement`/`appendChild`, `setTimeout`/`setInterval`, `fetch`, `localStorage`, `forEach`/`map`, `for…of`/`for…in`, clases, `import`/módulos, `this`, `try/catch`, formularios con `.value`, `event.target`/objeto evento, `trim()` (solo `trimStart`/`trimEnd`), `replace`, `split`, `Math`.
Si hace falta algo de esto, hay que avisar y buscar alternativa con lo visto.

---

## 4. Forma de programar de la profesora

### Ficheros y estructura
- Tres ficheros: `index.html`, `style.css`, `code.js`.
- `<script src="code.js"></script>` **al final del `<body>`**.
- `<html lang="es">` y la plantilla HTML5 completa con las tres `<meta>`.
- HTML semántico en la maqueta: `section`, `header`, `nav`, `main`, `footer`.
- Maquetación con **Grid** (incluido `grid-template-areas`) y **Flexbox**, y **media queries** con `max-width`.

### Estilo JS
- **`let`** para casi todo; `const` para elementos que no cambian (p. ej. `const p = document.querySelector("p");`). Nunca `var`.
- Seleccionar elementos con **`document.querySelector("#id")`**, guardándolos en una variable antes de usarlos:
  ```js
  let parrafo = document.querySelector("#lorem");
  parrafo.innerHTML = "Lorem <em>Ipsum</em>";
  ```
- Eventos con **`addEventListener("click", () => { … })`** y función flecha:
  ```js
  const p = document.querySelector("p");
  document.querySelector("button").addEventListener("click", () => {
      p.textContent += "hola mundo ";
  });
  ```
- Mostrar resultados con `alert()`, `console.log()` o escribiendo en el DOM con `innerHTML += \`...\``.
- **Plantillas literales** (comillas invertidas y `${}`) preferidas frente a concatenar con `+` (en los últimos temas casi todo va con `` ` ``).
- **Punto y coma** al final de cada sentencia.
- Llaves en la misma línea: `if(condición){`, `}else{`, `}else if(...){`.
- `switch` siempre con `break` en cada `case` y en `default`.
- Funciones: primero la forma tradicional `function`, y en lo más reciente **arrow functions** guardadas en `let`:
  ```js
  // declaro la función
  let saludar = (saludo, persona) => `${saludo} ${persona}, ¿Qué tal?`;
  // llamo a la función
  alert(saludar(s, p));
  ```

### Nombres
- En **español** y en **camelCase**: `nombre`, `apellido`, `parrafo`, `mensaje`, `contador`, `limite`, `resultado`, `total`, `edad`, `curso`, `llueve`, `haceSol`, `decirHola`, `sumar`, `saludar`, `num1`, `num2`, `i` (contador del `for`). Booleanos tipo `isHappy`, `isHoliday`, `userlogin`.
- Algún nombre en inglés suelto (`showName`, `isHappy`, `cleanStart`), pero lo habitual es español.
- Clases/ids CSS en español y minúsculas: `.contenedor`, `.item`, `.columna`, `#page`, `#parrafo`, `#bucle`, `#lorem`, `#boton1`.

### Comentarios
- En español, explicando cada paso: `// declaro la función`, `// llamo a la función`, `// pido los datos al usuario`, `/* aquí estamos cambiando el valor de la variable num */`.
- `//` para una línea, `/* */` para varias.

### Orden típico de un programa
1. Declarar variables / seleccionar elementos del DOM.
2. Declarar funciones.
3. Escuchar eventos o pedir datos (`prompt`).
4. Condicionales / bucles.
5. Mostrar el resultado (`alert`, `console.log`, `innerHTML`/`textContent`).

---

## 5. Ampliación autorizada para este proyecto

Autorizado por Irene el 07/11/2026 para la web de Harry Potter. Todo lo que no esté en esta sección ni en las anteriores sigue sin poder usarse.

### 5.1 HTML y CSS básico (de primer curso)
| Qué | Para qué |
|---|---|
| `<img>` con `src` y `alt` | Escudos, sombrero, respuestas del test, ingredientes, llaves, piezas |
| `<h2>`, `<h3>` | Jerarquía de títulos (accesibilidad) |
| `<link rel="stylesheet">` | Enlazar `style.css` y las fuentes de Google Fonts |
| `background-image` (y `background-size`, `background-position`) | Fondos ilustrados de cada pantalla |
| `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, `text-transform` | Tipografías del Figma |
| `text-align` | Alinear textos |
| `margin`, `padding` | Espacios |
| `border` | Bordes del campo del nombre y líneas del test |
| Propiedades de Flexbox y Grid (`justify-content`, `align-items`, `flex-direction`, `gap`…) | Centrar y ordenar elementos |
| `:hover` | Efecto al pasar el ratón por botones y tarjetas |
| `cursor: pointer` | Indicar que algo se puede pulsar |
| `min-height`, unidad `vh` y `box-sizing: border-box` | Que cada pantalla ocupe exactamente el alto de la ventana. Añadido en la fase 2 (aprobado) |
| `window.scrollTo(0, 0)` | Volver arriba al cambiar de pantalla (si no, en el móvil la pantalla nueva sale a mitad). **Añadido en la fase 3, pendiente del OK de Irene** |

### 5.2 Alternativas con lo dado (aprobadas)
- **Nombre del niño**: se pide con `prompt()`.
- **Cambiar de pantalla**: cada pantalla es una función que devuelve su HTML en una plantilla literal y se pinta con `innerHTML`. El color de la casa va dentro de la plantilla como clase: `class="comedor ${casa}"`.
- **Puntos de las otras casas**: suben una cantidad fija cada vez que el niño vuelve al marcador (sin `setInterval`). La casa del niño siempre gana.
- **Final**: botón "Descubrir la casa ganadora" en lugar de esperar 3 segundos (sin `setTimeout`).

### 5.3 Conceptos nuevos solo para los 3 minijuegos
Autorizado usar conocimientos no dados para que los minijuegos funcionen **tal cual el Figma**, con la condición de explicarlos bien en el código y al entregarlos:
- **Pociones**: arrastrar los ingredientes al caldero.
- **Llaves voladoras**: llaves que vuelan por la pantalla (animación).
- **Ajedrez mágico**: piezas que se iluminan al azar, una más por ronda, durante 8 rondas (temporizadores y números aleatorios).
- En el JS de los juegos: `setTimeout`, `requestAnimationFrame`, `Math.random`/`Math.floor`, arrays y objetos, `classList`, `style.transform`, eventos `pointerdown`/`pointermove`/`pointerup`, `getBoundingClientRect`, `dataset` y el atributo `aria-live` (accesibilidad). Todo explicado en la parte 4 de `code.js`.
- En el CSS de los juegos: `position` (relative/absolute) con `top`/`left`/`bottom`, `aspect-ratio` y `filter: drop-shadow()` para el brillo.
