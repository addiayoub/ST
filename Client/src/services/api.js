import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      'x-auth-token': token
    }
  };
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL, getAuthHeader());
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData, getAuthHeader());
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, userData, getAuthHeader());
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, getAuthHeader());
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};