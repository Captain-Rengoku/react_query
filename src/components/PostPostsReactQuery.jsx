import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { postPosts } from "../api/postposts";

const PostPostsReactQuery = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // useing useQueryClient for refetch after adding a new query
  const queryClient = useQueryClient();

  // since we are trying mutate the server data, hence we will use `useMutation` hook.
  // useMutation is used to create(POST), delete(DELETE) and Update(PUT, PATCH) the data.
  // let's create a Mutation function for post action
  const { mutate } = useMutation({
    mutationFn: postPosts,
    // onSuccess: () => {
    //   // we want to invalidate the posts data that is in the cache
    //   // queryClient.invalidateQueries("posts");
    // }
    // // but it's not optimized because it fetches the entire data again, so we do this instead,

    // onSuccess: (newData) => {
    //   // optimized version
    //   queryClient.setQueryData(["posts"], (oldQueryData) => {
    //     // console.log("newData",newData);
    //     // console.log("oldQueryData",[...oldQueryData, newData]);
    //     return [...oldQueryData, newData];
    //   });
    //   // setQueryData updates the query cache
    // },
    // // lets apply optimistic update instead,

    // Optimistic Updates: implies updating the state before performing a mutation,
    // under the assumption that nothing can go wrong.
    // impression that your app is blazing fast.
    // for that we require 3 different callbacks
    onMutate: async (newData) => {
      // prevent any in-flight queries from invalidating your optimistic update.
      await queryClient.cancelQueries(["posts"]);
      const previousPostData = queryClient.getQueriesData(["posts"]);
      queryClient.setQueryData(["posts"], (oldQueryData) => {
        return [
          ...oldQueryData,
          { ...newData, id: String(oldQueryData?.length + 1) },
        ];
      });
      return { previousPostData };
    },
    onError: (_error, _post, context) => {
      queryClient.setQueriesData(["posts"], context.previousPostData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
  // create more mutaion here..

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({title, content})
    {
      if (title === "" || content === "")
        return alert("Please complete the form first");
    }
    const post = { userId: 83, title, content, likes: 0 };
    mutate(post);
    setContent("");
    setTitle("");
  };

  return (
    <div className="flex w-full justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 flex flex-col p-4 w-80 rounded-lg gap-4"
      >
        <input
          type="text"
          placeholder="Enter your Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-slate-500 p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Enter your Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border-2 border-slate-500 p-2 rounded-lg"
        />
        <button
          type="submit"
          className={`rounded-lg p-2 cursor-pointer bg-blue-500 hover:bg-blue-600`}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostPostsReactQuery;
