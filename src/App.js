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
import Services from './pages/services';
import Cgene from './Components/services/cgene';
import SiteDirected from './Components/services/sitedirected';
import Cpeptide from './Components/services/cpeptide';
import LibConst from './Components/services/libconst';
import PrimerService from './Components/services/primerservice';
import Protein from './Components/services/protien';
import Recombination from './Components/services/recombinant';
import CantiBody from './Components/services/cantibody';
import PolyCl from './Components/services/Antibody/polycl';
import MonoCl from './Components/services/Antibody/monocl';
import Phospho from './Components/services/Antibody/phospho';
import Other from './Components/services/Antibody/other';
import Resources from './pages/Resources';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/products' element={<PRODUCTS />} />
      <Route path='/products/pcr' element={<PCR />} />
      <Route path='/Contact' element={<ContactUs />} />
      <Route path='/About' element={<AboutUs />} />
      <Route path='/products/restriction' element={<Restriction />} />
      <Route path='/products/modifying' element={<Modify />} />
      <Route path='/products/purification' element={<Purification />} />
      <Route path='/products/rna' element={<RNA />} />
      <Route path='/products/ladder' element={<Ladder />} />
      <Route path='/products/Dntps' element={<DNTP />} />
      <Route path='/products/primers' element={<Primers />} />
      <Route path='/products/buffers' element={<Buffers />} />
      <Route path='/products/instrument' element={<Instrument />} />
      <Route path='/products/flur' element={<Flu />} />
      <Route path='/Resources' element={<Resources />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Services/Custom_Gene' element={<Cgene />} />
      <Route path='/Services/Site_Directed' element={<SiteDirected />} />
      <Route path='/Services/Peptide' element={<Cpeptide />} />
      <Route path='/Services/Custom_AntiBody' element={<CantiBody />} />
      <Route path='/Services/Recombinant' element={<Recombination />} />
      <Route path='/Services/PrimerService' element={<PrimerService />} />
      <Route path='/Services/Library_Construction' element={<LibConst />} />
      <Route path='/Services/Protein' element={<Protein />} />
      <Route path="/Services/Custom_AntiBody/PolyCl" element={<PolyCl />} />
      <Route path="/Services/Custom_AntiBody/MonoCl" element={<MonoCl />} />
      <Route path="/Services/Custom_AntiBody/Phospho" element={<Phospho />} />
      <Route path="/Services/Custom_AntiBody/Other" element={<Other />} />
    </Routes>
  );
}

export default App;
