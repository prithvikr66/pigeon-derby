import { useState } from "react";
import MainLogo from "../assets/MainLogo.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [navState, setNavState] = useState<"LOTTERY" | "HOW" | "GET">(
    "LOTTERY"
  );
  const navigate = useNavigate();
  return (
    <div className="w-[80%] mx-auto flex items-center justify-between pt-[50px]">
      <div>
        <img src={MainLogo} />
      </div>
      <div className=" uppercase text-[24px] flex items-center gap-[40px]">
        <p
          onClick={() => {
            navigate("/");
            setNavState("LOTTERY");
          }}
          className={`${
            navState === "LOTTERY" ? "text-[#FFFF00]" : "text-[#3D3D3D]"
          } font-advent-bold cursor-pointer`}
        >
          lottery
        </p>
        <p
          onClick={() => {
            navigate("/how-to-play");
            setNavState("HOW");
          }}
          className={`${
            navState === "HOW" ? "text-[#FFFF00]" : "text-[#3D3D3D]"
          } font-advent-bold cursor-pointer`}
        >
          how to play
        </p>
        <p
          onClick={() => {
            navigate("/get-race");
            setNavState("GET");
          }}
          className={`${
            navState === "GET" ? "text-[#FFFF00]" : "text-[#3D3D3D]"
          } font-advent-bold cursor-pointer`}
        >
          get $Race
        </p>
      </div>
    </div>
  );
};

export default Navbar;
