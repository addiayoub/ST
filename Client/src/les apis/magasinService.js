// src/services/magasinService.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getMagasins = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/magasins`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des magasins:', error);
    throw error;
  }
};