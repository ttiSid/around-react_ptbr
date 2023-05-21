import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <PopupWithForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
