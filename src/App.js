import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.js';
import Companies from './pages/Companies.js';
import User from './pages/User.js';
import Support from './pages/Support.js';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/support" element={<Support />} />
          
        </Routes>
      </Sidebar>
      
    </BrowserRouter>
  );
};

export default App;