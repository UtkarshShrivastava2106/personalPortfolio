import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Work from "./components/Works/Works";
import Footer from "./components/Footer/Footer"
import Screenshot from "./components/Screenshot/Screenshot";
const App = () => {
  //don't forget to add font link in index.html
  return (
    <>
    <Header/>
    <Hero/>
    <Skills/>
    <Work/>
    <Screenshot/>
    <Footer/>
    </>
  )
};

export default App;
