import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";
import Articulos from "../components/pages/Articulos";
import CrearArticulo from "../components/pages/CrearArticulo";
import Footer from "../components/layout/Footer";
import backgroundImg from "../assets/background_store.jpg";
const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <div className="w-full bg-black">
          <div
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10">
              <Header />
              {/* Contenido del sitio */}

              <main className="p-2">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <section className="p-2  grid md:grid-cols-4 h-auto">
                        <article className="col-span-3 justify-evenly grid md:grid-cols-2 xl:grid-cols-3" id="articulos">
                          <Articulos />
                        </article>
                        <article>
                          <section className="p-2 md:col-span-1 lg:col-span-1 w-full">
                            <section className="md:col-span-1 xl:col-span-1 w-full self-start sticky top-4">
                              <SideBar />
                            </section>
                          </section>
                        </article>
                      </section>
                    }
                  ></Route>
                  <Route
                    path="/creararticulo"
                    element={
                      <section>
                        <CrearArticulo />
                      </section>
                    }
                  ></Route>
                </Routes>
              </main>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
