// api/posts.js
import axios from "axios";

export const getSinglePostDetails = async (id) => {
  const res = await axios.get(`https://json-server-hosting-798r.onrender.com/posts/${id}`);
  return res?.data;
};
