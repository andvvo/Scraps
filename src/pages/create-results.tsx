import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BsList, BsGrid, BsListUl, BsGridFill } from "react-icons/bs";
import RecipeList from "../components/recipes/recipe-list";
import RecipeGrid from "../components/recipes/recipe-grid";

export default function CreateResults() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [searchParams] = useSearchParams();

  const recipes = useMemo(() => [], []);

  return (
    <div>
      <h1>Your Ingredients:</h1>

      <div className="flex justify-between">
        <h1>Recipes</h1>
        <ul>
          <li>
            <button onClick={() => setViewMode("list")}>
              {viewMode === "list" ? (
                <BsListUl size={24} />
              ) : (
                <BsList size={24} />
              )}
            </button>
            <button onClick={() => setViewMode("grid")}>
              {viewMode === "grid" ? (
                <BsGridFill size={24} />
              ) : (
                <BsGrid size={24} />
              )}
            </button>
          </li>
        </ul>
      </div>

      {viewMode === "list" && <RecipeList recipes={recipes} />}
      {viewMode === "grid" && <RecipeGrid recipes={recipes} />}
    </div>
  );
}
