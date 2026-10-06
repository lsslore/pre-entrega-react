# PRE-ENTREGA - REACT JS CON VITE - Talento Tech 

Tienda de tecnología desarrollada con React y Vite. El proyecto permite recorrer un catálogo, consultar el detalle de productos y navegar entre las secciones de la tienda.

## Consignas

### 1. Estructura y layout

- El código está organizado en `src/components` y `src/pages`.
- `Layout.jsx` comparte el encabezado, la navegación, el contenido de cada ruta mediante `<Outlet />` y el pie de página.
- El footer incluye datos de contacto y sede, una sección visual de newsletter, privacidad, términos, propiedad intelectual y tres tarjetas de integrantes.

### 2. Catálogo desde datos locales

- `ItemListContainer.jsx` usa `useEffect` y `fetch` para cargar directamente `public/data/productos.json`.
- `ProductDetail.jsx` también consulta el JSON para mostrar el producto de la ruta seleccionada.
- `ItemList.jsx` muestra la colección y reutiliza `Item.jsx`, que recibe los datos de cada producto por props.

### 3. Navegación

La aplicación usa `react-router-dom`. `main.jsx` configura `BrowserRouter`, `App.jsx` declara las rutas y el componente de navegación usa `<Link>` para moverse sin recargar la página.

| Ruta                     | Vista                  |
| ------------------------ | ---------------------- |
| `/`                      | Inicio / bienvenida    |
| `/productos`             | Catálogo               |
| `/producto/:id`          | Detalle de un producto |
| `/carrito`               | Carrito                |
| `/admin/productos/nuevo` | Formulario de producto |

## Formulario de producto

En `/admin/productos/nuevo` se ingresan nombre, precio y stock, y se selecciona una imagen desde la computadora. Al enviar, el formulario sube la imagen a ImgBB y muestra en la consola la URL y los datos del producto, simulando el envío a una API.

**Importante:** el producto no se guarda ni se envía a una API de productos; solo se simula ese paso con `console.log`. La subida de la imagen a ImgBB sí es real.

Para habilitar la subida:

1. Copiar `.env.example` como `.env.local`.
2. En `.env.local`, completar `VITE_IMGBB_API_KEY` con una clave propia de ImgBB.
3. Reiniciar el servidor de desarrollo.

`.env.local` está excluido por la regla `*.local` de `.gitignore`; `.env.example` se puede compartir sin incluir la clave. Como las variables `VITE_` se incorporan al frontend, esta configuración sirve para la práctica y no protege la clave frente a quienes inspeccionen la aplicación desplegada.

## Dependencias

- **Aplicación:** React, React DOM y React Router DOM.
- **Desarrollo:** Vite, plugin de React para Vite, ESLint y sus plugins.
- **Estilos:** CSS y CSS Modules.

Se requiere Node.js y pnpm. Desde la carpeta del proyecto, instala las dependencias declaradas en `package.json` y `pnpm-lock.yaml`:


## Comandos del proyecto

```bash

- pnpm install
# Descarga e instala todas las dependencias y librerías.

- pnpm run dev
# Inicia el servidor de desarrollo local de Vite.

- pnpm add react-router-dom
# Instala y agrega la librería React Router.

```

## Estructura principal

```text
public/data/productos.json             Datos iniciales del catálogo
src/App.jsx                            Definición de rutas
src/components/layout/                 Layout, encabezado, navegación y footer
src/components/products/               Catálogo, tarjetas y formulario
src/pages/                              Inicio, detalle y carrito
```

## Alcance actual

El catálogo y el detalle leen los productos de `public/data/productos.json`. El formulario sube la imagen a ImgBB y simula el envío del producto por consola; no lo guarda en el catálogo. El contador y los favoritos son controles visuales y no se conservan al recargar. La página del carrito existe, pero todavía no administra productos agregados.
