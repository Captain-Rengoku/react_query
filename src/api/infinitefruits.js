// api/posts.js
import axios from "axios";

export const getFruits = async ({ pageParam = 1 }) => {
  const res = await axios.get(`https://json-server-hosting-798r.onrender.com/fruits?_page=${pageParam}&_per_page=10`);
  // console.log("res", res)
  // console.log("res.data",res.data)
  // console.log("res.data.data",res.data.data)
  return {
    fruits: res.data.data,       // actual items
    totalPages: res.data.pages,  // meta info
  };
};
