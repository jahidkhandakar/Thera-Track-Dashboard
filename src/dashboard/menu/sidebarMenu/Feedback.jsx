// import { Input, Modal, DatePicker, Space, Table, Button } from "antd";
// import { BsInfoCircle } from "react-icons/bs";
// import { useState } from "react";
// import users from './../../../../public/image/users.jpg'
// import { CloseOutlined } from "@ant-design/icons";
// import styles from './style.module.css'
// import { useNavigate } from "react-router-dom";
// import { useGetFeedbackQuery } from "../../../redux/features/otherApi/feedback";
 
 
// const { Search } = Input;
 
// const dataSource = [
//     {
//       key: '1', 
//       customerName: 'Bashar Islam',
//       date: '16 Apr 2024',
//       Amount:'45',
//       Type: 'player',
//     },
//     {
//       key: '2', 
//       customerName: 'Bashar Islam',
//       date: '16 Apr 2024',
//       Amount:'45',
//       Type: 'player',
//     },
//     {
//       key: '3', 
//       customerName: 'Bashar Islam',
//       date: '16 Apr 2024',
//       Amount:'45',
//       Type: 'player',
//     },
     
// ]
// const Feedback = () => {
 
//     const [isModalOpen, setIsModalOpen] = useState(false);
//  const navigate = useNavigate()
//  const {data: feedback} = useGetFeedbackQuery()
//  console.log(feedback)
 
// // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
 
//   const columns = [
//     {
//       title: "#SI",
//       dataIndex: "si",
//       key: "si",
//       render: (text,_,index) => index + 1,
//     },
//     {
//       title: "User Name",
//       dataIndex: "customerName",
//       key: "name",
//       render: (_, record) => (
//         <div className="flex gap-2 items-center">
//           <img
//             className="w-[34px] h-[34px] rounded-full"
//             src={users}
//             alt=""
//           />
//           {/* <p className="font-medium">{record?.customerName}</p> */}
//           <p className="font-medium">AbSayed</p>
//         </div>
//       ),
//     },
   
//     {
//       title: "Type",
//       dataIndex: "Type",
//       key: "type",
//       render: (_, record) => (
//         <p>{(record?.Type) ?  record?.Type : "Apple Or Facebook User"}</p>
//       )
//     },
//     {
//       title: 'Amount',
//       dataIndex: 'Amount',
//       key: 'phone',
//     },
//     {
//       title: "Date",
//       key: "date",
//       dataIndex: "date",
//       render: (_, record) => (
//         // <p>{record?.createdAt?.split("T")[0] ? record?.createdAt?.split("T")[0] : "N/A"}</p>
//         <p>34/04/24</p>
//       )
//     },
    
//     {
//       title: "Action",
//       key: "action",
//       render: (_, record) => (
//         <Space size="middle">
         
//             <BsInfoCircle  onClick={() => navigate('details')}  size={18} className="text-[red] cursor-pointer" />
          
//           {/* <a><RxCross2 size={18} className='text-[red]'/></a> */}
//         </Space>
//       ),
//     },
//   ];
  
//   const handleView = () => {
//     // setUser(value);
//     // console.log(value)
//     setIsModalOpen(true);
//   };

// //   const onChange = (date, dateString) => {
// //     console.log(date, dateString);
// //   };
// //   console.log(user);
// //   const handleChangePage = (page) => {
// //     setCurrentPage(page);
// //     console.log(page);
// //   };
// // const onSearch = (value, _e, info) => console.log(info?.source, value);
// // const onChange = (date, dateString) => {
// //   console.log(date, dateString);
// // };
//   return (
//     <div className="">
       
//       <div className="rounded-t-lg mt-[24px]">
//         <div className="flex py-[22px] justify-between items-center">
//           <div>
//           <p className="text-header"> FeedBack</p>
//           </div>
//           <div>
//           {/* <Space direction="vertical">
//     <DatePicker onChange={onChange} />
   
