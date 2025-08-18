// api/posts.js
import axios from "axios";

export const postPosts = async (post) => {
  const res = await axios.post("https://json-server-hosting-798r.onrender.com/posts", post);
  return res.data;
};

// export const postPosts = (post) => {
//   // pass post as second argument or payload
//   axios.post("http://localhost:4000/posts", post);
// };