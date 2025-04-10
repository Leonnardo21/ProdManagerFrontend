import axios from "axios";

const PRODUCT_API_URL = "http://localhost:5107/v1/products";
const USER_API_URL = "http://localhost:5107/v1/users";

//Route Products
export const getProducts = async () => {
  const response = await axios.get(PRODUCT_API_URL);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(PRODUCT_API_URL, product);
  return response.data;
};

export const updateProduct = async (product) => {
  const response = await axios.put(`${PRODUCT_API_URL}/${product.id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${PRODUCT_API_URL}/${id}`);
  return response.data;
};

// Route Users
export const getUsers = async () => {
  const reponse = await axios.get(USER_API_URL);
  return reponse.data;
};

export const addUser = async (user) => {
  const response = await axios.post(USER_API_URL, user);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await axios.put(`${USER_API_URL}/${user.id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${USER_API_URL}/${id}`);
  return response.data;
};
