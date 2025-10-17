import React from "react";

const Home = () => {
  return (
    <main className="bg-slate-900 text-white flex flex-col md:mt-[10%] lg:mt-[20%] items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400">
            React Query Learning Journey
          </h1>

          <p className="text-gray-300 leading-relaxed text-lg">
            In this React Query project, I learned how to move from traditional
            data fetching using <span className="text-indigo-400">useEffect </span> 
            and <span className="text-indigo-400">fetch</span> or 
            <span className="text-indigo-400"> axios</span> to a modern approach
            with React Query. I explored fetching and posting data using 
            <span className="text-indigo-400"> useQuery</span> and 
            <span className="text-indigo-400"> useMutation</span>, getting single
            items dynamically, and implementing pagination. I also built infinite
            scrolling and auto infinite scrolling, which made data loading smooth
            and automatic. React Query helped simplify API state handling, caching,
            and made fetching much faster and easier.
          </p>
          <p className="text-indigo-300 text-lg">To know more on what we have done here go through each section on Navbar.</p>
        </div>

        {/* Illustration Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="/react-query.png"
            alt="React Query Illustration"
            className="w-[90%] md:w-[80%] max-w-lg rounded-2xl shadow-lg hover:scale-102 transition-transform duration-300"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
