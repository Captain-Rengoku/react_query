import axios from "axios";
import { useEffect, useState } from "react";

function PostsTraditional() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://json-server-hosting-798r.onrender.com/posts");
      // console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      setIsError(true);
      console.log(`Some Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <div>Page is Loading...</div>;
  }
  if (isError) {
    return <div>Some error has occured...</div>;
  }

  return (
    <div className=" text-white flex flex-col gap-2">
      {posts?.map((post) => (
        <div key={post.id} className="bg-gray-800 p-4 rounded-lg">
          <h3>User ID: {post.userId}</h3>
          <h3>Title is: {post.title}</h3>
          <p>Content is: {post.content}</p>
          <p>Like Count: {post.likes}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsTraditional;
