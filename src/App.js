import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AppointmentScheduler from './components/AppointmentScheduler';
import Appointments from './components/Appointments';
import Notifications from './components/Notifications';
import Donors from './components/Donors';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/appointment" element={<AppointmentScheduler />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
};

const NotFound = () => (
  <div>
    <h2>404 - Page Not Found</h2>
  </div>
);

export default App;
