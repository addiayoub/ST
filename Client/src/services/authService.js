// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adaptez à votre URL backend

export const verifyToken = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Aucun token trouvé');
  }

  try {
    const response = await axios.get(`${API_URL}/auth/verify`, {
      headers: {
        'x-auth-token': token
      }
    });
    return response.data.user;
  } catch (error) {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    throw error;
  }
};