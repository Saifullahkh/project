import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import Feature from './pages/Feature';
import Products from './pages/Products';
import Service from './pages/Service';
import Testimonial from './pages/Testimonial';
import Faq from './pages/Faq';
import Footer from './component/Footer';



function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <Feature />
     <Products />
     <Testimonial />
     <Service />
     <Faq />
     <Footer />
    </div>
  );
}

export default App;
