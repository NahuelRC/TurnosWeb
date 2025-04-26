import { useState } from 'react'
import Header from './pages/header.jsx'
import Dashboard from './pages/Dashboard.jsx';
import Clases from './pages/Clases.jsx';
import Alumnos from './pages/Alumnos.jsx';
import Profesores from './pages/Profesores.jsx';
import Pagos from './pages/Pagos.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Login from './pages/Login.jsx';

function AppContent() {
  const location = useLocation();
  const hideHeaderOnPaths = ["/login"]; // Podés agregar más rutas si querés ocultar el header
  const isAuthenticated = !!localStorage.getItem('token'); // Verificás si hay un token en el localStorage

  return (
    <>
      {!hideHeaderOnPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login />} />
        <Route path="/clases" element={isAuthenticated ? <Clases /> : <Login />} />
        <Route path="/alumnos" element={isAuthenticated ? <Alumnos /> : <Login />} />
        <Route path="/profesores" element={isAuthenticated ? <Profesores /> : <Login />} />
        <Route path="/pagos" element={isAuthenticated ? <Pagos /> : <Login />} />
      </Routes>
    </>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <AppContent />
      </Router>

    </>
  )
}

export default App
