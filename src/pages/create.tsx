import ImagePlaceholder from "../components/common/image-placeholder";
import fridge from "../assets/fridge.svg";
import pantry from "../assets/pantry.svg";
import logo from "../assets/logo.svg";
import table from "../assets/table.svg";

export default function Create() {
  return (
    <div className="flex justify-center items-center">
      <div className="fridge">
        <img src={fridge} alt="Fridge" className="" />
      </div>
      <div className="flex flex-col justify-between">
        <img src={pantry} alt="Pantry" className="" />
        <div className="flex flex-col">
          <img src={logo} alt="Logo" className="w-48 h-auto" />
          <p className="text-base">
            You don’t have a lot of options. Time to make the best with what you
            got!
          </p>
        </div>
        <img src={table} alt="Table" className="" />
      </div>
    </div>
  );
}
