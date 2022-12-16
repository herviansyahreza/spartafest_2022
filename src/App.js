import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./beranda"
import Login from "./login"
import Perorangan from "./pribadi"
import Register from "./register"
import Berhasil from './berhasil';
import Ketua from './ketua';
import Finish from './finish';
import AnggotaDua from './anggotadua';
import AnggotaSatu from './anggotasatu';
import First from './first';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<First />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/beranda' element={<Beranda />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/perorangan' element={<Perorangan />} />
          <Route exact path='/ketua' element={<Ketua />} />
          <Route exact path='/anggotasatu' element={<AnggotaSatu />} />
          <Route exact path='/anggotadua' element={<AnggotaDua />} />
          <Route exact path='/finish' element={<Finish />} />
          <Route exact path='/berhasil' element={<Berhasil />} />
        </Routes>
      </BrowserRouter>
    </div>

  
  )
}

export default App
