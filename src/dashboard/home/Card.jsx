// import React from 'react';
// import { BiSolidUserPlus } from 'react-icons/bi';
// import { BsExclude } from 'react-icons/bs';
// import { CiBag1 } from 'react-icons/ci';
// import { FaPersonRunning, FaUsers } from 'react-icons/fa6';
// import { HiOutlineCurrencyDollar } from 'react-icons/hi';
// import { SiMagento } from 'react-icons/si';
// import { useStatusQuery } from '../../redux/features/otherApi/status';

// const Card = () => {

// const {data: status} = useStatusQuery()
// console.log(status?.data?.attributes)


//     return (
//         <div className=' mt-6'>
//             <h1 className="font-medium text-xl">Overview</h1>
//                <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 grid-cols-1 lg:gap-2 xl:gap-3 w-full">
//         <div className=" rounded h-[180px] flex justify-between items-center card bg-[#FFFFFF] shadow-xl">
//           <div className="mx-6 h-16 w-16 rounded bg-primaryBg flex justify-center items-center">
//             <HiOutlineCurrencyDollar className=" text-whiteText w-12 h-12" />
//           </div>
//           <div className="mx-2 text-center">
//             <p className="text-[18px] font-semibold text-[#193664] my-4">
//               Total Earnings
//             </p>
//            <h1 className="text-[34px] font-medium">
//   ${status?.data?.attributes?.totalEarning.toFixed(2)}
// </h1>
//           </div>
//         </div>
//         <div className=" rounded h-[180px] flex justify-between items-center card bg-[#FFFFFF] shadow-xl">
//           <div className="mx-6 h-16 w-16 rounded bg-primaryBg flex justify-center items-center">
//             <FaUsers className="text-whiteText w-12 h-12" />
//           </div>
//           <div className="mx-6 text-center">
//             <p className="text-[18px] font-semibold text-primaryBg my-4">
//               Total Users
//             </p>
//             <h1 className="text-[34px] font-medium">{status?.data?.attributes?.userCount}</h1>
//           </div>
//         </div>

//         {/* <div className="  rounded h-[180px] flex justify-between items-center card bg-[#FFFFFF] shadow-xl">
//           <div className="mx-6 h-16 w-16 rounded bg-primaryBg flex justify-center items-center">
//             <FaPersonRunning className="text-whiteText w-12 h-12" />
//           </div>
//           <div className="mx-6 text-center">
//             <p className="text-[18px] font-semibold text-[#193664] my-4">
//               Total Trainer
//             </p>
//             <h1 className="text-[34px] font-medium">95</h1>
//           </div>
//         </div> */}

       
        
//       </div>

//         </div>
//     );
// };

// export default Card;


import React from 'react';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa6';
import { useStatusQuery } from '../../redux/features/otherApi/status';

const Card = () => {
  const { data: status } = useStatusQuery();
  console.log(status?.data?.attributes);

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
    
  ];

  return (
    <div className="mt-6">
      <h1 className="font-semibold text-2xl text-gray-800 my-6">Overview</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className=" rounded-2xl bg-gradient-to-bl from-[#74bbf5] to-[#e7e9eb] shadow-sm border border-[#2196F3] p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-9 mb-4">
              <div className={`bg-[#2196F3] rounded-lg p-3 flex items-center justify-center`}>
                {card.icon}
              </div>
              <h3 className="text-gray-700 text-[32px] font-semibold">{card.title}</h3>
            </div>

            <div className="flex items-end justify-between">
              <h2 className="text-4xl font-bold text-gray-900">{card.value}</h2>
              
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;