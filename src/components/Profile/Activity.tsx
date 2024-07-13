import { useEffect, useState } from "react";
import {
  TicketIcon,
  SolanaIcon,
  BirdTokenIcon,
  ResultIcon,
  SolanaIconNav,
} from "../Icons";
import ActivityFooter from "../../assets/ActivityFooter.png";
interface ActivityData {
  date: string;
  lottery: number;
  tickets: number;
  paid: number;
  status: "WON" | "LOST";
  txn: string;
  amountWon?: number;
}
const Activity = () => {
  const [activityData, setActivityData] = useState<ActivityData[]>([]);

  useEffect(() => {
    const data: ActivityData[] = [
      {
        date: "05/07",
        lottery: 16,
        tickets: 5,
        paid: 2500,
        status: "LOST",
        txn: "0xabc123",
      },
      {
        date: "05/07",
        lottery: 15,
        tickets: 3,
        paid: 1500,
        status: "WON",
        txn: "0xdef456",
        amountWon: 10,
      },
      {
        date: "05/07",
        lottery: 14,
        tickets: 7,
        paid: 3500,
        status: "LOST",
        txn: "0xghi789",
      },
      {
        date: "05/07",
        lottery: 13,
        tickets: 2,
        paid: 1000,
        status: "LOST",
        txn: "0xjkl012",
      },
      {
        date: "05/07",
        lottery: 12,
        tickets: 4,
        paid: 2000,
        status: "WON",
        txn: "0xmnq345",
        amountWon: 10,
      },
      {
        date: "05/07",
        lottery: 11,
        tickets: 6,
        paid: 3000,
        status: "LOST",
        txn: "0xopq678",
      },
      {
        date: "05/07",
        lottery: 10,
        tickets: 8,
        paid: 4000,
        status: "WON",
        txn: "0xrst901",
        amountWon: 10,
      },
      {
        date: "05/07",
        lottery: 9,
        tickets: 1,
        paid: 500,
        status: "LOST",
        txn: "0xuvw234",
      },
      {
        date: "05/07",
        lottery: 8,
        tickets: 9,
        paid: 4500,
        status: "WON",
        txn: "0xxyz567",
        amountWon: 10,
      },
      {
        date: "05/07",
        lottery: 7,
        tickets: 10,
        paid: 5000,
        status: "LOST",
        txn: "0xabcd890",
      },
    ];
    setActivityData(data);
  }, []);

  return (
    <div>
      <div className=" hidden lg:block  w-full h-[550px] mt-[200px] xl:mt-[100px] bg-[#111111] rounded-[8px] mb-[100px] font-advent-bold uppercase overflow-y-auto">
        <div className=" w-[90%] mx-auto">
          <p className=" text-[24px] text-[#FFFF00] mt-[20px]">Activity</p>
          <div className=" h-[1px] w-full bg-gradient-to-r from-[#FFFF00] to-transparent mt-[20px]" />
          <div className=" flex justify-between mt-[20px] ">
            <p className=" text-[18px] text-[#FFFF00] font-advent-regular ">
              date
            </p>
            <p className=" text-[18px] text-[#FFFF00] font-advent-regular ">
              lottery
            </p>
            <p className=" text-[18px] text-[#FFFF00] font-advent-regular ">
              Tickets
            </p>
            <p className=" text-[18px] text-[#FFFF00] font-advent-regular ">
              Paid
            </p>
            <p className=" text-[18px] text-[#FFFF00] font-advent-regular ">
              result
            </p>
            <p className=" text-[18px] text-[#FFFF00] font-advent-regular ">
              Txn
            </p>
          </div>
          <div>
            {activityData.map((data: ActivityData) => (
              <div>
                <div className=" flex justify-between mt-[20px]">
                  <p className=" text-[18px] text-[#ffffff]  w-[100px] overflow-hidden ">
                    {data.date}...
                  </p>
                  <p className=" text-[18px] text-[#ffffff] ">
                    round {data.lottery}
                  </p>
                  <div className=" flex gap-2 items-center">
                    <TicketIcon />
                    <p className=" text-[18px] text-[#ffffff] ">
                      {data.tickets}
                    </p>
                  </div>
                  <div className=" flex gap-2 items-center">
                    <BirdTokenIcon />
                    <p className=" text-[18px] text-[#ffffff] w-[100px] ">
                      {data.paid / 100}K{" "}
                      <span className="text-[#FFFF00]">($50)</span>
                    </p>
                  </div>
                  <ResultIcon status={data.status} />
                  <a href="" target="_blank">
                    <SolanaIcon />
                  </a>
                </div>
                <div className=" h-[1px] w-full bg-gradient-to-r from-[#FFFF00] to-transparent mt-[20px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src={ActivityFooter}
        className=" w-full h-auto mt-[-80px] hidden lg:block mb-[50px]"
      />

      <div className=" lg:hidden w-[100%] mt-[40px] p-[20px] mx-auto bg-[#111111] rounded-[6px] uppercase">
        <p className=" font-advent-bold text-[20px] text-[#FFFF00]">Activity</p>
        {activityData.map((data) => (
          <div className=" flex flex-col gap-[10px] mt-[30px]">
            <div className=" flex justify-between ">
              <p className=" font-advent-regular text-[16px] text-[#FFFF00]">
                date
              </p>
              <p className=" font-advent-regular text-[16px] text-[#ffffff]">
                {data.date}
              </p>
            </div>
            <div className=" w-full h-[1px] bg-gradient-to-r from-[#111111] to-white" />
            <div className=" flex justify-between ">
              <p className=" font-advent-regular text-[16px] text-[#FFFF00]">
                round
              </p>
              <p className=" font-advent-regular text-[16px] text-[#ffffff]">
                {data.lottery}
              </p>
            </div>
            <div className=" w-full h-[1px] bg-gradient-to-r from-[#111111] to-white" />
            <div className=" flex justify-between ">
              <p className=" font-advent-regular text-[16px] text-[#FFFF00]">
                tickets
              </p>
              <p className=" font-advent-regular text-[16px] text-[#ffffff] flex gap-2">
                <TicketIcon />
                <span className=" font-advent-regular text-[16px] text-[#ffffff]">
                  {data.tickets}
                </span>
              </p>
            </div>
            <div className=" w-full h-[1px] bg-gradient-to-r from-[#111111] to-white" />
            <div className=" flex justify-between ">
              <p className=" font-advent-regular text-[16px] text-[#FFFF00]">
                paid
              </p>
              <p className=" font-advent-regular text-[16px] text-[#ffffff]">
                {data.paid}
              </p>
            </div>
            <div className=" w-full h-[1px] bg-gradient-to-r from-[#111111] to-white" />
            <div className=" flex justify-between ">
              <p className=" font-advent-regular text-[16px] text-[#FFFF00]">
                result
              </p>
              <p
                className={` font-advent-bold text-[16px] flex gap-1 items-center ${
                  data.status === "WON" ? "text-[#99EE2D]" : "text-[#F01E31]"
                }`}
              >
                <p>
                  {data.status === "WON"
                    ? `WON $${data.amountWon}`
                    : data.status}
                </p>
                <span>
                  <SolanaIconNav />
                </span>
              </p>
            </div>
            <div className=" w-full h-[1px] bg-gradient-to-r from-[#FFFF00] to-[#111111] mt-[20px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
