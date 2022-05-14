import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateCharacter from './pages/CreateCharacter';
import CreateHouse from './pages/CreateHouse';

import NavBar from './components/NavBar';
import LeftBar from './components/Sidebar/LeftBar';
import RightBar from './components/Sidebar/RightBar';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <LeftBar />
      <Routes>
        <Route path='/create/character' element={<CreateCharacter />} />
        <Route path='/create/house' element={<CreateHouse />} />
      </Routes>
      <RightBar />
    </BrowserRouter>
  );
}
