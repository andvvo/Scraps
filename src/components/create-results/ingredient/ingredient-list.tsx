import Ingredient from "./ingredient";

export default function IngredientList({
  ingredients,
}: {
  ingredients: string[];
}) {
  return (
    <div className="flex items-center overflow-auto">
      {ingredients.map((ingredient) => (
        <div className="flex-shrink-0">
          <Ingredient key={ingredient} ingredient={ingredient} />
        </div>
      ))}
    </div>
  );
}
