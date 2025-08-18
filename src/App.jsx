import {BrowserRouter, NavLink, Route, Routes} from 'react-router'
import Home from "./components/Home";
import GetPostsTraditional from "./components/GetPostsTraditional";
import GetPostsReactQuery from "./components/GetPostsReactQuery";
import GetSinglePostDetailsReactQuery from "./components/GetSinglePostDetailsReactQuery";
import PaginatedFruits from './components/PaginatedFruits';
import InfiniteFruits from './components/InfiniteFruits';
import InfiniteFruitsAuto from './components/InfiniteFruitsAuto';
// import PostPostsReactQuery from './components/PostPostsReactQuery';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full max-w-5xl mx-auto">
        <div className="bg-gray-900 p-4 flex justify-between gap-4 text-indigo-400">
          <NavLink to="/">Home</NavLink>
          <div className="grid grid-cols-4 gap-4">
            <NavLink to="/traditional-posts">Traditional Posts</NavLink>
            <NavLink to="/react-query-posts">React Query Posts</NavLink>
            <NavLink to="/paginated-fruits">Paginated Fruits</NavLink>
            <NavLink to="/infinite-fruits">Infinite Fruits</NavLink>
            <NavLink to="/infinite-fruits-auto">Infinite Fruits Auto</NavLink>
            {/* <NavLink to="/react-query-posts/post">Post A Post</NavLink> */}
          </div>
        </div>
        <div className="p-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/traditional-posts"
              element={<GetPostsTraditional />}
            />
            <Route
              exact
              path="/react-query-posts"
              element={<GetPostsReactQuery />}
            />
            <Route
              exact
              path="/react-query-posts/:postID"
              element={<GetSinglePostDetailsReactQuery/>}
            />
            <Route
              exact
              path="/paginated-fruits"
              element={<PaginatedFruits/>}
            />
            <Route
              exact
              path="/infinite-fruits"
              element={<InfiniteFruits/>}
            />
            <Route
              exact
              path="/infinite-fruits-auto"
              element={<InfiniteFruitsAuto/>}
            />
            {/* <Route
              exact
              path="/react-query-posts/post"
              element={<PostPostsReactQuery />}
            /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
