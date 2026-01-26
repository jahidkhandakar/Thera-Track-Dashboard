
import React from 'react';
import { FaUsers } from 'react-icons/fa6';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { useStatusQuery } from '../../redux/features/otherApi/status';

const Card = () => {
  const { data: status } = useStatusQuery();

  const cards = [
    {
      title: 'Total Earning',
      value: `$${status?.data?.attributes?.totalEarning?.toFixed(2) || '0.00'}`,
      
      icon: <HiOutlineCurrencyDollar className="w-6 h-6 text-white" />,
      bgColor: '!bg-[#2196F3]',
    },
    {
      title: 'Total User',
      value: status?.data?.attributes?.userCount || '0',
      icon: <FaUsers className="w-6 h-6 text-white" />,
      bgColor: 'bg-blue-500',
    },
    {
      title: 'Total Sub Admin',
      value: status?.data?.attributes?.subAdminCount || '0',
      icon: <FaUsers className="w-6 h-6 text-white" />,
      bgColor: 'bg-blue-500',
    },
    
  ];

  return (
    <div className="w-full mt-6">
      <h1 className="font-semibold text-2xl text-gray-800 my-6">Overview</h1>
      
      <div className="w-full flex flex-col md:flex-row  gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-96 rounded-2xl bg-gradient-to-bl from-[#74bbf5] to-[#e7e9eb] shadow-sm border border-[#2196F3] p-4 md:p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4 md:gap-9 mb-4">
              <div className={`bg-[#2196F3] rounded-lg p-2 md:p-3 flex items-center justify-center shrink-0`}>
                {React.cloneElement(card.icon, { className: "w-5 h-5 md:w-6 md:h-6 text-white" })}
              </div>
              <h3 className="text-gray-700 text-lg md:text-3xl font-semibold truncate">{card.title}</h3>
            </div>

            <div className="flex items-end justify-between">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">{card.value}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;