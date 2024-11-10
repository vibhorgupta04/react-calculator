import Navbar from "./component/Navbar";
import Calculator from "./component/Calculator";
import Footer from "./component/Footer";

function App() {
  return (
    <div
      className="font-sans"
      style={{
        height: "100vh",
        overflow: "scroll",
      }}
    >
      <Navbar />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
