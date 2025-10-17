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
      <div className="text-4xl text-center m-4 mb-12 text-slate-200">Post Detail React Query Page</div>
              <div
                key={userId}
                className="bg-slate-800 text-slate-100 p-5 rounded-xl shadow-md border border-slate-700 hover:shadow-lg hover:border-indigo-500 transition-all duration-300"
              >
                <div className="mb-2 flex justify-between items-center">
                  <h3 className="text-sm text-slate-400">
                    User ID: {userId}
                  </h3>
                  <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-md">
                    #{userId}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-indigo-400 mb-2">
                  {title}
                </h2>

                <p className="text-slate-300 mb-3 leading-relaxed">
                  {content}
                </p>

                <div className="flex justify-between items-center text-sm">
                  <p className="text-indigo-300 font-medium">
                    ❤️ Likes: <span className="text-white">{likes}</span>
                  </p>
                </div>
              </div>
    </>
  );
};

export default GetSinglePostDetailsReactQuery;
