import MainLogo from "../assets/MainLogo.png";
import { Link, useLocation } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import LandingImage from "../assets/LandingImage.png";
const Navbar = () => {
  const { publicKey } = useWallet();

  const location = useLocation();
  return (
    <div>
      <div className="hidden w-[80%] mx-auto lg:flex items-center justify-between pt-[50px] z-50">
        <div>
          <img src={MainLogo} />
        </div>
        <div className=" uppercase text-[24px] flex items-center gap-[40px]">
          <Link to={"/"}>
            <p
              className={`${
                location.pathname === "/" ? "text-[#FFFF00]" : "text-[#3D3D3D]"
              } font-advent-bold cursor-pointer`}
            >
              lottery
            </p>
          </Link>
          <Link to={"/how-to-play"}>
            <p
              className={`${
                location.pathname === "/how-to-play"
                  ? "text-[#FFFF00]"
                  : "text-[#3D3D3D]"
              } font-advent-bold cursor-pointer`}
            >
              how to play
            </p>
          </Link>
          <Link to={"/get-race"}>
            <p
              className={`${
                location.pathname === "/get-race"
                  ? "text-[#FFFF00]"
                  : "text-[#3D3D3D]"
              } font-advent-bold cursor-pointer`}
            >
              get $Race
            </p>
          </Link>

          {publicKey && (
            <Link to="/profile">
              <div className=" profile bg-[#3D3D3D] font-advent-bold text-[18px] text-white p-[15px] flex items-center gap-2 ">
                <div className=" rounded-full h-[10px] w-[10px] bg-[#FFFF00] " />
                <span>{`${publicKey.toString().slice(0, 4)}...${publicKey
                  .toString()
                  .slice(publicKey.toString().length - 4)}`}</span>
              </div>
            </Link>
          )}
        </div>
      </div>
      {/* ------------------------------------------- */}
      <div className=" lg:hidden w-full">
        <div className=" ">
          <img src={LandingImage} className=" w-full h-auto" />
        </div>
        <div className=" lg:hidden profile  w-[90%] mx-auto uppercase mt-[30px]">
          <div className=" bg-[#3D3D3D] p-[10px] text-[24px] text-white flex items-center justify-center font-advent-bold gap-2">
            {publicKey ? (
              <>
                <div className=" rounded-full h-[15px] w-[15px] bg-[#FFFF00] " />
                <span>
                  {publicKey &&
                    `${publicKey!.toString().slice(0, 6)}......${publicKey!
                      .toString()
                      .slice(publicKey!.toString().length - 6)}`}
                </span>
              </>
            ) : (
              <p>connect Wallet</p>
            )}
          </div>
        </div>
        <div className=" flex justify-between uppercase w-[90%] mx-auto mt-[30px]">
          <Link to={"/"}>
            <p
              className={`${
                location.pathname === "/" ? "text-[#FFFF00]" : "text-white"
              } font-advent-bold text-[20px]`}
            >
              lottery
            </p>
          </Link>
          <Link to={"/profile"}>
            <p
              className={`${
                location.pathname === "/profile"
                  ? "text-[#FFFF00]"
                  : "text-white"
              } font-advent-bold text-[20px]`}
            >
              profile
            </p>
          </Link>
          <Link to={"/get-race"}>
            <p
              className={`${
                location.pathname === "/get-race"
                  ? "text-[#FFFF00]"
                  : "text-white"
              } font-advent-bold text-[20px]`}
            >
              get $RACE
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
