# Weaver

**Conectamos ideas. Tejemos soluciones simples.**

Weaver hace sitios web, sistemas a medida y tableros de datos para pequeños negocios que quieren crecer sin complicarse. Este sistema sale del *Brand Board* de Weaver (identidad visual v1.0): sus colores, tipografías, logotipo y los mockups de hero web y tarjeta de presentación.

## Contenido y voz

- Cercana y directa, en español y de tú: "Agenda una demo", "Tu negocio, conectado con tecnología simple."
- Frases cortas y concretas. Se promete rapidez sin exagerar: "listos en semanas, no en meses."
- La metáfora de la marca es **tejer**: conectar hilos, ideas y sistemas. Úsala con medida (eslogan, titulares), no en cada frase.
- Antetítulos y etiquetas en MAYÚSCULAS con tracking (`eyebrow`, `label`); el resto en tipo oración.

## Fundamentos visuales

**Color.** Fondo claro y frío (`bg`, Niebla) con tarjetas blancas (`surface`). El texto es Grafito (`ink`). El índigo (`primary`) es el color de la marca: botones, la W, bloques destacados. El coral (`accent`) es un acento escaso, casi siempre un solo punto: el nodo central de la W o el antetítulo.

| Par | Contraste | Uso |
| --- | --- | --- |
| `ink` sobre `bg` | 16.6:1 | Texto principal |
| `ink-secondary` sobre `bg` | 6.0:1 | Texto de apoyo |
| `on-primary` sobre `primary` | 6.0:1 | Botones, eslogan |
| `ink` sobre `accent` | 6.4:1 | Texto sobre coral |
| `muted` sobre `surface` | 3.3:1 ⚠ | Solo etiquetas no esenciales |
| `on-primary` sobre `accent` | 2.8:1 ✗ | No usar |

El board usa `muted` para etiquetas pequeñas y `accent` para el antetítulo de 13px; ninguno llega a 4.5:1. Se conservan como están en la fuente, pero para texto que alguien necesite leer usa `ink-secondary`.

**Tipografía.** Dos familias de Google Fonts: **Sora** (`--font-display`, 600/700) para títulos, wordmark y etiquetas; **Plus Jakarta Sans** (`--font-body`, 400–700) para cuerpo, navegación y botones. Cárgalas con:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap">
```

**Forma.** Redondeado generoso y amable: tarjetas a `radius-xl` (28px), swatches y marcos a `radius-md`, botones a `radius-sm`. El icono vive en un círculo (`radius-full`).

**Profundidad.** Una sola sombra suave, `shadow-card`, para tarjetas blancas sobre `bg`. Los bordes son hilos finos (`hairline`, 0.5px), no líneas gruesas.

**Espaciado.** Página con margen `space-16`, cuadrícula de 4 columnas con gap `space-6`, tarjetas con padding `space-8` y gap interno de 18px.

## Iconografía y logotipo

- **Icono**: una telaraña geométrica (8 radios y 3 octágonos al 30% de opacidad) con la **W** trazada encima en 5px de grosor, extremos redondeados. Versión clara (índigo sobre Niebla) y oscura (blanco sobre Grafito). Ver grupo *Logos*.
- **Marca W**: la polilínea sola, para tamaños pequeños junto al wordmark "Weaver" en Sora 700.
- **W con nodos**: la W con un nodo en cada vértice; el nodo central en coral. Para piezas sobre índigo.
- No hay set de iconos de interfaz en la fuente. Si hace falta, usa iconos de trazo con extremos redondeados, en `ink` o `primary`.

## Reglas rápidas

- Botón principal: fondo `primary`, texto `on-primary`, `body-strong`, `radius-sm`, padding 8px × `space-4`.
- Un solo acento coral por composición.
- No pongas texto blanco sobre coral.
- No uses degradados ni sombras distintas de `shadow-card`.
