import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PRODUCTS from './pages/products';
import Pdf from './pages/pdf';
import AboutUs from './pages/aboutUs';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/products' element={<PRODUCTS />} />
      <Route path='/products/pdf' element={<Pdf />} />
      <Route path='/about' element={<AboutUs />} />
    </Routes>
  );
}

export default App;
