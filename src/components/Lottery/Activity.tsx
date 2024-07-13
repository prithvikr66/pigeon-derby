import { useEffect, useState } from "react";
import { TicketIcon, SolanaIcon, BirdTokenIcon, SolanaIconNav } from "../Icons";

interface ActivityData {
  player: string;
  lottery: number;
  tickets: number;
  paid: number;
  txn: string;
}
const Activity = () => {
  const [activityData, setActivityData] = useState<ActivityData[]>([]);

  useEffect(() => {
    const data: ActivityData[] = [
      {
        player: "0x2a...s3a6",
        lottery: 16,
        tickets: 5,
        paid: 2500,
        txn: "0xabc123",
      },
      {
        player: "0x1b...f2b7",
        lottery: 15,
        tickets: 3,
        paid: 1500,
        txn: "0xdef456",
      },
      {
        player: "0x3c...e4c8",
        lottery: 14,
        tickets: 7,
        paid: 3500,
        txn: "0xghi789",
      },
      {
        player: "0x4d...d5d9",
        lottery: 13,
        tickets: 2,
        paid: 1000,
        txn: "0xjkl012",
      },
      {
        player: "0x5e...c6e0",
        lottery: 12,
        tickets: 4,
        paid: 2000,
        txn: "0xmnq345",
      },
      {
        player: "0x6f...b7f1",
        lottery: 11,
        tickets: 6,
        paid: 3000,
        txn: "0xopq678",
      },
      {
        player: "0x7g...a8g2",
        lottery: 10,
        tickets: 8,
        paid: 4000,
        txn: "0xrst901",
      },
      {
        player: "0x8h...h9h3",
        lottery: 9,
        tickets: 1,
        paid: 500,
        txn: "0xuvw234",
      },
      {
        player: "0x9i...g0i4",
        lottery: 8,
        tickets: 9,
        paid: 4500,
        txn: "0xxyz567",
      },
      {
        player: "0x0j...f1j5",
        lottery: 7,
        tickets: 10,
        paid: 5000,
        txn: "0xabcd890",
      },
    ];
    setActivityData(data);
  }, []);

  return (
    <div>
      <div className=" hidden lg:block w-full h-[550px] mt-[200px] xl:mt-[100px] bg-[#111111] rounded-[8px] mb-[100px] font-advent-bold uppercase overflow-auto">
        <div className=" w-[90%] mx-auto">
          <p className=" text-[24px] text-[#FFFF00] mt-[20px]">Activity</p>
          <div className=" h-[1px] w-full bg-gradient-to-r from-[#FFFF00] to-transparent mt-[20px]" />
          <div className=" flex justify-between mt-[20px] ">
            <p className=" text-[18px] text-[#FFFF00] font-advent-regular ">
              player
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
              Txn
            </p>
          </div>
          <div>
            {activityData.map((data: ActivityData) => (
              <div>
                <div className=" flex justify-between mt-[20px]">
                  <p className=" text-[18px] text-[#ffffff]  w-[100px] overflow-hidden ">
                    {data.player.slice(0, 4)}...
                    {data.player.slice(data.player.length - 4)}
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

      <div className=" lg:hidden w-[100%]  p-[20px] mx-auto bg-[#111111] rounded-[6px] uppercase mt-[100px]">
        <p className=" font-advent-bold text-[20px] text-[#FFFF00]">Activity</p>
        {activityData.map((data) => (
          <div className=" flex flex-col gap-[10px] mt-[30px]">
            <div className=" flex justify-between ">
              <p className=" font-advent-regular text-[16px] text-[#FFFF00]">
                player
              </p>
              <p className=" font-advent-regular text-[16px] text-[#ffffff]">
                {data.player}
              </p>
            </div>
            <div className=" w-full h-[1px] bg-gradient-to-r from-[#111111] to-white" />
            <div className=" flex justify-between ">
              <p className=" font-advent-regular text-[16px] text-[#FFFF00]">
                lottery
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
                txn
              </p>
              <p className=" font-advent-regular text-[16px] text-[#ffffff]">
                <a href={data.txn}>
                  <SolanaIconNav />
                </a>
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
