import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Cook from "./pages/cook";
import CookResults from "./pages/cook-results";
import SavedRecipes from "./pages/saved-recipes";
import Tips from "./pages/tips";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Cook />}></Route>
          <Route path="/cook-results" element={<CookResults />}></Route>
          <Route path="/saved-recipes" element={<SavedRecipes />}></Route>
          <Route path="/tips" element={<Tips />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
