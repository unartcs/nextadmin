import Card from "./card/card";
import Chart from "./chart/chart";
import Rightbar from "./rightbar/rightbar";
import Transactions from "./transactions/transactions";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper flex">
      <div className="dashboard-main flex flex-[3] flex-col">
        <div className="dashboard-cards flex">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions/>
        <Chart/>
      </div>
      <div className="dashboard-side flex-1 flex">
        <Rightbar/>
      </div>
    </div>
  );
};

export default Dashboard;
