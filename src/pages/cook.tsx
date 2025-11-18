import { useState } from "react";
import { Link, createSearchParams } from "react-router-dom";
import fridge from "../assets/homepage/fridge.svg";
import pantry from "../assets/homepage/pantry.svg";
import logo from "../assets/homepage/logo.svg";
import table from "../assets/homepage/table.svg";
import * as foodIcons from "../assets/food";
import FoodIcon from "../components/food-icon";

export default function Cook() {
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);

  const toggleFood = (id: string) => {
    setSelectedFoods((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    );
  };

  const isSelected = (id: string) => selectedFoods.includes(id);

  return (
    <div className="flex justify-center items-center h-full w-full gap-6">
      <div className="flex-1 flex-shrink-0 flex justify-end h-full w-full relative">
        <img src={fridge} alt="Fridge" className="h-full object-contain" />

        {/* <FoodIcon
          defaultSrc={foodIcons.tomatoDark}
          hoverSrc={foodIcons.tomatoLight}
          selectedSrc={foodIcons.tomatoLight}
          selected={isSelected("tomato")}
          onToggle={() => toggleFood("tomato")}
          alt="Tomato"
          // className="absolute top-0 left-0 translate-x-40 translate-y-40 w-24 h-auto"
          className="absolute inset-65 w-[16%] h-auto"
        /> */}
      </div>
      <div className="flex-1 flex-shrink-0 flex flex-col justify-around items-start h-full w-full relative">
        <img
          src={pantry}
          alt="Pantry"
          className="w-full max-w-[70%] object-contain -ml-4"
        />

        {/* <FoodIcon
          defaultSrc={foodIcons.riceDark}
          hoverSrc={foodIcons.riceLight}
          selectedSrc={foodIcons.riceLight}
          selected={isSelected("rice")}
          onToggle={() => toggleFood("rice")}
          alt="Rice"
          className="absolute top-0 left-0 translate-x-6 translate-y-29 w-24 h-auto"
        />
        <FoodIcon
          defaultSrc={foodIcons.pastaDark}
          hoverSrc={foodIcons.pastaLight}
          selectedSrc={foodIcons.pastaLight}
          selected={isSelected("pasta")}
          onToggle={() => toggleFood("pasta")}
          alt="Pasta"
          className="absolute top-0 left-0 translate-x-34 translate-y-29 w-24 h-auto"
        /> */}

        <div className="flex flex-col mb-4 w-full">
          <img src={logo} alt="Logo" className="w-full max-w-[45%] -ml-2" />
          <p className="text-xl lg:text-2xl">
            You don’t have a lot of options. Time to <br></br>
            make the best with what you got!
          </p>
        </div>

        <img
          src={table}
          alt="Table"
          className="w-full max-w-[75%] object-contain"
        />

        {/* <Link
          to={{
            pathname: "/cook-results",
            search: createSearchParams({ foods: selectedFoods }).toString(),
          }}
          className="text-white text-lg font-bold px-8 py-2 border-2 border-white rounded-lg hover:text-orange hover:bg-white absolute bottom-0 right-0 -translate-x-21 -translate-y-24 cursor-pointer"
        >
          Let's Cook!
        </Link> */}
      </div>
    </div>
  );
}
