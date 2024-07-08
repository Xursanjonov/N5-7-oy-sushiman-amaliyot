import { memo } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

const App = () => {
  return (
    <div className="">
      <Header />
      <main className="main">
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default memo(App);
