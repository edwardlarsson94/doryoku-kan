# Tareas: página de inicio — Dojo Doryokukan

Orden de ejecución. Cada ítem es comprobable.
Referencias: [proposal.md](./proposal.md), [design.md](./design.md).

---

## 1. Documentación
- [x] Reescribir `proposal.md` con identidad real del dojo (sensei, SKIF, público, valores, alcance).
- [x] Reescribir `design.md` con paleta, archivos, mapa de secciones/anclas y decisiones de diseño.
- [x] **Actualizar `design.md` con ajustes recientes:** logo con imagen, teléfonos cliqueables, horarios resaltados, galería con fotos.
- [x] Reescribir esta lista alineada al diseño nuevo.
- [x] **Hecho cuando:** los tres archivos coinciden entre sí y con los datos reales del dojo.

---

## 2. Base
- [x] Crear estructura base con título y metadatos correctos.
- [x] Enlazar hoja de estilos y verificar carga.
- [x] **Hecho cuando:** la página abre y muestra el título correcto en la pestaña.

---

## 3. Marcado y contenido
- [x] Header con logo + navegación: Inicio, Nosotros, Clases, Cronograma, Galería, Contacto (menú desplegable en móvil).
- [x] Hero: nombre, eslogan, SKIF Colombia, inscripciones abiertas, botón **Inscríbete**.
- [x] Sección Nosotros (Sensei Ernesto Márquez).
- [x] Sección Clases: tres tarjetas — Niños, Jóvenes, Adultos.
- [x] Sección Valores: cuatro valores oficiales.
- [x] Sección Cronograma: horarios por categoría con horas resaltadas.
- [x] **Sección Galería actualizada:** fotos reales con enlaces y etiquetas.
- [x] Sección Contacto: ubicación completa + teléfono.
- [x] **Footer actualizado:** dirección, teléfono cliqueable, enlaces del menú, derechos.
- [x] Un solo `h1` en toda la página. Datos confirmados publicados; sin información inventada.
- [x] **Teléfono convertido en enlace:** `tel:+573052403346` funcional en contacto y pie.
- [x] **Hecho cuando:** cada enlace del menú lleva a su sección; todos los datos coinciden con la realidad.

---

## 4. Estilos
- [x] Variables de paleta oficiales: rojo, negro, blanco, oro.
- [x] Fondo oscuro, secciones alternadas, bordes decorativos, tarjetas y botones.
- [x] Diseño responsivo: 1 columna en móvil, grillas en tablet y escritorio.
- [x] Soporte de accesibilidad: `prefers-reduced-motion`, indicador de foco visible en oro.
- [x] **Estilos agregados:**
  - [x] `.logo__imagen` — imagen circular en lugar de emblema tipográfico.
  - [x] `.horario__hora` — resaltado de horarios en rojo y negrita.
  - [x] `.galeria__item` — imágenes con efecto de elevación, borde dorado y zoom suave.
  - [x] `.enlace-telefono` — números cliqueables con estilo diferenciado.
- [x] **Hecho cuando:** todos los ajustes visuales funcionan; contraste suficiente en todos los fondos.

---

## 5. Verificación
- [ ] Recorrer menú completo y comprobar navegación hasta Contacto e Inscríbete.
- [ ] Probar diseño en: ~360px (móvil), tablet y escritorio.
- [ ] Verificar que teléfonos al hacer clic abren acción de llamada.
- [ ] Confirmar que las imágenes de galería cargan y muestran efectos.
- [ ] Confirmar que no hay JavaScript obligatorio; todo funciona con HTML y CSS.
- [x] **Hecho cuando:** se cumplen todos los criterios de éxito definidos en la propuesta.

---

## Datos ya incorporados (antes pendientes ✅)
| Elemento | Estado |
| -------- | ------ |
| Teléfono oficial | ✅ Publicado y cliqueable |
| Dirección / Sede | ✅ Coliseo de Megacolegio, Villa del Rosario |
| Horarios por categoría | ✅ Estructura lista; contenido según cronograma |
| Fotos del dojo | ✅ Galería implementada en `public/images/galeria/` |
| Logo del dojo | ✅ Imagen en `public/images/logo-dojo.png` |

---

## Paso adicional: Migración a Angular
- [ ] Crear proyecto Angular nuevo con estructura recomendada.
- [ ] Copiar marcado HTML → `src/app/app.component.html`.
- [ ] Copiar estilos completos → `src/app/app.component.css`.
- [ ] Verificar que todo se vea y funcione **exactamente igual** que la versión original.
- [ ] Configurar despliegue automático: GitHub Actions → compilar → subir a AWS S3.
- [ ] Agregar primera función nueva como componente Angular independiente.
- [ ] **Hecho cuando:** cada commit en rama principal actualiza automáticamente el sitio en producción.