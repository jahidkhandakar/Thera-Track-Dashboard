import Barchart from "./Barchart";
import Card from "./Card";
import RecentUser from "./Transaction";

const DashboardHome = () => {
  return (
    <div className="w-full space-y-6 md:space-y-10">
      <Card />
      <Barchart />
      <RecentUser />
    </div>
  );
};

export default DashboardHome;
