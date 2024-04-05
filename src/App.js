import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './component/Footer';
import Header from './component/Header';
import ProductAll from './page/ProductAll';
import Carousel from './component/Carousel';

function App() {
  return (
    <div className="wrap">
      <Header />
      <Carousel />
      <ProductAll />
      <Footer />
    </div>
  );
}

export default App;
