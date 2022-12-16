import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./beranda"
import Kelompok from "./kelompok"
import Login from "./login"
import Perorangan from "./pribadi"
import Register from "./register"
import Berhasil from './berhasil';
import Ketua from './ketua';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/beranda' element={<Beranda />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/perorangan' element={<Perorangan />} />
          <Route exact path='/kelompok' element={<Kelompok />} />
          <Route exact path='/ketua' element={<Ketua />} />
          <Route exact path='/berhasil' element={<Berhasil />} />
        </Routes>
      </BrowserRouter>
    </div>

  
  )
}

export default App
