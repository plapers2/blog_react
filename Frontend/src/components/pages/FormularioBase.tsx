import { useEffect, useState } from "react";
import UseFormulario from "../../hooks/useFormulario.tsx";
interface Categoria {
  id: number;
  nombre: string;
}
const FormularioBase = () => {
  const { cambiado, guardarArticulo, mensaje, tipoMensaje } = UseFormulario();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const urlBase = "https://blog-react-meqb.onrender.com";



  async function cargarCategorias() {
    const response = await fetch(`${urlBase}/api/articulos/listarCategorias`);
    const datos = await response.json();
    if (datos.status === "success") {
      setCategorias(datos.results);
    }
  }
  useEffect(() => {
    cargarCategorias();
  }, []);



  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-70 md:w-lg lg:w-2xl xl:w-4xl border p-4 mt-40 mb-40">
        {mensaje && (
          <div className="toast toast-top toast-end">
            <div className={`alert ${tipoMensaje === "success" ? "alert-success" : "alert-error"}`}>
              <span>{mensaje}</span>
            </div>
          </div>
        )}
        <form onSubmit={guardarArticulo}>
          <legend className="fieldset-legend text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 flex justify-center">
            Crear un articulo
          </legend>
          <label className="label text-lg">Titulo</label>
          <input type="text" className="input w-full" placeholder="Titulo" id="titulo" name="titulo" onChange={cambiado} />
          <label className="label text-lg">Contenido</label>
          <textarea className="textarea w-full" placeholder="Contenido" id="contenido" name="contenido" onChange={cambiado}></textarea>
          <input type="file" className="file-input mt-5 w-full" id="imagen" name="imagen" onChange={cambiado} />
          <label className="label text-lg">Categoria</label>
          <select name="categoria_id" id="categoria_id" className="select w-full" onChange={cambiado}>
            <option value="">Selecciona una categoria</option>
            {categorias.length > 0 ? (
              categorias.map((element) => (
                <option key={element.id} value={element.id}>
                  {element.nombre}
                </option>
              ))
            ) : (
              <option value="">No hay categorias disponibles</option>
            )}
          </select>
          <div className="justify-center items-center flex">
            <button className="btn btn-neutral mt-4 w-40">Crear</button>
          </div>
        </form>
      </fieldset>
    </>
  );
};

export default FormularioBase;
