import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import Home from "./components/Home";
import GetPostsTraditional from "./components/GetPostsTraditional";
import GetPostsReactQuery from "./components/GetPostsReactQuery";
import GetSinglePostDetailsReactQuery from "./components/GetSinglePostDetailsReactQuery";
import PaginatedFruits from "./components/PaginatedFruits";
import InfiniteFruits from "./components/InfiniteFruits";
import InfiniteFruitsAuto from "./components/InfiniteFruitsAuto";
import Navbar from "./components/Navbar";
// import PostPostsReactQuery from './components/PostPostsReactQuery';

function App() {
  return (
    <BrowserRouter>
        <div className="w-full bg-slate-950">
      <div className="flex flex-col bg-slate-900 w-full min-h-screen max-w-6xl mx-auto">
          <Navbar />
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
                element={<GetSinglePostDetailsReactQuery />}
              />
              <Route
                exact
                path="/paginated-fruits"
                element={<PaginatedFruits />}
              />
              <Route
                exact
                path="/infinite-fruits"
                element={<InfiniteFruits />}
              />
              <Route
                exact
                path="/infinite-fruits-auto"
                element={<InfiniteFruitsAuto />}
              />
              {/* <Route
              exact
              path="/react-query-posts/post"
              element={<PostPostsReactQuery />}
              /> */}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
