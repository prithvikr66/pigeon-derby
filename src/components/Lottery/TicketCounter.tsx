import { useEffect, useState } from "react";
import TicketCounterImage from "../../assets/Lottery/TicketCounter.svg";
import TicketIconMain from "../../assets/Lottery/TicketIcon.svg";
import { TicketIcon } from "../Icons";
const TicketCounter = () => {
  const [numberOfTicketsSelected, setNumberOfTicketsSelected] =
    useState<number>(0);
  const [ticketPrice, setTicketPrice] = useState<number | null>();

  useEffect(() => {
    setTicketPrice(100);
  });
  return (
    <div className=" w-[25%] font-advent-bold uppercase">
      <div className=" relative">
        <img src={TicketCounterImage} className=" w-full h-auto" />
        <div className=" absolute  inset-0">
          <div className=" ticket-counter w-full   ">
            <p className=" text-[24px] text-[#ffffff] p-5 mt-[10px]">
              ticket <span className=" text-[#F01E31]">counter</span>
            </p>
            <img
              src={TicketIconMain}
              className=" w-[50%] h-auto mx-auto"
            />
            <div className=" w-[80%] mx-auto flex justify-between mt-[20px]">
              <button
                onClick={() => setNumberOfTicketsSelected(1)}
                className={` text-[19px] w-[22%]  p-[5px] rounded-tr-[12px] rounded-bl-[12px] border-[1px] ${
                  numberOfTicketsSelected === 1
                    ? "bg-[#FFFF00] text-[#000000]"
                    : "bg-none text-[#FFFF00]"
                } border-[#F01E31] flex items-center gap-[5px] `}
              >
                <TicketIcon />1
              </button>
              <button
                onClick={() => setNumberOfTicketsSelected(3)}
                className={` text-[19px] w-[22%]  p-[5px] rounded-tr-[12px] rounded-bl-[12px] border-[1px] ${
                  numberOfTicketsSelected === 3
                    ? "bg-[#FFFF00] text-[#000000]"
                    : "bg-none text-[#FFFF00]"
                } border-[#F01E31] flex items-center gap-[5px] `}
              >
                <TicketIcon />3
              </button>
              <button
                onClick={() => setNumberOfTicketsSelected(5)}
                className={` text-[19px] w-[22%]  p-[5px] rounded-tr-[12px] rounded-bl-[12px] border-[1px] ${
                  numberOfTicketsSelected === 5
                    ? "bg-[#FFFF00] text-[#000000]"
                    : "bg-none text-[#FFFF00]"
                } border-[#F01E31] flex items-center gap-[5px] `}
              >
                <TicketIcon />5
              </button>
              <button
                onClick={() => setNumberOfTicketsSelected(10)}
                className={` text-[19px] w-[22%]  p-[5px] rounded-tr-[12px] rounded-bl-[12px] border-[1px] ${
                  numberOfTicketsSelected === 10
                    ? "bg-[#FFFF00] text-[#000000]"
                    : "bg-none text-[#FFFF00]"
                } border-[#F01E31] flex items-center gap-[5px] `}
              >
                <TicketIcon />
                10
              </button>
            </div>
            <div className=" h-[1px] w-[80%] mx-auto bg-gradient-to-r from-[#FFFF00] to-transparent mt-[20px]" />
            <div className=" w-[80%] mx-auto flex items-center justify-between mt-[10px]">
              <p className=" text-[#ffffff] lg:text-[20px] xl:text-[24px]">
                Odds
              </p>
              <p className=" text-[24px] text-[#FFFF00] font-advent-semibold">
                {numberOfTicketsSelected === 0
                  ? "-"
                  : `${numberOfTicketsSelected * 10}%`}
              </p>
            </div>
            <div className=" h-[1px] w-[80%] mx-auto bg-gradient-to-r from-[#FFFF00] to-transparent mt-[10px]" />
            <div className=" w-[80%]  mx-auto flex items-center justify-between mt-[10px]">
              <p className=" text-[#ffffff] lg:text-[20px] xl:text-[24px]">
                cost
              </p>
              <p className=" text-[24px] text-[#FFFF00] font-advent-regular">
                {numberOfTicketsSelected === 0
                  ? "-"
                  : ticketPrice && numberOfTicketsSelected * ticketPrice}{" "}
                $RACE ($50)
              </p>
            </div>
            <div className=" h-[1px] w-[80%] mx-auto bg-gradient-to-r from-[#FFFF00] to-transparent mt-[10px]" />
            <div className=" w-full flex justify-center">
              {1 ? (
                <button className=" p-[10px] rounded-t-[8px] rounded-bl-[44px] rounded-br-[8px] text-[#ffffff] bg-[#3A80FE] w-[80%] mx-auto uppercase text-[24px] border  mt-[20px] shadow-xl shadow-[#CEDFFF]">
                  let's go!
                </button>
              ) : (
                <button className=" p-[10px] rounded-t-[8px] rounded-bl-[44px] rounded-br-[8px] text-[#5DF7A4] bg-[#3D3D3D] w-[80%] mx-auto uppercase text-[24px] border  mt-[20px] shadow-xl shadow-[#CEDFFF]">
                  connect wallet
                </button>
              )}
            </div>
            <p className=" text-center text-[#85B6FF] text-[20px] mt-[20px] pb-[20px]">
              Balance-
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCounter;
