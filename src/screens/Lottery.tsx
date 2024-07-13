import Activity from "../components/Lottery/Activity";
import Rounds from "../components/Lottery/Rounds";
import TicketCounter from "../components/Lottery/TicketCounter";
import TicketsStatus from "../components/Lottery/TicketsStatus";

const Lottery = () => {
  return (
    <div className=" min-h-screen">
      <div className=" w-[80%] mx-auto mt-[50px]  ">
        <Rounds />
        <div className="w -[80%] flex justify-between items-center mt-[50px]">
          <TicketCounter />
            <TicketsStatus />

        </div>
        <Activity />
      </div>
    </div>
  );
};

export default Lottery;
