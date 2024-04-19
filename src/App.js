import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nes.css/css/nes.min.css';
import Footer from './component/Footer';
import Header from './component/Header';
import ProductAll from './page/ProductAll';
import { Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log('aaa', authenticate);
  }, [authenticate]);

  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path="/buy"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
