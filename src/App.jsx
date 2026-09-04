import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import TechStack from "./components/TechStack/TechStack";
import About from "./components/About/About";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PageBackdrop from "./components/PageBackdrop";

function App() {
  return (
    <div className="App relative bg-ink min-h-screen">
      <PageBackdrop />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Services />
          <TechStack />
          <About />
          <WhyChooseUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
