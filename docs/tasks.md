# Tareas: página de inicio — Dojo Doryokukan
Orden de ejecución. Cada ítem es comprobable.
Referencias: [proposal.md](./proposal.md), [design.md](./design.md).
---
## 1. Documentación
- [x] Reescribir `proposal.md` con identidad real del dojo (sensei, SKIF, público, valores, alcance).
- [x] Reescribir `design.md` con paleta, archivos, mapa de secciones/anclas y decisiones de diseño.
- [x] **Actualizar `design.md` con ajustes recientes:** logo con imagen, teléfonos cliqueables, horarios resaltados, galería con widget de Instagram, sección Inscripciones independiente, redes sociales con íconos, botón flotante WhatsApp.
- [x] Reescribir esta lista alineada al diseño nuevo.
- [x] **Hecho cuando:** los tres archivos coinciden entre sí y con los datos reales del dojo.
---
## 2. Base
- [x] Crear estructura base con título y metadatos correctos.
- [x] Título y meta descripción optimizados: ubicación y palabras clave agregadas.
- [x] Enlazar hoja de estilos y verificar carga.
- [x] **Hecho cuando:** la página abre y muestra el título correcto en la pestaña.
---
## 3. Marcado y contenido
- [x] Header con logo + navegación: Inicio, Nosotros, Clases, Cronograma, Galería, Atletas, Inscripciones (menú desplegable en móvil).
- [x] Hero: nombre, eslogan, SKIF Colombia, inscripciones abiertas, botón **Inscríbete**.
- [x] Sección Nosotros (Sensei Ernesto Márquez) con foto real `images/sensei.png`.
- [x] Sección Clases: tres tarjetas con foto — Niños (`clase-ninos.png`), Jóvenes (`clase-jovenes.png`), Adultos (`clase-adultos.png`).
- [x] Sección Valores: cuatro valores oficiales — Disciplina, Respeto, Esfuerzo, Honor.
- [x] Sección Cronograma: horarios por categoría con horas resaltadas.
- [x] **Sección Galería actualizada:** widget embebido de Instagram + enlace directo al perfil @dojodoryokukan.
- [x] Sección Atletas: tres tarjetas con foto — Equipo infantil, juvenil y adulto.
- [x] **Sección Inscripciones independiente:** requisitos, edades, horarios, prueba sin compromiso + botón directo a WhatsApp.
- [x] Footer actualizado: dirección, teléfono cliqueable, enlaces del menú, **redes sociales con íconos oficiales** (Instagram, Facebook, YouTube, WhatsApp), derechos reservados.
- [x] Un solo `h1` en toda la página. Datos confirmados publicados; sin información inventada.
- [x] Teléfono convertido en enlace: `tel:+573052403346` funcional en contacto y pie.
- [x] Sección Nosotros: enlaces oficiales a SKIF Internacional (skifworld.com) y WKF (wkf.net).
- [x] Botón flotante de WhatsApp: esquina inferior derecha, siempre visible, abre conversación directa `wa.me/573052403346`.
- [x] **Hecho cuando:** cada enlace del menú lleva a su sección correcta; todos los datos coinciden con la realidad.
---
## 4. Estilos
- [x] Variables de paleta oficiales: rojo, negro, blanco, oro.
- [x] Fondo oscuro, secciones alternadas, bordes decorativos, tarjetas y botones.
- [x] Diseño responsivo: 1 columna en móvil, grillas en tablet y escritorio.
- [x] Soporte de accesibilidad: `prefers-reduced-motion`, indicador de foco visible en oro.
- [x] **Estilos agregados:**
  - [x] `.logo__imagen` — imagen circular en lugar de emblema tipográfico.
  - [x] `.horario__hora` — resaltado de horarios en rojo y negrita.
  - [x] `.enlace-telefono` — números cliqueables con estilo diferenciado.
  - [x] `.redes` / `.icono-svg` — íconos oficiales de redes con color de marca.
  - [x] `.boton-whatsapp-flotante` — posición fija, color verde oficial, efecto de escala.
- [x] Estilos de enlaces de afiliación: centrado, línea divisoria superior, color dorado al pasar cursor.
- [x] **Hecho cuando:** todos los ajustes visuales funcionan; contraste suficiente en todos los fondos.
---
## 5. Verificación
- [ ] Recorrer menú completo y comprobar navegación hasta **Inscripciones**.
- [ ] Probar diseño en: ~360px (móvil), tablet y escritorio.
- [ ] Verificar que teléfonos al hacer clic abren acción de llamada.
- [ ] Confirmar que el widget de Instagram carga y se visualiza correctamente.
- [ ] Confirmar que no hay JavaScript obligatorio; todo funciona con HTML y CSS.
- [x] Confirmar que enlaces SKIF y WKF abren en pestaña nueva y muestran efecto al pasar el cursor.
- [x] Confirmar que el título aparece correcto en la pestaña del navegador.
- [x] Confirmar que el botón de WhatsApp permanece visible al desplazarse y abre en pestaña nueva.
- [x] Confirmar que los enlaces de redes sociales abren en pestaña nueva con atributos de seguridad.
- [ ] **Hecho cuando:** se cumplen todos los criterios de éxito definidos en la propuesta.
---
## Datos ya incorporados (antes pendientes ✅)
| Elemento | Estado |
| -------- | ------ |
| Teléfono oficial | ✅ Publicado y cliqueable |
| WhatsApp | ✅ Enlace directo + botón flotante |
| Dirección / Sede | ✅ Coliseo de Megacolegio, Villa del Rosario |
| Horarios por categoría | ✅ Estructura lista; contenido según cronograma |
| Fotos del dojo | ✅ Tarjetas de Nosotros, Clases y Atletas con imágenes reales |
| Logo del dojo | ✅ Imagen en `public/images/logo-doryokukan.jpg` |
| Redes sociales | ✅ Instagram, Facebook, YouTube, WhatsApp con íconos oficiales |
| Afiliación SKIF / WKF | ✅ Enlaces oficiales en sección Nosotros |
---
## Paso adicional: Migración a Angular
- [x] Crear proyecto Angular nuevo con estructura recomendada.
- [x] Copiar marcado HTML → `src/app/app.component.html`.
- [x] Copiar estilos completos → `src/app/app.component.css`.
- [ ] Verificar que todo se vea y funcione **exactamente igual** que la versión original.
- [x] Configurar despliegue automático: GitHub Actions → compilar → subir a AWS S3.
- [ ] Agregar primera función nueva como componente Angular independiente.
- [ ] **Hecho cuando:** cada commit en rama principal actualiza automáticamente el sitio en producción.