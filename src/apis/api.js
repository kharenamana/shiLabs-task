import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    const data = response.data;
    console.log('All_users', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
