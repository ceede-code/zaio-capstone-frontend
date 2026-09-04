// import './App.css';
// import Home from './pages/HomePage'; 

// function App() {
//   return (
//     <div className="App">
//      <Home/>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import LocationDetailsPage from './pages/LocationDetailsPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ListingFormPage from './pages/ListingFormPage';

// Simple ProtectedRoute check
const Protected = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<LocationPage />} />
        <Route path="/locations/:id" element={<LocationDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/admin" element={
          <Protected><AdminDashboardPage /></Protected>
        } />
        <Route path="/admin/create" element={
          <Protected><ListingFormPage /></Protected>
        } />
        <Route path="/admin/edit/:id" element={
          <Protected><ListingFormPage /></Protected>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
