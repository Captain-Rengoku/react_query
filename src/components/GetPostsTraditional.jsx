import axios from "axios";
import { useEffect, useState } from "react";

function PostsTraditional() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://json-server-hosting-798r.onrender.com/posts"
      );
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
    return (
      <div className="text-xl text-center text-green-400 mt-28">
        Page is Loading...
      </div>
    );
  }
  if (isError) {
    return (
      <div className="text-xl text-center text-red-400 mt-28">
        Some error has occured!
      </div>
    );
  }

  return (
    <div className=" text-white flex flex-col gap-2">
      {posts?.map((post) => (
        <div
          key={post.id}
          className="bg-slate-800 text-slate-100 p-5 rounded-xl shadow-md border border-slate-700 hover:shadow-lg hover:border-indigo-500 transition-all duration-300"
        >
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-sm text-slate-400">User ID: {post.userId}</h3>
            <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-md">
              #{post.id}
            </span>
          </div>

          <h2 className="text-xl font-semibold text-indigo-400 mb-2">
            {post.title}
          </h2>

          <p className="text-slate-300 mb-3 leading-relaxed">{post.content}</p>

          <div className="flex justify-between items-center text-sm">
            <p className="text-indigo-300 font-medium">
              ❤️ Likes: <span className="text-white">{post.likes}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsTraditional;
