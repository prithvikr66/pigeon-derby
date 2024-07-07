import Rounds from "../components/Lottery/Rounds";
import TicketCounter from "../components/Lottery/TicketCounter";
import TicketsStatus from "../components/Lottery/TicketsStatus";

const Lottery = () => {
  return (
    <div>
      <div className=" w-[80%] mx-auto mt-[50px] min-h-screen ">
        <Rounds />
        <div className="w -[80%] flex justify-between items-center mt-[50px]">
          <TicketCounter />
          <TicketsStatus />
        </div>
      </div>
    </div>
  );
};

export default Lottery;
