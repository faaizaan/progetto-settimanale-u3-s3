import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import PrimaParte from "./components/PrimaParte";
import NuoveUscite from "./components/NuoveUscite";
import AltroDaEsplorare from "./components/AltroDaEsplorare";
import BarraSinistra from "./components/BarraSinistra";
import Footer from "./components/Footer";
import MobilePlayer from "./components/MobilePlayer";

function App() {
  return (
    <>
      <div className="d-none d-md-block">
        <div className="d-flex">
          <div className="d-none d-md-block" style={{ width: "500px" }}>
            <BarraSinistra />
          </div>

          <div className="flex-grow-1">
            <div className="d-block d-md-none">
              <NavBar />
            </div>

            <div className="d-none d-md-block">
              <NavBar />
            </div>

            <div>
              <Header title="Novità" />
              <PrimaParte />
              <NuoveUscite />
              <AltroDaEsplorare />
              <Footer />
            </div>
          </div>
        </div>
      </div>
      {/* solo per mobile */}
      <div className="d-block d-md-none">
        <NavBar />
        <Header />
        <PrimaParte />
        <NuoveUscite />
        <AltroDaEsplorare />
        <Footer />
        <MobilePlayer />
      </div>
    </>
  );
}

export default App;
