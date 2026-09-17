# Tareas: Dojo Doryokukan — Sitio Web
Orden de ejecución. Cada ítem es comprobable.
Referencias: [proposal.md](./proposal.md), [design.md](./design.md).
---
## 1. Documentación
- [x] Reescribir `proposal.md` con identidad real del dojo (sensei, SKIF, público, valores, alcance).
- [x] Reescribir `design.md` con paleta, archivos, mapa de secciones/anclas y decisiones de diseño.
- [x] **Actualizar `design.md` con ajustes recientes:** logo con imagen, teléfonos cliqueables, horarios resaltados, galería con widget de Instagram, sección Inscripciones independiente, redes sociales con íconos, botón flotante WhatsApp.
- [x] **Actualizar `design.md` con arquitectura de componentes Angular 22:** estructura de carpetas, patrón de división, reglas de anclas y rutas.
- [x] Reescribir esta lista alineada al diseño nuevo.
- [x] **Hecho cuando:** los tres archivos coinciden entre sí y con los datos reales del dojo.
---
## 2. Base y Migración a Angular
- [x] Crear proyecto Angular nuevo con estructura recomendada.
- [x] Copiar marcado HTML → `src/app/app.component.html`.
- [x] Copiar estilos completos → `src/app/app.component.css`.
- [x] Título y meta descripción optimizados: ubicación y palabras clave agregadas en `index.html`.
- [x] Configurar despliegue automático: GitHub Actions → `ng build` → subir a AWS S3 + CloudFront.
- [ ] Verificar que todo se vea y funcione **exactamente igual** que la versión original.
- [ ] **Hecho cuando:** `ng serve` abre el sitio completo sin errores; cada commit en `main` actualiza producción automáticamente.
---
## 3. Reestructuración: División en Componentes
- [x] Definir estructura de componentes en `design.md`.
- [ ] Ejecutar generación de componentes:
  - [ ] `ng generate component components/header-nav`
  - [ ] `ng generate component components/hero-section`
  - [ ] `ng generate component components/about-section`
  - [ ] `ng generate component components/classes-section`
  - [ ] `ng generate component components/values-section`
  - [ ] `ng generate component components/schedule-section`
  - [ ] `ng generate component components/gallery-section`
  - [ ] `ng generate component components/team-section`
  - [ ] `ng generate component components/enrollment-section`
  - [ ] `ng generate component components/site-footer`
- [ ] Extraer y mover contenido a cada componente:
  - [ ] `<header>` → `header-nav.component.html` + estilos específicos
  - [ ] `<section id="inicio">` → `hero-section.component.html` + estilos específicos
  - [ ] `<section id="nosotros">` → `about-section.component.html` + estilos específicos
  - [ ] `<section id="clases">` → `classes-section.component.html` + estilos específicos
  - [ ] `<section id="valores">` → `values-section.component.html` + estilos específicos
  - [ ] `<section id="cronograma">` → `schedule-section.component.html` + estilos específicos
  - [ ] `<section id="galeria">` → `gallery-section.component.html` + estilos específicos
  - [ ] `<section id="atletas">` → `team-section.component.html` + estilos específicos
  - [ ] `<section id="inscripciones">` → `enrollment-section.component.html` + estilos específicos
  - [ ] `<footer>` → `site-footer.component.html` + estilos específicos
- [ ] Limpiar `app.component.html` → dejar solo etiquetas de componentes + `<router-outlet />`
- [ ] Consolidar estilos globales en `app.component.css`: `:root`, reseteos, `.envoltorio`, `.rejilla`, `.tarjeta`, `.boton`
- [ ] **Hecho cuando:** el sitio se ve IDÉNTICO y funciona igual que antes; todas las anclas (`#inicio`, `#nosotros`, etc.) navegan correctamente.
---
## 4. Mejoras y Funcionalidades Nuevas
- [ ] **Botones redondeados + interacción:**
  - [ ] Aplicar `border-radius: 8px` a todos los botones
  - [ ] Botón rojo: `hover` → `#B71C1C` + elevación + sombra
  - [ ] Botón dorado: `hover` → fondo `#C9A227` + texto `#000` + elevación + sombra
  - [ ] Transición `all 0.3s ease` en estados
- [ ] **Sección "Nuestros Senseis" ampliada:**
  - [ ] Agregar segunda tarjeta dentro de `about-section`
  - [ ] Incluir foto, nombre, grado, experiencia, logros y biografía del segundo instructor
  - [ ] Diseño: dos tarjetas lado a lado en escritorio, apiladas en móvil
- [ ] **Video de fondo en portada:**
  - [ ] Optimizar video corto (5–10s, sin audio, ≤ 5MB) → `public/videos/hero-bg.mp4`
  - [ ] Agregar elemento `<video>` dentro de `hero-section`
  - [ ] Aplicar desenfoque `blur(4px)` + capa oscura con matiz rojo sobre el video
  - [ ] Imagen estática de respaldo en móvil para ahorrar datos
- [ ] **Imágenes ampliables (Lightbox):**
  - [ ] Agregar clase e ícono de lupa a imágenes de tarjetas
  - [ ] Modal de imagen ampliada: abrir centrado, fondo oscuro
  - [ ] Cerrar con botón X, clic fuera y tecla ESC
  - [ ] Bloquear desplazamiento de página mientras modal está abierto
- [ ] **Hecho cuando:** cada mejora funciona sin romper el resto; comportamiento consistente en móvil y escritorio.
---
## 5. Verificación Final
- [ ] Recorrer menú completo y comprobar navegación por anclas.
- [ ] Probar diseño en: ~360px (móvil), tablet y escritorio.
- [ ] Verificar que teléfonos al hacer clic abren llamada.
- [ ] Confirmar que widget de Instagram carga correctamente.
- [ ] Confirmar que todos los enlaces externos abren en pestaña nueva con `rel="noopener"`.
- [ ] Ejecutar `ng test` → todas las pruebas pasan.
- [ ] Revisar despliegue en producción: no hay archivos rotos ni rutas incorrectas.
- [ ] **Hecho cuando:** el sitio está listo y estable; se puede compartir públicamente sin reservas.
---
## ✅ Datos Base Confirmados
| Elemento | Estado |
| -------- | ------ |
| Identidad del dojo | ✅ Doryokukan — SKIF Colombia |
| Sensei principal | ✅ Ernesto Márquez |
| Ubicación | ✅ Coliseo de Megacolegio, Villa del Rosario |
| Teléfono / WhatsApp | ✅ +57 305 240 3346 |
| Redes sociales | ✅ Instagram · Facebook · YouTube |
| Afiliaciones | ✅ SKIF Internacional · WKF |
| Horarios base | ✅ Definidos por categoría |
| Imágenes del dojo | ✅ En `public/images/` referenciadas correctamente |