//   </Space>
//           <Search style={{
//             width:"200px",
//             marginLeft:'4px'
//           }} placeholder="input search text" onSearch={onSearch} enterButton /> */}
//           </div>
         
          
//         </div>
//         <Table
//         pagination={{
//           total: dataSource.length,
//           showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
//           defaultPageSize: 1,
//           showSizeChanger: false,
//           itemRender: (current, type, originalElement) => {
//             if (type === 'prev') {
//               return <Button className={styles.paginationButton}>Back</Button>;
//             }
//             if (type === 'next') {
//               return <Button className={styles.paginationButton}>Next</Button>;
//             }
//             return originalElement;
//           },
//           className: styles.paginationCenter,
//         }}
//           columns={columns}
//           dataSource={dataSource}
//         />
//       </div>
//       <Modal
//         open={isModalOpen}
//         onOk={() => setIsModalOpen(false)}
//         onCancel={() => setIsModalOpen(false)}
//         footer={[]}
//         closeIcon={
//           <CloseOutlined
//             style={{
//               color: "white", // Icon color
//               backgroundColor: "#de0a26", // Background color of the close icon
//               borderRadius: "10%", // Rounded background
//               padding: "10px", // Padding inside the background
//             }}
//           />
//         }
//       >
//       <div>
//         <div className="flex justify-center items-center gap-2 flex-col border-b border-b-gray-300">
//           <p className="text-[26px] mb-[16px] font-medium">Transaction Details</p>
//         </div>
//         <div  className="p-[20px]">
//         <div className="flex justify-between border-b py-[16px]">
//             <p>Full Name:</p>
//             <p>
//               {/* {user?.name ? user?.name : "N/A"} */}
//               absayed
//             </p>
//           </div>
        
         
//           <div className="flex justify-between border-b py-[16px] ">
//             <p>Email:</p>
//             <p>
//               {/* {user?.email ? user?.email : "N/A"} */}
//               ab@gmail.com
//             </p>
//           </div>
//           <div className="flex justify-between border-b py-[16px]">
//             <p>Phone:</p>
//             <p>
//               {/* {user?.phone ? user?.phone : "N/A"} */}
//               +45269875
//             </p>
//           </div>
//           <div className="flex justify-between border-b py-[16px]">
//             <p>Date:</p>
//             <p>
//               {/* {user?.createdAt  ? user?.createdAt?.split("T")[0] : "N/A"} */}
//               23-11-24
//             </p>
//           </div>
//           <div className="flex justify-between items-center pt-[16px]">
//             <p>address:</p>
//             <p className="px-[15px] py-[10px] rounded-lg">
//               {/* Regular P550 */}
//               UK
//             </p>
//           </div>

//         </div>
//         <div className="flex items-center gap-4">
//           <button className="px-2 py-2 bg-slate-100 border-2 rounded-e-md w-[50%]">Downloard</button>
//           <button className="px-2 py-2 bg-[#193664] text-white rounded-s-md w-[50%]">Print</button>
//         </div>
//       </div>
//       </Modal>
//     </div>
//   );
// };

// export default Feedback;


import { Input, Modal, DatePicker, Space, Table, Button } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import users from './../../../../public/image/users.jpg'
import { CloseOutlined } from "@ant-design/icons";
import styles from './style.module.css'
import { useNavigate } from "react-router-dom";
import { useGetFeedbackQuery } from "../../../redux/features/otherApi/feedback";

const { Search } = Input;

const Feedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  
  const { data: feedbackResponse, isLoading, error } = useGetFeedbackQuery();
  
  // Extract feedback data from API response
  const feedbackData = feedbackResponse?.data || [];
  
  // Filter feedback based on search text
  const filteredData = feedbackData.filter(item => 
    item?.userId?.fullName?.toLowerCase().includes(searchText.toLowerCase()) ||
    item?.userId?.email?.toLowerCase().includes(searchText.toLowerCase()) ||
    item?.message?.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "#SI",
      dataIndex: "si",
      key: "si",
      render: (text, _, index) => ((currentPage - 1) * 10) + index + 1,
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <img
            className="w-[34px] h-[34px] rounded-full"
            src={record?.userId?.profileImage || users}
            alt="User"
          />
          <p className="font-medium">
            {record?.userId?.fullName || record?.userId?.firstName || "N/A"}
          </p>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, record) => (
        <p>{record?.userId?.email || "N/A"}</p>
      )
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      render: (_, record) => (
        <p className="max-w-[200px] truncate" title={record?.message}>
          {record?.message || "N/A"}
        </p>
      )
    },
    {
      title: "Emoji",
      dataIndex: "emoji",
      key: "emoji",
      render: (_, record) => (
        <p>{record?.emoji || "N/A"}</p>
      )
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
      render: (_, record) => (
        <p>
          {record?.createdAt 
            ? new Date(record.createdAt).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit', 
                year: '2-digit'
              })
            : "N/A"
          }
        </p>
      )
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <BsInfoCircle 
            onClick={() => handleViewDetails(record)}
            size={18} 
            className="text-[#193664] cursor-pointer hover:text-blue-600" 
          />
        </Space>
      ),
    },
  ];

  const handleViewDetails = (feedback) => {
    console.log(feedback?._id);
    navigate('details', { state: { id: feedback?._id } });
  };
  

  const onSearch = (value) => {
    setSearchText(value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    // You can implement date filtering here if needed
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading feedback...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error loading feedback data</div>;
  }

  return (
    <div className="">
      <div className="rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] justify-between items-center">
          <div>
            <p className="text-header">Feedback ({filteredData.length})</p>
          </div>
          <div className="flex gap-2">
            <Space direction="vertical">
              <DatePicker onChange={onChange} placeholder="Filter by date" />
            </Space>
            <Search 
              style={{
                width: "250px",
              }} 
              placeholder="Search by name, email or message" 
              onSearch={onSearch}
              onChange={(e) => onSearch(e.target.value)}
              value={searchText}
              enterButton 
            />
          </div>
        </div>
        
        <Table
          pagination={{
            total: filteredData.length,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            defaultPageSize: 10,
            current: currentPage,
            onChange: handleChangePage,
            showSizeChanger: true,
            showQuickJumper: true,
            itemRender: (current, type, originalElement) => {
              if (type === 'prev') {
                return <Button className={styles.paginationButton}>Back</Button>;
              }
              if (type === 'next') {
                return <Button className={styles.paginationButton}>Next</Button>;
              }
              return originalElement;
            },
            className: styles.paginationCenter,
          }}
          columns={columns}
          dataSource={filteredData}
          rowKey="_id"
          loading={isLoading}
        />
      </div>

      {/* Feedback Details Modal */}
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
        width={600}
        closeIcon={
          <CloseOutlined
            style={{
              color: "white",
              backgroundColor: "#de0a26",
              borderRadius: "50%",
              padding: "8px",
              fontSize: "12px"
            }}
          />
        }
      >
        <div>
          <div className="flex justify-center items-center gap-2 flex-col border-b border-b-gray-300">
            <p className="text-[26px] mb-[16px] font-medium">Feedback Details</p>
          </div>
          
          {selectedFeedback && (
            <div className="p-[20px]">
              <div className="flex justify-between border-b py-[16px]">
                <p className="font-medium">Full Name:</p>
                <p>{selectedFeedback?.userId?.fullName || "N/A"}</p>
              </div>
              
              <div className="flex justify-between border-b py-[16px]">
                <p className="font-medium">Email:</p>
                <p>{selectedFeedback?.userId?.email || "N/A"}</p>
              </div>
              
              <div className="flex justify-between border-b py-[16px]">
                <p className="font-medium">Phone:</p>
                <p>{selectedFeedback?.userId?.phoneNumber || "N/A"}</p>
              </div>
              
              <div className="flex justify-between border-b py-[16px]">
                <p className="font-medium">Date:</p>
                <p>
                  {selectedFeedback?.createdAt 
                    ? new Date(selectedFeedback.createdAt).toLocaleDateString('en-GB')
                    : "N/A"
                  }
                </p>
              </div>
              
              <div className="flex justify-between border-b py-[16px]">
                <p className="font-medium">Country:</p>
                <p>{selectedFeedback?.userId?.country || "N/A"}</p>
              </div>
              
              <div className="flex justify-between border-b py-[16px]">
                <p className="font-medium">City:</p>
                <p>{selectedFeedback?.userId?.city || "N/A"}</p>
              </div>
              
              <div className="flex justify-between border-b py-[16px]">
                <p className="font-medium">Emoji:</p>
                <p className="text-xl">{selectedFeedback?.emoji || "N/A"}</p>
              </div>
              
              <div className="flex flex-col gap-2 pt-[16px]">
                <p className="font-medium">Message:</p>
                <div className="px-[15px] py-[10px] bg-gray-50 rounded-lg min-h-[60px]">
                  <p className="whitespace-pre-wrap">{selectedFeedback?.message || "No message provided"}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-4 px-[20px] pb-[20px]">
            <button 
              className="px-4 py-2 bg-slate-100 border-2 hover:bg-slate-200 rounded-md w-[50%] transition-colors"
              onClick={() => {
                // Implement download functionality
                console.log('Download feedback', selectedFeedback);
              }}
            >
              Download
            </button>
            <button 
              className="px-4 py-2 bg-[#193664] hover:bg-[#2a4d7a] text-white rounded-md w-[50%] transition-colors"
              onClick={() => {
                // Implement print functionality
                window.print();
              }}
            >
              Print
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Feedback;