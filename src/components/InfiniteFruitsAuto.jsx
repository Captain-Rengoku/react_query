import { useInfiniteQuery } from "@tanstack/react-query";
import { getFruits } from "../api/infinitefruits";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const InfiniteFruitsAuto = () => {
  // for infite scroll use `useInfiteQuery` hook
  const { data, isLoading, isError, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["fruits"],
      queryFn: getFruits,
      // anyway 1 is default
      // initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        // console.log(lastPage.totalPages)
        if (allPages.length < lastPage.totalPages) {
          return allPages.length + 1;
        } else {
          return undefined;
        }
      },
    });

  // use intersection observer hook
  const { ref, inView } = useInView();
  useEffect(() => {
      if (inView) {
        fetchNextPage();
      }
  }, [fetchNextPage, inView]);

  if (isLoading) return <div>Page is Loading...</div>;
  if (isError) return <div>Some error has occurred: {error.message}</div>;
  return (
    <div className="space-y-2">
      {data?.pages?.map((page) =>
        page?.fruits.map((fruit) => (
          <div key={fruit.id} className="bg-gray-700 font-bold p-4 rounded-lg">
            {fruit.id}. {fruit.name}
          </div>
        ))
      )}

      {/* <button onClick={fetchNextPage} disabled={!hasNextPage}
        className="p-2 bg-blue-500 rounded-lg font-bold w-full cursor-pointer hover:bg-blue-600
        disabled:cursor-not-allowed disabled:bg-red-400"
      >{hasNextPage ? 'Load More..': 'No more Fruits!'}</button> */}

      {/* To make the data load automatically when we scroll to the end of the page, 
      we need an intersection observer instead of the above button*/}
      {/* install this package -- npm i react-intersection-observer */}
      <div ref={ref} className={`p-2 rounded-lg font-bold w-full text-center text-black
        ${isFetchingNextPage ? "bg-green-400" : "bg-red-400"}`}>
        {isFetchingNextPage ? "Loading..." : "No more Fruits!"}
      </div>
    </div>
  );
};

export default InfiniteFruitsAuto;
