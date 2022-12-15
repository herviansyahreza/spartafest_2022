// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// export default function App() {
//   return (
//     <h1 className="text-3xl text-red-600 font-bold underline">
//       Hello world!
//     </h1>
//   )
// }
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./beranda"
import Kelompok from "./kelompok"
import Login from "./login"
import Perorangan from "./pribadi"
import Register from "./register"


// function App() {
//   return
//   <Login/>
//   // <div className="App">
//   //   <BrowserRouter>
//   //     <Routes>
//   //       <Route path='/' element={<Login />} />
//   //       <Route path='register' element={<Register />} />
//   //       <Route path='beranda' element={<Beranda />} />
//   //       <Route path='perorangan' element={<Perorangan />} />
//   //       <Route path='kelompok' element={<Kelompok />} />
//   //     </Routes>
//   //   </BrowserRouter>
//   // </div >
// }

// export default App
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/beranda' element={<Beranda />} />
          <Route exact path='/daftar' element={<Register />} />
          <Route exact path='/perorangan' element={<Perorangan />} />
          <Route exact path='/kelompok' element={<Kelompok />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App