import { FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useSubscriptionQuery } from '../../../redux/features/otherApi/subscription';

const Subscription = () => {
  const navigate = useNavigate();
  const { data: subscription, isLoading, error } = useSubscriptionQuery();

  if (isLoading) return <p>Loading subscriptions...</p>;
  if (error) return <p>Failed to load subscriptions</p>;

  // Safe access to attributes array
  const attributes = subscription?.data?.attributes || [];

  return (
    <div className='mt-12'>
      <div className='mt-4 flex justify-between items-center'>
        <h1 className='text-header'>Subscriptions</h1>
        <button
          onClick={() => navigate('/dashboard/subscription/addsubscription')}
          className='rounded px-4 py-2 bg-[#2196F3] flex text-white items-center gap-2'
        >
          <span><FaPlus /></span> Add Subscription
        </button>
      </div>

      {/* Render subscriptions dynamically */}
      {attributes.length === 0 && <p>No subscriptions available</p>}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
      {attributes.map((item) => (
        <div
          key={item._id}
          className="w-full p-6 bg-white border border-blue-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Subscription Header */}
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
             <img src="/image/sub.png" className="w-6 h-6" alt="" />
            </div>
            <h2 className="ml-4 text-xl text-[#2196F3] font-bold">{item.duration}</h2>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-8 min-h-[100px]">
            <p className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-blue-500 font-bold shrink-0">✔</span> {item.advantage1}
            </p>
            <p className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-blue-500 font-bold shrink-0">✔</span> {item.advantage2}
            </p>
            <p className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-blue-500 font-bold shrink-0">✔</span> {item.advantage3}
            </p>
          </div>

          {/* Price and Edit Button */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <p className="text-2xl font-bold text-[#2196F3]">${item.price.toFixed(2)}</p>
              <p className="text-xs text-gray-400 font-medium tracking-wide uppercase mt-1">Monthly</p>
            </div>
            <button
              onClick={() => navigate(`/dashboard/subscription/editsubscription/${item?._id}`)}
              className="px-6 py-2.5 bg-[#2196F3] text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors shadow-sm"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Subscription;
