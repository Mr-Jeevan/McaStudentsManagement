import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Sidebar from './components/layout/sidebar';
import Header from './components/layout/header';
import Home from './components/Home/Home';
import Mca_2 from './components/Mca_2/Mca_2';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="d-flex" id="wrapper">
          {/* <Sidebar /> */}
          <div className=' w-100' id="page-content-wrapper" >
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Mca_2" element={<Mca_2 />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

