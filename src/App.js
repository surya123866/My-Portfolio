import "./App.scss";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
// import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
