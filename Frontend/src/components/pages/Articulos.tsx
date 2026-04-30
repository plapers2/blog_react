import { useState, useEffect } from "react";

interface Articulo {
  id: number;
  id_categoria: number;
  titulo: string;
  contenido: string;
  fecha: string;
  imagen: string;
  estado: string;
  categoria: string;
}

const Articulos = () => {
  const [articulos, setArticulos] = useState<Articulo[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");
  const urlBase = "https://blog-react-meqb.onrender.com";

  async function consumirApi() {
    const url = `${urlBase}/api/articulos/listartodos`;
    const peticion = await fetch(url);
    const datos = await peticion.json();

    if (datos.status === "success") {
      setArticulos(datos.results);

      const categoriasUnicas = [...new Set(datos.results.map((item: Articulo) => item.categoria))];

      setCategorias(categoriasUnicas);
    }
  }
  async function eliminarArticulo(id: number) {
    const json = await fetch(`${urlBase}/api/articulos/desactivar/${id}`, {
      method: "PUT",
    });

    const response = await json.json();

    if (response.status === "success") {
      setMensaje("Artículo eliminado exitosamente!");
      setTipoMensaje("success");
      consumirApi();
    } else {
      setMensaje("Error al eliminar el artículo");
      setTipoMensaje("error");
    }
  }

  useEffect(() => {
    consumirApi();
  }, []);

  return (
    <>
      {mensaje && (
        <div className="toast toast-top toast-end">
          <div className={`alert ${tipoMensaje === "success" ? "alert-success" : "alert-error"}`}>
            <span>{mensaje}</span>
          </div>
        </div>
      )}
      {categorias.length > 0 ? (
        categorias.map((categoria) => (
          <div key={categoria} className="mb-10">
            <h1 className="text-3xl font-bold mb-5">{categoria}</h1>
            <div className="flex flex-wrap gap-6">
              {articulos
                .filter((articulo) => articulo.categoria === categoria)
                .map((articulo) => (
                  <div
                    key={articulo.id}
                    className="flex-col card bg-base-200/80 w-60 lg:w-70 xl:w-80 2xl:w-96 shadow-sm mb-6 p-5 md:h-130 2xl:h-130"
                  >
                    <figure className="rounded-2xl w-auto h-40 2xl:h-60">
                      <img
                        className="w-auto h-full object-cover"
                        src={`${urlBase}/uploads/${articulo.imagen}`}
                        alt={articulo.titulo}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title grid grid-rows-2">
                        <div>{articulo.titulo}</div>
                        <div>
                          <div className="badge badge-secondary">Nuevo</div>
                        </div>
                      </h2>
                      <p>{articulo.contenido}</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">{articulo.categoria}</div>
                        <div className="badge badge-outline">{new Date(articulo.fecha).toLocaleDateString()}</div>
                        <button onClick={() => eliminarArticulo(articulo.id)} className="btn btn-error">
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))
      ) : (
        <h1>No hay datos!</h1>
      )}
    </>
  );
};

export default Articulos;
