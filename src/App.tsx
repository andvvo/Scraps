import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Search from "./pages/Search";
import SearchResults from "./pages/search-results";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Search />}></Route>
          <Route path="/results" element={<SearchResults />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
