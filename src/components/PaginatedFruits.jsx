import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getFruits } from "../api/paginatedfruits";
import { useState } from "react";

const PaginatedFruits = () => {
  const [page, setPage] = useState(1);

  const { data: data, isLoading, isError, error } = useQuery({
    queryKey: ["fruits", page],
    queryFn: () => getFruits(page),

    // to not show loading ui, instead to use previous pages data we use
    placeholderData: keepPreviousData,
    // and after fetching the next page data it will show the next page data.
  });

  if (isLoading) return <div>Page is Loading...</div>;
  if (isError) return <div>Some error has occurred: {error.message}</div>;

  return (
    <div className="space-y-2">
      {data?.data?.map((fruit) => (
        <div key={fruit.id} className="bg-gray-700 font-bold p-4 rounded-lg">
          {fruit.id}. {fruit.name}
        </div>
      ))}

      <div className="flex gap-2">
        <button
        className="bg-blue-700 p-2 rounded-lg font-bold"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page <= 1}
        >
          Previous Page
        </button>

        <button
        className="bg-blue-700 p-2 rounded-lg font-bold"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= data.pages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PaginatedFruits;
