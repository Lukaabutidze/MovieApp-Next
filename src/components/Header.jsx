import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-5">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-5">
        <DarkModeSwitch />
        <Link
          href={"/"}
          className="flex gap-1 items-center hover:scale-110 transition-all-ease duration-500 shadow-lg"
        >
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg ">
            Movie
          </span>
          <span className="text-xl hidden sm:inline font-semibold">Zone</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
