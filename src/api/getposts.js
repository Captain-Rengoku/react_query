// api/posts.js
import axios from "axios";

export const getPosts = async () => {
  const res = await axios.get("https://json-server-hosting-798r.onrender.com/posts");
  return res?.data;
};
