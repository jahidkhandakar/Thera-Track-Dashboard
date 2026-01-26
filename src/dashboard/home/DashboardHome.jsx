import Barchart from './Barchart';
import Card from './Card';
import Transaction from './Transaction';
 
 
 

const DashboardHome = () => {
 
    return (
        <div className="space-y-6 md:space-y-10">
            <Card />
            <Barchart />
            <Transaction />
        </div>
    );
};

export default DashboardHome;