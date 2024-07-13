import { useEffect, useState } from "react";

const Rounds = () => {
  const [roundNumber, setRoundNumber] = useState<number | null>();
  const [numberOfTicketsSold, setNumberOfTicketsSold] = useState<
    number | null
  >();
  useEffect(() => {
    setRoundNumber(16);
    setNumberOfTicketsSold(80);
  }, [numberOfTicketsSold, roundNumber]);
  return (
    <div className=" text-[#FFFF00] uppercase text-[20px] lg:text-[24px] font-advent-bold">
      <div className=" flex justify-between">
        <p>Round {roundNumber} </p>
        <p className=" text-[#00FF76]">{numberOfTicketsSold}/100 Tickets</p>
      </div>
      <div
        className=" w-full h-[22px] bg-white rounded-[200px] mt-3 "
        style={{ boxShadow: "0 25px 50px -12px #02A5B0" }}
      >
        <div
          className={`bg-[#FFFF00] rounded-[200px]  h-[100%] `}
          style={{
            width: `${numberOfTicketsSold}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Rounds;
