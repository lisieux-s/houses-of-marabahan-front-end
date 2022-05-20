import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateCharacter from './pages/CreateCharacter';
import CreateHouse from './pages/CreateHouse';
import Home from './pages/Home';
import DrivenPlus from './pages/Driven+';

import Items from './pages/CreatorPages/Items';
import Kinds from './pages/CreatorPages/Kinds';

import NavBar from './components/NavBar';
import LeftBar from './components/Sidebar/LeftBar';
import RightBar from './components/Sidebar/RightBar';

import { AuthProvider } from './contexts/AuthContext';
import { HouseProvider } from './contexts/HouseContext';
//import Footer from './components/Footer';

export default function App() {
  return (
    <AuthProvider>
      <HouseProvider>
        <BrowserRouter>
          <NavBar />
          <LeftBar />
          <Routes>
            <Route path='/create/character' element={<CreateCharacter />} />
            <Route path='/create/house' element={<CreateHouse />} />
            <Route path='/home' element={<Home />} />
            <Route path='/Driven+' element={<DrivenPlus />} />
            <Route path='/items' element={<Items />} />
            <Route path='/kinds' element={<Kinds />} />
          </Routes>
          <RightBar />
          {/* <Footer /> */}
        </BrowserRouter>
      </HouseProvider>
    </AuthProvider>
  );
}
