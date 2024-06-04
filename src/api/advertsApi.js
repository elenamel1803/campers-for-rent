import axios from 'axios';

const advertsInstance = axios.create({
  baseURL: 'https://6658c9e3de346625136a7f0c.mockapi.io',
});

export const getAllAdverts = async () => {
  const { data } = await advertsInstance.get('/adverts');
  return data;
};
