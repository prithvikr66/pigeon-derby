import { useState } from "react";
import MainLogo from "../assets/MainLogo.png";
import { useNavigate } from "react-router-dom";
import { WalletDisconnectButton, WalletModalButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";


const Navbar = () => {
  const { publicKey } = useWallet()

  const [navState, setNavState] = useState<
    "LOTTERY" | "HOW" | "GET" | "PROFILE"
  >("LOTTERY");
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
          className={`${navState === "LOTTERY" ? "text-[#FFFF00]" : "text-[#3D3D3D]"
            } font-advent-bold cursor-pointer`}
        >
          lottery
        </p>
        <p
          onClick={() => {
            navigate("/how-to-play");
            setNavState("HOW");
          }}
          className={`${navState === "HOW" ? "text-[#FFFF00]" : "text-[#3D3D3D]"
            } font-advent-bold cursor-pointer`}
        >
          how to play
        </p>
        <p
          onClick={() => {
            navigate("/get-race");
            setNavState("GET");
          }}
          className={`${navState === "GET" ? "text-[#FFFF00]" : "text-[#3D3D3D]"
            } font-advent-bold cursor-pointer`}
        >
          get $Race
        </p>
        <p
          onClick={() => {
            navigate("/profile");
            setNavState("PROFILE");
          }}
          className={`${navState === "PROFILE" ? "text-[#FFFF00]" : "text-[#3D3D3D]"
            } font-advent-bold cursor-pointer`}
        >
          profile
        </p>

        {publicKey ? (
          // <p style={{ color: 'black', backgroundColor: "#FFFF00", padding: "0.2rem", borderRadius: "8px", cursor: "pointer" }} onClick={() => {

          // }}>{`${publicKey.toBase58().substr(0, 4)}...${publicKey
          //   .toBase58()
          //   .substr(-4)}`}</p>
          <WalletDisconnectButton />
        ) : (
          <WalletModalButton>Connect Wallet</WalletModalButton>
        )}
      </div>
    </div>
  );
};

export default Navbar;
