import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nes.css/css/nes.min.css';
import Footer from './component/Footer';
import Header from './component/Header';
import ProductAll from './page/ProductAll';
import { Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Payment from './page/Payment';

function App() {
  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/buy" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
