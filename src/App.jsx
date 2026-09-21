import Header from "./components/Header";
import Hero from "./components/Hero";
// import ProductGrid from './components/ProductGrid';
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Banner from "../src/banners/banner1";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <ProductGrid /> */}
      <Testimonials />
      <Banner />

      <Footer />
    </div>
  );
}

export default App;
