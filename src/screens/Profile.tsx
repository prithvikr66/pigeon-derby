// import BackdropImage from "../assets/backdrop.png";
import { useEffect, useState } from "react";
import MoneyPigeonImage from "../assets/PIgeonMoney.png";
import Activity from "../components/Profile/Activity";

interface UserData {
  games: number;
  won: number;
  winnings: number;
}
const Profile = () => {
  const [userData, setUserData] = useState<UserData>();
  const [unclaimedBalance, setUnclaimedBalance] = useState<number | null>();
  useEffect(() => {
    setUserData({
      games: 120,
      winnings: 25,
      won: 106,
    });
    setUnclaimedBalance(2500);
  }, []);
  return (
    <div className="w-full min-h-screen bg-[#000000]  ">
      <div className="w-[90%] lg:w-[80%] mx-auto min-h-screen lg:mt-[50px]">
        <div className="relative">
          {/* <div className="hidden lg:block absolute inset-0 -z-10 ">
            <img src={BackdropImage} className=" object-cover object-bottom" />
          </div> */}
          <div className="flex flex-col lg:flex-row  items-center justify-between mt-[40px] lg:mt-0">
            <div className="w-full lg:w-[73%] rounded-[6px] sm:rounded-[8px] shadow-2xl shadow-[#434506] p-[10px]  lg:p-0 ">
              <div className="flex items-center justify-around">
                <div className="h-full w-auto hidden lg:flex ">
                  <img src={MoneyPigeonImage} className="h-full w-auto" />
                </div>
                <div className="flex flex-col uppercase">
                  <p className="font-advent-semibold text-[#FFFF00] text-[16px] lg:text-[24px]">
                    games
                  </p>
                  <p className="font-advent-bold text-[#ffffff] text-[20px] lg:text-[32px]">
                    {userData?.games}
                  </p>
                </div>
                <div className="flex flex-col uppercase">
                  <p className="font-advent-semibold text-[#FFFF00] text-[16px] lg:text-[24px]">
                    won
                  </p>
                  <p className="font-advent-bold text-[#ffffff] text-[20px] lg:text-[32px]">
                    {userData?.winnings}
                  </p>
                </div>
                <div className="flex flex-col uppercase">
                  <p className="font-advent-semibold text-[#FFFF00] text-[16px] lg:text-[24px]">
                    winnings
                  </p>
                  <div className="font-advent-bold text-[#ffffff] text-[20px] lg:text-[32px] flex flex-col lg:flex-row">
                    {userData?.winnings} $Pigeon <p>($2500)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-[22%] lg:w-[25%] w-full mt-[40px] lg:mt-0  rounded-[4px] lg:rounded-[8px] shadow-2xl shadow-[#434506]">
              <div className="w-[90%] p-[10%] flex flex-col gap-[5px]">
                <p className=" text-[16px] lg:text-[20px] font-advent-bold text-[#FFFF00] uppercase">
                  unclaimed
                </p>
                <p className=" text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px] font-advent-bold text-white">
                  {unclaimedBalance! / 1000}K $PIGEON
                </p>
                <div className="uppercase font-advent-bold w-full cursor-pointer p-[5px] text-[24px] text-center text-[#3D3D3D] bg-[#FFFF00] rounded-[8px]">
                  claim
                </div>
              </div>
            </div>
          </div>
          <Activity />
        </div>
      </div>
    </div>
  );
};

export default Profile;
