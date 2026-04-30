import logo from "../../assets/react.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className="grid grid-cols-2 md:grid-cols-4">
        <div className="bg-transparent text-white p-7 shadow-2xs md:col-span-1">
          <div className="flex justify-center items-center">
            <img src={logo} alt="Logo" />
          </div>
          <div className="text-center">
            <p className="ml-2 text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl text-shadow-2xs">Nexus Gaming Store</p>
          </div>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default Header;
