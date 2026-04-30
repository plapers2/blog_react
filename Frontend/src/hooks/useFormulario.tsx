import { useState } from "react";
const UseFormulario = (objetoDatos = {}) => {
  const [formulario, setFormulario] = useState(objetoDatos);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");
  const urlBase = "http://localhost:3000/api";
  // Ejemplo:
  const serealizarFormulario = (formulario) => {
    const formData = new FormData(formulario);
    const objetoDatos = {};
    for (const [name, value] of formData) {
      objetoDatos[name] = value;
    }
    return objetoDatos;
  };

  // Ejemplo:
  const obtenerDatos = (e) => {
    e.preventDefault();
    const datos = serealizarFormulario(e.target);
    setFormulario(datos);
  };

  // Segun lo que investigue, para estas dos funciones anteriores no hay necesidad de usarlas cuando se sube un archivo (en este caso)

  const cambiado = ({ target }) => {
    const { name, value, files } = target;
    setFormulario({
      ...formulario,
      [name]: files ? files[0] : value,
    });
  };

  const guardarArticulo = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("titulo", formulario.titulo);
    formData.append("contenido", formulario.contenido);
    formData.append("imagen", formulario.imagen);
    formData.append("categoria_id", formulario.categoria_id);

    const peticion = await fetch(`${urlBase}/articulos/crear`, {
      method: "POST",
      body: formData,
    });

    const resultado = await peticion.json();
    if (resultado.status === "success") {
      setMensaje("Artículo creado correctamente");
      setTipoMensaje("success");
    } else {
      setMensaje("Error al crear el artículo");
      setTipoMensaje("error");
    }
  };

  return { formulario, obtenerDatos, cambiado, guardarArticulo, mensaje, tipoMensaje };
};

export default UseFormulario;
