import { useState } from "react";
import FormProducto from "./FormProducto";

const formularioInicial = {
  nombre: "",
  precio: "",
  stock: "",
};

const FormProductoContainer = () => {
  const [datosForm, setDatosForm] = useState(formularioInicial);
  const [cargando, setCargando] = useState(false);
  const [imagen, setImagen] = useState(null);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosForm({ ...datosForm, [name]: value });
  };

  const manejarCambioImagen = (evento) => {
    setImagen(evento.target.files?.[0] ?? null);
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    if (!imagen) {
      alert("Por favor, selecciona una imagen para el producto.");
      return;
    }

    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
    if (!apiKey) {
      alert("Configura VITE_IMGBB_API_KEY en el archivo .env.local.");
      return;
    }

    setCargando(true);
    const formData = new FormData();
    formData.append("image", imagen);

    try {
      console.log("Subiendo imagen a ImgBB...");
      const respuestaImgbb = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const datosImgbb = await respuestaImgbb.json();
      if (datosImgbb.success) {
        console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);

        const productoCompleto = {
          ...datosForm,
          urlImagen: datosImgbb.data.url,
        };

        console.log(
          "Enviando los siguientes datos COMPLETOS a la API:",
          productoCompleto,
        );
      } else {
        throw new Error("La subida de la imagen a ImgBB falló.");
      }
    } catch (error) {
      console.error("Error en el proceso de envío:", error);
      alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <FormProducto
      manejarCambio={manejarCambio}
      manejarCambioImagen={manejarCambioImagen}
      manejarEnvio={manejarEnvio}
      datosForm={datosForm}
      archivoImagen={imagen}
      cargando={cargando}
    />
  );
};

export default FormProductoContainer;
