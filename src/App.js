import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PRODUCTS from './pages/products';
import Pdf from './pages/pdf';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/aboutUs';
import PCR from './pages/pcr';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/products' element={<PRODUCTS />} />
      <Route path='/products/pdf' element={<Pdf />} />
      <Route path='/products/pcr' element={<PCR />} />
      <Route path='/Contact' element={<ContactUs />} />
      <Route path='/About' element={<AboutUs />} />
    </Routes>
  );
}

export default App;
