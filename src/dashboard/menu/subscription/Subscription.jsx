import React from 'react';
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
      <div className='grid md:grid-cols-3 grid-cols-1'>

      {attributes.map((item) => (
        <div
          key={item._id}
          className="w-full max-w-xs p-4 bg-white border border-blue-300 rounded-lg shadow-md my-4"
        >
          {/* Subscription Header */}
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
             <img src="/public/image/sub.png" alt="" />
            </div>
            <h2 className="ml-3 text-lg text-[#6AB9F7] font-semibold">{item.duration}</h2>
          </div>

          {/* Features */}
          <div className="mb-4">
            <p className="text-sm text-[#6AB9F7] text-gray-600">✔ {item.advantage1}</p>
            <p className="text-sm text-[#6AB9F7] text-gray-600">✔ {item.advantage2}</p>
            <p className="text-sm text-[#6AB9F7] text-gray-600">✔ {item.advantage3}</p>
          </div>

          {/* Price and Edit Button */}
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold text-[#6AB9F7]">${item.price.toFixed(2)} / <span className='text-sm'>Monthly</span></p>
            <button
              // onClick={() => navigate(`/dashboard/subscription/editsubscription/${item._id}`)}
              onClick={() => navigate(`/dashboard/subscription/editsubscription/${item?._id}`)}
              className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-400 transition duration-200"
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
