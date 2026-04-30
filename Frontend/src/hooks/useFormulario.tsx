import { useState } from "react";

interface Formulario {
  titulo?: string;
  contenido?: string;
  imagen?: File | null;
  categoria_id?: string;
}

const UseFormulario = (objetoDatos: Formulario = {}) => {
  const [Formulario, setFormulario] = useState<Formulario>(objetoDatos);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");
  const urlBase = "https://blog-react-meqb.onrender.com/api";

  // Ejemplo:
  const serealizarFormulario = (formularioHtml: HTMLFormElement) => {
    const formData = new FormData(formularioHtml);
    const objetoDatos: Record<string, FormDataEntryValue> = {};
    for (const [name, value] of formData) {
      objetoDatos[name] = value;
    }
    return objetoDatos;
  };

  // Ejemplo:
  const obtenerDatos = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const datos = serealizarFormulario(e.currentTarget);
    console.log(datos);
  };

  // Segun lo que investigue, para estas dos funciones anteriores no hay necesidad de usarlas cuando se sube un archivo (en este caso)

  const cambiado = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, files } = target;

    setFormulario({
      ...Formulario,
      [name]: files ? files[0] : value,
    });
  };

  const guardarArticulo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("titulo", Formulario.titulo || "");
    formData.append("contenido", Formulario.contenido || "");

    if (Formulario.imagen) {
      formData.append("imagen", Formulario.imagen);
    }

    formData.append("categoria_id", Formulario.categoria_id || "");

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

  return { Formulario, obtenerDatos, cambiado, guardarArticulo, mensaje, tipoMensaje };
};

export default UseFormulario;
