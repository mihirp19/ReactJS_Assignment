import axios from "axios";

const api_url = "https://jsonplaceholder.typicode.com/posts";

export const getBlogs = () => axios.get(api_url);
export const addBlog = (data) => axios.post(api_url, data);
export const updateBlog = (id, data) => axios.put(`${api_url}/${id}`, data);
export const deleteBlog = (id) => axios.delete(`${api_url}/${id}`);
