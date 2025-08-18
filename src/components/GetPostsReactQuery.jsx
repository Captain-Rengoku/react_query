// import the useQuery hook to use React Query
import { useQuery } from "@tanstack/react-query";
// import the api to use here
import { getPosts } from "../api/getposts";
import { NavLink } from "react-router";
import PostPostsReactQuery from "./PostPostsReactQuery";

function GetPostsReactQuery() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    // is Fetching is a boolean value that shows where the useQuery is fetching the data
    // again for the stale value or not, it shows cached value at first and fetch in background
    // then if their is any update it shows it in the UI.
    // BTW every query considers the data as stale value(outdated value) as default.
    isFetching,
    refetch,
  } = useQuery({
    // the path becomes the queryKey here,
    // /posts --> ["posts"]
    // /posts/1 --> ["posts", 1]
    // /posts/2 --> ["posts", 2]
    // or for dynamic route
    // /posts/:id --> ["posts", post.id]
    // /posts/:id/comments --> ["posts", post.id, "comments"]
    queryKey: ["posts"],

    // the queryFn is a Callback Function that always returns a promise
    queryFn: getPosts,

    // we can override the default options that are set in queryclient default options in main.jsx
    // Configure how long the data should remain fresh, or won't turn into stale value.
    // by default value is 0
    // lets keep the value fresh for one minute
    staleTime: 1000 * 10, // 1 minute

    // Polling interval or refetchInterval
    // to refetch automatically on an interval of ms time
    // value is by default 'false' not '0'
    // refetchInterval: 1000, // 1 second
    // but we don't wnat to refetch on every second
    // to refetch the data in background means while on other tabs aswell, then use
    // refetchIntervalInBackground: true, // by default it's false

    // lets stop fetching data when window gets focused
    // enabled: false,
    // let make a buttton to fetch the data instead by using `refetch` method
  });

  console.log(isLoading, isFetching);
  if (isError) return <div>Some error has occurred: {error.message}</div>;

  return (
    <>
      {/* lets use POST a post form here */}
      <PostPostsReactQuery />
      {/* let make a buttton to fetch the data instead */}
      <button onClick={refetch} className="bg-gray-700 hover:bg-gray-800 cursor-pointer 
      w-full mt-8 rounded-lg p-2">
        Fetch Posts Manually
      </button>
      {isLoading ? (
        <div>Page is Loading...</div>
      ) : (
        <div className="grid grid-cols-2 mt-8 gap-4 text-green-300">
          {posts?.map((post) => (
            <NavLink key={post.id} to={`/react-query-posts/${post.id}`}>
              <div className="bg-neutral-600 p-4 text-sm rounded-lg font-bold">
                <h3>User ID: {post.userId}</h3>
                <h3>Title is: {post.title}</h3>
                <p>Content is: {post.content}</p>
                <p>Like Count: {post.likes}</p>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}

export default GetPostsReactQuery;

// Single Post Details page - PostDetailReactQuery.jsx
// configureing the route for the nely created page - "/react-query-posts/{postId}"
// wraping each item with the anchor tag <a>
