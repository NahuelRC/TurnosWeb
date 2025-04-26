import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://www.walkerstooltrip.com/ds/api/0.1/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login exitoso:', data);
        setMensaje('¡Login exitoso!');
        localStorage.setItem('token', data.token); // Guardás el token
        setMensaje('¡Login exitoso!');
        navigate('/'); // Redirigir a la página principal o dashboard
        
      } else {
        console.error('Error de login:', data);
        setMensaje(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error de red:', error);
      setMensaje('Error de red o servidor');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="form-control my-2"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control my-2"
      />
      <button onClick={handleLogin} className="btn btn-primary">Ingresar</button>
      <p>{mensaje}</p>
    </div>
  );
}

export default Login;
