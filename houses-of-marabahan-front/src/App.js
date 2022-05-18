import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateCharacter from './pages/CreateCharacter';
import CreateHouse from './pages/CreateHouse';
import Home from './pages/Home';
import DrivenPlus from './pages/Driven+';

import NavBar from './components/NavBar';
import LeftBar from './components/Sidebar/LeftBar';
import RightBar from './components/Sidebar/RightBar';
//import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <LeftBar />
      <Routes>
        <Route path='/create/character' element={<CreateCharacter />} />
        <Route path='/create/house' element={<CreateHouse />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Driven+' element={<DrivenPlus />} />
      </Routes>
      <RightBar />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
