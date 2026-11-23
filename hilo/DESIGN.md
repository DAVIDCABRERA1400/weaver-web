---
name: Hilo
description: Submarca de Weaver para control de inquilinos. Crema cálido, tarjetas blancas, verde esmeralda profundo y semáforo de pagos; wordmark "hilo por Weaver".
colors:
  bg: "#FAF9F6"
  surface: "#FFFFFF"
  ink: "#18181B"
  ink-secondary: "#52525B"
  primary: "#14532D"
  on-primary: "#FFFFFF"
  paid: "#16A34A"
  paid-tint: "#E6F5EA"
  pending: "#D97706"
  pending-tint: "#FCEFD6"
  late: "#DC2626"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "64px"
    fontWeight: 800
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  h2:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "44px"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: "10px"
  lg: "18px"
  xl: "28px"
spacing:
  "2": "8px"
  "4": "16px"
  "8": "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: "10px 22px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "32px"
---

# Design System: Hilo

## Overview
Hilo es una submarca de la familia Weaver: comparte con Weaver las tarjetas blancas de 28px, la sombra única, los hilos finos de 0.5px y el tono cercano en español de tú, pero tiene color propio, tipografía propia y logo propio. Personalidad: sobria, ordenada, cercana y transparente. "Cuentas claras, cobros al día."

La página es un edificio de alquiler en corte que funciona como panel del dueño; el semáforo de pagos de la landing habla el mismo idioma que el producto.

## Colors
- **Crema (`bg`)** de fondo y **blanco** en tarjetas. **Carbón** y **gris pizarra** para texto.
- **Esmeralda profundo (`primary`):** marca, botón principal y bloques destacados. Texto blanco encima.
- **Semáforo de pagos:** al día = verde, por vencer (pendiente) = ámbar, en mora = rojo sobrio. Los verdes y ámbares no alcanzan contraste de texto sobre blanco: se usan como borde y relleno suave con texto oscuro (`#14532D`, `#6B3A04`); la mora es relleno rojo con texto blanco (4.8:1).
- El estado nunca depende solo del color: cada cuarto lleva también icono (check, reloj, alerta, llave) y palabra.
- Libre no es un estado del semáforo: borde punteado gris pizarra.

## Typography
Plus Jakarta Sans 800 para titulares (tracking negativo) y Inter para cuerpo, con `tabular-nums` en montos para alinear columnas de quetzales. Decisión de la persona dueña de la marca; ambas son tipografías muy usadas y se mantienen a propósito.

## Logo
Wordmark "hilo" en minúsculas (Plus Jakarta Sans 800) con un trazo fino continuo bajo las letras, como una puntada, y el subtítulo discreto "por Weaver". Icono: H hecha de hilo (dos postes y un travesaño ondulado) con un nodo ámbar que es una ventana encendida, sobre cuadrado esmeralda (`assets/favicon.svg`).

## Layout
Contenedor de 1180px. Portada en dos columnas: titular y acción a la izquierda, tarjeta esmeralda con la lente "Míralo como" y el resumen vivo a la derecha (con una línea de hilo decorativa). Debajo, el edificio (6 ventanas por piso con etiqueta "Piso n" en escritorio, 4 en móvil). Roles en un bloque grande (Dueño) y cuatro tarjetas; un mini edificio en cada una enciende las ventanas que ese rol ve.

## Elevation & Depth
Una sola sombra suave en tarjetas, bordes de 0.5px. Sin degradados.

## Components
- **Ventana:** número, icono de estado, monto y línea de apoyo; seleccionada con contorno Carbón.
- **Selector de lente:** píldoras con `aria-pressed`.
- **Ficha del cuarto:** estado de cuenta de tres meses y queja abierta; inline bajo el edificio.
- **Bloque "por Weaver":** tarjeta Carbón que enlaza a Weaver.

## Do's and Don'ts
- Muestra datos de ejemplo siempre rotulados; no inventes clientes, precios ni fechas.
- Mantén el estado por color + icono + texto.
- No uses el índigo ni el coral de Weaver dentro de Hilo.
- No pongas texto en verde/ámbar claro sobre blanco.
