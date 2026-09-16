# Diseño — Dojo Doryokukan

---

## 🎨 Paleta
| Token               | Uso                                     | Hex       |
| ------------------- | --------------------------------------- | --------- |
| `--negro`           | Fondo base, pie, texto sobre blanco     | `#111111` |
| `--negro-profundo`  | Hero y header                           | `#0A0A0A` |
| `--rojo`            | Secciones de acento, CTA, detalles      | `#D32F2F` |
| `--rojo-oscuro`     | Hover de botones, bordes                | `#9A1B1B` |
| `--blanco`          | Secciones claras, texto sobre oscuro    | `#FFFFFF` |
| `--hueso`           | Texto secundario sobre oscuro           | `#E8E4DC` |
| `--oro`             | Acento (líneas, logo, foco, bordes)     | `#C9A227` |
| `--oro-claro`       | Hover de acento, resaltado              | `#E0C35A` |
| `--espacio`         | Espaciado estándar entre bloques        | `1.25rem` |
| `--ancho`           | Ancho máximo del contenido              | `70rem`   |
| `--header`          | Altura del encabezado fijo              | `4.25rem` |
| `--fuente`          | Tipografía principal                    | `"Segoe UI", system-ui, sans-serif` |

> Contraste: texto blanco sobre `#111111` y `#D32F2F`; texto `#111111` sobre `#FFFFFF`. El oro no se usa como único medio para distinguir enlaces.

---

## ✨ Cambios recientes al diseño
- **Logo con imagen real**: en lugar de emblema tipográfico, se usa archivo de imagen circular. Clases: `.logo__imagen` (encabezado) y `.logo__imagen--grande` (sección principal).
- **Teléfonos cliqueables**: enlaces con formato `tel:+57...` que abren llamada automáticamente. Estilo: `.enlace-telefono` — se mantiene color hueso con borde inferior rojo, pasa a dorado al pasar el cursor.
- **Horarios resaltados**: hora en negrita y rojo con `.horario__hora`.
- **Galería con fotos reales**: rejilla de imágenes con efecto visual — al pasar el cursor se eleva, cambia borde a dorado y la foto hace zoom suave. Clase: `.galeria__item`.
- **Rutas de imágenes**: logo en `public/images/logo-dojo.png` y galería en `public/images/galeria/`.

---

## 📐 Ritmo visual
- Fondo general oscuro.
- Secciones a pantalla completa que **alternan** negro / blanco / rojo (no tres bloques del mismo color seguidos).
- Ancho de contenido: `min(70rem, 100% - 2rem)`.
- Bordes de artes marciales: filete dorado fino, esquinas en L (pseudoelementos), línea tipo cinturón bajo títulos de sección.
- Logo: **imagen circular** en lugar de emblema tipográfico.

---

## 🔤 Tipografía
- Sistema: `Segoe UI`, `system-ui`, `sans-serif`.
- Cuerpo ≥ `1rem`, interlineado ~1.6.
- Títulos de sección en mayúsculas con espaciado amplio.
- Un solo `h1` en la página (nombre del dojo).

---

## 🧱 Arquitectura de la página
1. Enlace de salto "Saltar al contenido".
2. `header` fijo: logo + navegación (Inicio, Nosotros, Clases, Cronograma, Galería, Contacto). En móvil, menú desplegable con `<details>/<summary>`.
3. Contenido principal:
   - `#inicio` — Presentación: logo, nombre, eslogan, SKIF Colombia, aviso "Inscripciones abiertas", botón **Inscríbete**.
   - `#nosotros` — Sensei Ernesto Márquez y texto del dojo.
   - `#clases` — Tres tarjetas: Niños, Jóvenes, Adultos.
   - `#valores` — Cuatro valores oficiales.
   - `#cronograma` — Horarios por categoría con horas resaltadas.
   - `#galeria` — Imágenes reales con efectos interactivos.
   - `#contacto` — Ubicación, teléfono cliqueable e inscripciones.
4. `footer` — Marca, dirección, **teléfono enlace**, enlaces del menú, derechos reservados.

> Desplazamiento suave activado y `scroll-margin-top` en secciones para compensar el encabezado fijo.

---

## 🅰️ HTML y CSS en Angular
- El marcado HTML se coloca en `src/app/app.component.html`
- Los estilos CSS se colocan en `src/app/app.component.css`
- Las variables de color en `:root` se mantienen sin cambios
- Diseño responsivo y puntos de quiebre intactos
- Angular gestiona el desplazamiento y las anclas internas

---

## 📋 Contenido (fuente de verdad)
| Campo          | Valor                                      |
| -------------- | ------------------------------------------ |
| Dojo           | Dojo Doryokukan                            |
| Sensei         | Ernesto Márquez                            |
| Estilo         | Karate SKIF Colombia                       |
| Eslogan        | El camino del esfuerzo                     |
| Valores        | Disciplina · Respeto · Esfuerzo · Honor    |
| Categorías     | Niños · Jóvenes · Adultos                  |
| Ciudad         | Villa del Rosario, Colombia                |
| Teléfono       | +57 305 240 3346 (cliqueable)              |
| Ubicación      | Coliseo de Megacolegio                     |
| Inscripciones  | Abiertas                                   |

---

## ♿ Accesibilidad y rendimiento
- Orden de foco coincide con orden visual; indicador visible en color oro.
- Enlaces identificables: borde inferior o cambio de color; no solo `:hover`.
- Teléfonos como enlaces nativos `tel:` — funcionales desde cualquier dispositivo.
- Angular compila a HTML/CSS optimizado → rendimiento igual o superior al original.
- Sin dependencias externas obligatorias.

---

## 🛠️ Construcción y publicación
- Comando: `ng build` → genera carpeta `dist/` lista
- Se publica automáticamente en **AWS S3 + CloudFront**
- Cada actualización en rama principal → GitHub Actions compila y sube solo los archivos nuevos
- Credenciales AWS almacenadas como secretos en GitHub (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`)
- Bucket: `doryoku-kan` | Región: `us-east-1`

---

## 🚀 Crecimiento futuro
- Componente principal único para la página de inicio
- Cada función nueva (formulario, panel, etc.) → componente separado
- Lógica compartida → servicios Angular
- Diseño visual y paleta intactos al agregar funciones
- Fotos y contenido se actualizan directamente en archivos del proyecto

---

## Redes sociales y contacto directo
| Red | Enlace / Dato |
|---|---|
| Instagram | https://www.instagram.com/dojodoryokukan/ |
| Facebook | https://www.facebook.com/dojodoryokukancolombia/ |
| YouTube | https://www.youtube.com/@dojodoryokukan3237 |
| WhatsApp | `+57 305 2403346` → enlace: https://wa.me/573052403346 |

- Todos los enlaces se abren en pestaña nueva (`target="_blank" rel="noopener noreferrer"`)
- WhatsApp usa formato `wa.me` para abrir chat directamente
- Se ubican en el **pie de página** y opcionalmente en sección Contacto

## Enlaces de afiliación institucional
El Dojo Doryokukan se identifica públicamente como parte de:

| Institución | Enlace oficial | Propósito |
|---|---|---|
| SKIF Internacional | https://www.skifworld.com/ | Organización mundial del estilo Shotokan |
| WKF — Federación Mundial | https://www.wkf.net/ | Reconocimiento oficial del karate |

- Se ubican en la sección **Nosotros**, debajo de las dos tarjetas.
- Se abren en pestaña nueva: `target="_blank" rel="noopener noreferrer"`
- Texto: *"Afiliado a SKIF Internacional · Miembro de la Federación Mundial de Karate (WKF)"*