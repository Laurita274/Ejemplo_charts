# 📊 Dashboard y Visualización de Gráficas

Una aplicación web interactiva desarrollada para la visualización de datos, métricas y estadísticas mediante gráficos dinámicos, con una interfaz moderna, responsiva y alertas personalizadas.

## 🚀 Características Principales

* **Panel de Control (Dashboard):** Vista dedicada (`dashboard.html`) para el monitoreo rápido de indicadores y métricas clave.
* **Gráficos Interactivos:** Implementación de visualizaciones dinámicas utilizando **Chart.js**.
* **Diseño Responsivo:** Interfaz adaptable a dispositivos móviles y de escritorio construida con **Bootstrap**.
* **Notificaciones Modernas:** Alertas interactivas y ventanas modales integradas con **SweetAlert2**.
* **Iconografía Vectorial:** Uso de gráficos vectoriales ligeros (`.svg`) y optimizados (`.webp`) para una carga rápida.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica de las vistas (`index.html` y `dashboard.html`).
* **CSS3 & Bootstrap:** Estilos personalizados (`style.css`) combinados con el framework Bootstrap.
* **JavaScript (Vanilla):** Lógica de la aplicación, manejo de eventos y configuración de datos (`app.js`).
* **Librerías Externas (incluidas en local):**
  * [Chart.js](https://www.chartjs.org/) (`chart.umd.min.js`) - Renderizado de gráficas.
  * [SweetAlert2](https://sweetalert2.github.io/) (`sweetalert2@11.js`) - Alertas emergentes.
  * [Bootstrap](https://getbootstrap.com/) (`bootstrap.min.js` / `bootstrap.min.css`) - Componentes y sistema de grillas.

## 📂 Estructura del Proyecto

El repositorio está organizado de la siguiente manera:

```text
graficas/
├── css/
│   ├── bootstrap.css          # Estilos base de Bootstrap
│   ├── bootstrap.min.css      # Estilos de Bootstrap minificados
│   ├── style.css              # Estilos personalizados del proyecto
│   └── sweetalert2.min.css    # Estilos para las alertas
├── img/
│   ├── alert.svg              # Icono de alerta
│   ├── cake.svg               # Icono de gráfico circular/pastel
│   ├── dashboard.svg          # Icono del panel principal
│   ├── home.svg               # Icono de inicio
│   ├── icono.webp             # Favicon o logotipo principal optimizado
│   ├── star.svg               # Icono de destacados
│   └── text.svg               # Icono de reportes/texto
├── js/
│   ├── app.js                 # Lógica principal e inicialización de gráficas
│   ├── bootstrap.min.js       # Scripts de componentes Bootstrap
│   ├── chart.umd.min.js       # Librería Chart.js
│   └── sweetalert2@11.js      # Librería SweetAlert2
├── dashboard.html             # Vista del panel de estadísticas
└── index.html                 # Página principal de la aplicación
```

## 🔧 Instalación y Uso

Dado que todas las dependencias (Bootstrap, Chart.js, SweetAlert2) están incluidas localmente dentro del proyecto, **no necesitas instalar paquetes adicionales ni conexión a internet** para ejecutarlo.

1. **Clona este repositorio** o descarga y descomprime el archivo `graficas.zip`:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. **Navega a la carpeta del proyecto:**
   ```bash
   cd graficas
   ```
3. **Ejecuta la aplicación:**
   * Abre el archivo `index.html` directamente en tu navegador web preferido (Chrome, Firefox, Edge, etc.).
   * *(Opcional)* Si utilizas Visual Studio Code, puedes abrirlo con la extensión **Live Server** para un entorno de desarrollo más cómodo.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto:

1. Haz un *Fork* del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-grafica`).
3. Realiza tus cambios y haz *Commit* (`git commit -m 'Agrega nueva gráfica de barras'`).
4. Haz *Push* a la rama (`git push origin feature/nueva-grafica`).
5. Abre un *Pull Request*.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles (o edita esta sección según la licencia que prefieras utilizar).
