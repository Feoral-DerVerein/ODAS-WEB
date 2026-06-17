# 📘 Instrucciones para editar tu página (sin saber programar)

Esta guía explica, paso a paso y en lenguaje sencillo, cómo cambiar **textos, colores,
imágenes y enlaces** de tu página. Todo está en un único archivo: **`index.html`**.

---

## 🟢 Antes de empezar: lo básico

- **Para VER la página:** haz doble clic en el archivo `index.html`. Se abrirá en tu
  navegador (Chrome, Safari, etc.). No necesitas instalar nada.
- **Para EDITAR la página:** abre `index.html` con un editor de texto.
  - En Mac puedes usar **TextEdit** (clic derecho sobre el archivo → *Abrir con* →
    *TextEdit*). Mejor aún, descarga gratis **Visual Studio Code** (https://code.visualstudio.com),
    es más cómodo y resalta los colores.
- **Truco clave:** para encontrar cualquier texto, pulsa **Ctrl+F** (Windows) o
  **Cmd+F** (Mac) y escribe lo que buscas. Por ejemplo, busca `EDITAR`.
- **Después de cambiar algo:** guarda el archivo (Ctrl+S / Cmd+S) y **recarga** la
  página en el navegador (Ctrl+R / Cmd+R) para ver el cambio.

> 💡 Consejo: antes de tocar nada, haz una copia del archivo `index.html` por si acaso.

---

## ✏️ (a) Cómo cambiar cualquier TEXTO

Todos los textos que puedes cambiar están marcados así dentro del archivo:

```
[[EDITAR: aquí va el texto]]
```

**Pasos:**

1. Abre `index.html` en el editor.
2. Pulsa Ctrl+F / Cmd+F y escribe: `EDITAR`
3. Ve saltando de uno en uno. Cada `[[EDITAR: ...]]` es un texto que aparece en la página.
4. **Borra TODO el bloque, incluidos los corchetes `[[` y `]]`**, y escribe tu texto.

**Ejemplo:**

Si ves esto:
```
Frontier AI models <br class="hidden sm:block" />
```
Cambia solo las palabras (deja el `<br ...>` tal cual, eso es el salto de línea):
```
Inteligencia operativa <br class="hidden sm:block" />
```

Si ves esto:
```
<h1>[[EDITAR: titular línea 1]]</h1>
```
Quedaría así:
```
<h1>Reduce el desperdicio de tu negocio</h1>
```

> ⚠️ Importante: cambia solo el texto. No borres los símbolos `<`, `>`, `/` ni las
> comillas `"` que hay alrededor; esos hacen que la página funcione.

---

## 🎨 (b) Cómo cambiar los COLORES principales

Los colores están todos juntos al principio del archivo. Busca (Ctrl+F) la palabra
`EDITAR COLORES`. Verás algo así:

```
fondo:    '#000000', // Fondo principal (negro)
panel:    '#0A0A0A', // Fondo de tarjetas/secciones (casi negro)
borde:    '#1F1F1F', // Líneas y bordes sutiles (gris oscuro)
acento:   '#FFFFFF', // Color de botón principal (blanco)
```

Cada color es un código que empieza por `#`. Cambia solo lo que va **entre las comillas**.

**¿Cómo consigo un código de color?**
- Entra en https://www.color-hex.com o busca en Google “selector de color”.
- Copia el código que empieza por `#` (por ejemplo `#0EA5E9` para un azul).

**Ejemplo:** para poner el botón principal en azul en vez de blanco:
```
acento:   '#0EA5E9',
```

> 💡 Si tocas `fondo`, `panel` y `borde` cambias el aspecto de TODA la página de golpe.

---

## 🖼️ (c) Cómo reemplazar las IMÁGENES

Las imágenes de ejemplo son cuadros grises que ponen **"IMAGEN AQUI"**. En el archivo
se ven así (busca `EDITAR IMAGEN`):

```
<img src="https://placehold.co/400x240/0A0A0A/666666?text=IMAGEN+1" alt="..." />
```

**Opción 1 — Usar una imagen de internet:**
Cambia la dirección que está entre comillas después de `src=` por el enlace de tu imagen:
```
<img src="https://misitio.com/mi-foto.jpg" alt="..." />
```

**Opción 2 — Usar una imagen de tu ordenador:**
1. Copia tu imagen (por ejemplo `foto.jpg`) **en la misma carpeta** que `index.html`.
2. Pon solo el nombre del archivo:
```
<img src="foto.jpg" alt="..." />
```

> 💡 Recomendación de tamaños: noticias y tarjetas ≈ 400×240 px; imagen "Imagine" ≈ 400×300 px.
> Usa imágenes `.jpg` o `.png` ligeras (menos de 1 MB) para que cargue rápido.

### 🔵 Tu LOGO (esquina superior izquierda)

El logo del header sale de un archivo llamado **`logo.png`** que debe estar en esta
misma carpeta (junto a `index.html`).

**Para poner o cambiar tu logo:**
1. Coge tu imagen del logo.
2. Renómbrala exactamente como **`logo.png`** (en minúsculas).
3. Cópiala dentro de la carpeta `Negentropyweb` (la misma donde está `index.html`).
4. Recarga la página (Cmd+R). El logo aparece solo.

> 💡 Si todavía no has puesto el archivo, en la esquina verás un texto gris pequeño
> ("Pon tu logo: guarda logo.png aquí"). Ese aviso desaparece automáticamente en
> cuanto el archivo `logo.png` exista.
>
> 💡 Para que el fondo del logo no se note, exporta tu imagen en PNG con **fondo
> transparente**. Y si lo quieres más grande o más pequeño, pídemelo y lo ajusto.

---

## 🔗 (d) Cómo cambiar los ENLACES de los botones

Los botones y enlaces tienen una parte `href="#"`. La almohadilla `#` significa
“no va a ningún sitio todavía”. Para que lleven a una página real, cambia el `#` por
tu dirección web (debe empezar por `https://`).

**Ejemplo:** botón "Try for free" que lleve a tu web:
```
<a href="https://www.tu-web.com" ...>Try for free</a>
```

> 💡 Para que un enlace se abra en una **pestaña nueva**, añade `target="_blank"`:
> `<a href="https://www.tu-web.com" target="_blank" ...>`

---

## ❓ Preguntas frecuentes

- **Cambié algo y la página se ve rota.** Deshaz con Ctrl+Z / Cmd+Z hasta que vuelva a
  estar bien, o vuelve a tu copia de seguridad. Casi siempre es porque se borró sin
  querer una comilla `"`, un `<` o un `>`.
- **No veo el cambio.** Asegúrate de **guardar** el archivo y luego **recargar** la
  página en el navegador (Ctrl+R / Cmd+R).
- **¿Dónde está cada sección?** Dentro del archivo, antes de cada sección hay un
  comentario grande en español (por ejemplo `SECCIÓN 2 · HERO`). Búscalos con Ctrl+F
  escribiendo `SECCIÓN`.

---

## 📂 Archivos del proyecto

- **`index.html`** → tu página nueva (la que se abre con doble clic). **Edita este.**
- **`INSTRUCCIONES.md`** → esta guía.
- **`index-react-original.html`** → copia de seguridad de la página antigua (no la
  necesitas para nada, solo está guardada por si acaso).

¡Listo! Con esto puedes personalizar toda la página sin saber programar. 🎉
