import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getSinglePostDetails } from "../api/getsinglepostdetails";

const GetSinglePostDetailsReactQuery = () => {
  const { postID } = useParams();
  // { postID } needs to be same as the path that declared at Route "/react-query-posts/:postID"
  // console.log(postID)

  // use the React Query now
  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts", postID],
    queryFn: () => getSinglePostDetails(postID),
  });
  if (isLoading) return <div>Page is Loading...</div>;
  if (isError) return <div>Some error has occurred: {error.message}</div>;

  const { userId, title, content, likes } = post || {};

  return (
    <>
      <div>Post Detail React Query Page</div>
      <div className="bg-neutral-600 p-4 text-sm rounded-lg font-bold">
        <h3>User ID: {userId}</h3>
        <h3>Title is: {title}</h3>
        <p>Content is: {content}</p>
        <p>Like Count: {likes}</p>
      </div>
    </>
  );
};

export default GetSinglePostDetailsReactQuery;
