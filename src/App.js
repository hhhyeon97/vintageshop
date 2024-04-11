import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nes.css/css/nes.min.css';
import Footer from './component/Footer';
import Header from './component/Header';
import ProductAll from './page/ProductAll';
import { Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';

function App() {
  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
