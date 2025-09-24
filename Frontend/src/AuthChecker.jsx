import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Este componente verifica si el usuario tiene un token de autenticación.
// Si no lo tiene, lo redirige al login.
const AuthChecker = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Obtiene el token del almacenamiento local.
    const token = localStorage.getItem('token');
    
    // Si no hay un token, redirige al usuario al login.
    // El { replace: true } se usa aquí para evitar que puedan volver con el botón de atrás.
    if (!token) {
      console.log('No se encontró un token. Redirigiendo al login.');
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  // Si el token existe, renderiza los componentes hijos (las páginas protegidas).
  return (
    <>
      {children}
    </>
  );
};

export default AuthChecker;
