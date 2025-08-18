// api/posts.js
import axios from "axios";

export const getFruits = async (page) => {
  const res = await axios.get(`https://json-server-hosting-798r.onrender.com/fruits?_page=${page}&_per_page=10`);
  // console.log("res", res)
  // console.log("res.data",res.data) // data with others info like total pages etc..
  // console.log("res.data.data",res.data.data)
  return res.data;
};
