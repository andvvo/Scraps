import Ingredient from "./ingredient";

export default function IngredientList({
  ingredients,
  images,
}: {
  ingredients: string[];
  images?: string[];
}) {
  return (
    <div className="flex items-center overflow-auto">
      {ingredients.map((ingredient, index) => (
        <div key={ingredient} className="flex-shrink-0">
          <Ingredient
            ingredient={ingredient}
            image={images !== undefined ? images[index] : undefined}
          />
        </div>
      ))}
    </div>
  );
}
