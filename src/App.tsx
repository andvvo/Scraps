import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Create from "./pages/create";
import CreateResults from "./pages/create-results";
import SavedRecipes from "./pages/saved-recipes";
import Tips from "./pages/tips";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Create />}></Route>
          <Route path="/create-results" element={<CreateResults />}></Route>
          <Route path="/saved-recipes" element={<SavedRecipes />}></Route>
          <Route path="/tips" element={<Tips />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
