# Pahch Ch'i - Página Web de Producto Natural de Piña

![Pahch Ch'i Logo](images/Logo.jpg)

## Descripción

Pahch Ch'i es un sitio web que presenta una harina funcional elaborada a base de avena y piña deshidratada, enriquecida con vitamina B12 y vitamina C. El sitio incluye información sobre el producto, sus beneficios nutricionales, proceso de elaboración, usos recomendados e historia.

La aplicación integra un generador de códigos QR que permite acceder al sitio desde dispositivos móviles sin necesidad de tener la página montada en un servidor, facilitando su uso en presentaciones y ferias comerciales.

## Características

- Diseño responsive adaptable a diferentes tamaños de pantalla
- Información detallada del producto y sus beneficios
- Secciones interactivas con animaciones
- Generador de códigos QR para acceso rápido sin servidor
- Galería de imágenes del proceso de elaboración

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Librería QRCode.js
- Font Awesome para iconografía

## Instalación y Uso

1. **Acceso Local**:
   - Descarga o clona este repositorio
   - Abre el archivo `index.html` en cualquier navegador web moderno

2. **Acceso mediante QR**:
   - Abre la aplicación en un navegador
   - Haz clic en el botón de QR en la esquina inferior derecha
   - Escanea el código QR con un dispositivo móvil para acceder desde él

3. **Compartir en una Red Local**:
   ```powershell
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx http-server -p 8000
   ```

## Estructura del Proyecto

```
Piña_Pagina/
│
├── css/                  # Archivos de estilo
│   ├── styles.css
│   ├── hero-animations.css
│   ├── process-modal.css
│   ├── qr-styles.css
│   └── responsive-history.css
│
├── js/                   # Scripts JavaScript
│   ├── script.js
│   ├── qr-generator.js
│   └── lib/
│       └── qrcode.min.js # Librería QR
│
├── images/               # Imágenes y recursos gráficos
│   ├── Logo.jpg
│   ├── Fondo.png
│   └── Producto.png
│
├── index.html            # Página principal
├── .gitignore            # Archivos y directorios ignorados por Git
└── README.md             # Documentación
```

## Navegación

El sitio web está organizado en las siguientes secciones:

1. **Inicio** - Presentación del producto
2. **Producto** - Información detallada y beneficios
3. **Nutrición** - Propiedades nutricionales
4. **Proceso** - Elaboración del producto
5. **Usos** - Formas de consumo recomendadas
6. **Historia** - Origen y desarrollo del producto

## Funcionalidad QR

La función de generación de QR permite:
- Acceder a la página sin necesidad de un servidor web
- Compartir el acceso en redes locales
- Visualizar el contenido en dispositivos móviles escaneando el código

## Contribuir

Si deseas contribuir a este proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`)
4. Sube los cambios a tu rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE.md para más detalles.

## Contacto

Pahch Ch'i - info@pahchchi.com

Enlace del proyecto: [https://github.com/pahchchi/pina-pagina](https://github.com/pahchchi/pina-pagina)