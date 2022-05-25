import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HousesOfMarabahan from './pages/HousesOfMarabahan';
import CreateHouse from './pages/CreateHouse';
import CreateCharacter from './pages/CreateCharacter';
import Home from './pages/Home';
import DrivenPlus from './pages/Driven+';
import Mikaila from './pages/Mikaila';

import Items from './pages/CreatorPages/Items';
import Kinds from './pages/CreatorPages/Kinds';

import NavBar from './components/NavBar';
import LeftBar from './components/Sidebar/LeftBar';
import RightBar from './components/Sidebar/RightBar';

import { AuthProvider } from './contexts/AuthContext';
import { HouseProvider } from './contexts/HouseContext';
import { CharacterProvider } from './contexts/CharacterContext';
import { InteractProvider } from './contexts/InteractContext';

export default function App() {
  return (
    <AuthProvider>
      <HouseProvider>
        <CharacterProvider>
          <InteractProvider>
            <BrowserRouter>
              <NavBar />
              <LeftBar />
              <Routes>
                <Route path='/' element={<HousesOfMarabahan />} />
                <Route path='/create/house' element={<CreateHouse />} />
                <Route path='/create/character' element={<CreateCharacter />} />
                <Route path='/home' element={<Home />} />
                <Route path='/Driven+' element={<DrivenPlus />} />
                <Route path='/items' element={<Items />} />
                <Route path='/kinds' element={<Kinds />} />
                <Route path='/mikaila' element={<Mikaila />} />
              </Routes>
              <RightBar />
            </BrowserRouter>
          </InteractProvider>
        </CharacterProvider>
      </HouseProvider>
    </AuthProvider>
  );
}
