// import React from 'react';
// import { Card, Button } from 'antd';
// import { CheckOutlined, CrownOutlined } from '@ant-design/icons';
// import 'tailwindcss/tailwind.css';
// import { FaPlus } from 'react-icons/fa6';
// import { useNavigate } from 'react-router-dom';

// const Subscription = () => {
//   const navigate = useNavigate()
//   return (
//     <div className='mt-12'> 
//     <div className='mt-4 flex justify-between items-center'>
//       <h1 className='text-header'>Subscriptions</h1>
//       <button onClick={() => navigate('/dashboard/subscription/addsubscription')} className=' bg-primaryBg text-whiteText rounded px-4 py-2 text-white flex items-center gap-2'> <span><FaPlus /></span> Add Subscription</button>
//     </div>
//     <Card
//       className="bg-green-500 rounded-lg text-white"
//       style={{ width: 240 }}
//       bordered={false}
//     >
//       <div className="text-center">
//         <div className="text-lg font-semibold mb-2">BASIC</div>
//         <CrownOutlined className="text-2xl mb-4" />
//         <div className="text-2xl font-bold">$9.99 <span className="text-base font-normal">/month</span></div>
//         <div className="text-sm mt-4 mb-6">Add your advertisement.</div>
//         <div className="mb-6">
//           <CheckOutlined className="text-lg" />
//         </div>
//         <div className="space-x-2">
//           <Button onClick={() => navigate('/dashboard/subscription/editsubscription')} type="primary" className="bg-white text-green-500 hover:bg-green-100">
//             Edit
//           </Button>
//           <Button type="default" className="bg-white text-green-500 hover:bg-green-100">
//             Delete
//           </Button>
//         </div>
//       </div>
//     </Card>
//     </div>
//   );
// };

// export default Subscription;


import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Subscription = () => {
    const navigate = useNavigate()
    return (
      <div className='mt-12'>

      <div className='mt-4 flex justify-between items-center'>
        <h1 className='text-header'>Subscriptions</h1>
        <button onClick={() => navigate('/dashboard/subscription/addsubscription')} className='rounded px-4 py-2  bg-[#2196F3] flex items-center gap-2'> <span><FaPlus/></span> Add Subscription</button>
      </div>

    <div className="w-full  max-w-xs p-4 bg-white border border-blue-300 rounded-lg shadow-md">
   
  

      {/* Subscription Header */}
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
          <span>👑</span> {/* Icon for premium or special plan */}
        </div>
        <h2 className="ml-3 text-lg font-semibold">01 Month</h2>
      </div>

      {/* Features */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">✔ Unlimited Chart</p>
        <p className="text-sm text-gray-600">✔ Unlimited Chart</p>
        <p className="text-sm text-gray-600">✔ Unlimited Chart</p>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-blue-600">$99.00 / Monthly</p>
        <button onClick={() => navigate('/dashboard/subscription/editsubscription')} className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-400 transition duration-200">
          Edit
        </button>
      </div>
    </div>
    </div>

  );
};

export default Subscription;

