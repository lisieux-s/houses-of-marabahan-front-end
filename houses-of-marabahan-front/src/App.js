import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateCharacter from './pages/CreateCharacter';

import NavBar from './components/NavBar';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/create/character' element={<CreateCharacter />} />
      </Routes>
    </BrowserRouter>
  );
}
