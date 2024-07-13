import { useEffect, useState } from "react";
import TicketStatusImage from "../../assets/Lottery/TicketsBox.svg";
import TicketStatusBird from "../../assets/Lottery/TIcketStatusBird.png";
import { TicketIcon } from "../Icons";
const TicketsStatus = () => {
  const items = Array.from({ length: 100 }, (_, index) => index + 1);
  const [yourTicketsCount, setYourTicketsCount] = useState<number | null>();
  useEffect(() => {
    setYourTicketsCount(0);
  });

  return (
    <div className="hidden lg:block w-[73%] 2xl:w-[68%]">
      <div className=" relative">
        <img src={TicketStatusImage} className=" w-full h-auto" />
        <div className=" absolute inset-0 top-[10%]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] gap-[5px] p-[10px] xl:p-[20px] 2xl:p-[30px] ">
            {items.map((item) => (
              <div
                key={item}
                className=" p-[1px] w-[30px] h-[35px] xl:w-[40px] xl:h-[48px] 2xl:w-[45px] 2xl:h-[53px] flex items-center justify-center bg-[#00FF76] rounded-tl-[8px] rounded-br-[8px] "
              >
                <div className=" h-full w-full bg-[#FFFF00] flex items-center justify-center rounded-tl-[8px] rounded-br-[8px]  ">
                  <img src={TicketStatusBird} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" font-advent-regular text-[20px] text-[#ffffff] flex items-center gap-2 border-[2px] border-white rounded-[6px] uppercase w-[30%] xl:w-[25%] 2xl:w-[25%] mx-auto justify-center p-[10px]">
        your tickets <TicketIcon /> {yourTicketsCount}
      </div>
    </div>
  );
};

export default TicketsStatus;
