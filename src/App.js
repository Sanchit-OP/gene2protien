import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PRODUCTS from './pages/products';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/aboutUs';
import PCR from './pages/pcr';
import Modify from './pages/modify';
import Purification from './pages/Purification';
import Restriction from './pages/Restriction';
import RNA from './pages/RNA';
import Ladder from './pages/Ladder';
import DNTP from './pages/DNTP';
import Primers from './pages/Primers';
import Buffers from './pages/Buffers';
import Instrument from './pages/Instrument';
import Flu from './pages/Flu';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/products' element={<PRODUCTS />} />
      <Route path='/products/pcr' element={<PCR />} />
      <Route path='/Contact' element={<ContactUs />} />
      <Route path='/About' element={<AboutUs />} />
      <Route path='/products/restriction'element={<Restriction />} />
      <Route path='/products/modifying'element={<Modify />} />
      <Route path='/products/purification'element={<Purification />} />
      <Route path='/products/rna'element={<RNA />} />
      <Route path='/products/ladder'element={<Ladder/>} />
      <Route path='/products/Dntps'element={<DNTP />} />
      <Route path='/products/primers'element={<Primers />} />
      <Route path='/products/buffers'element={<Buffers />} />
      <Route path='/products/instrument'element={<Instrument />} />
      <Route path='/products/flur'element={<Flu />} />
    </Routes>
  );
}

export default App;
