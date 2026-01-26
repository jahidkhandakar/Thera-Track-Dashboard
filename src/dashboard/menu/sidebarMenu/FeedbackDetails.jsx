// import React from 'react';
// import user from './../../../../public/image/randomuser.jpg'
// const FeedbackDetails = () => {
//   return (
//     <div className="p-6 mt-12">
//         <h1 className="text-2xl font-semibold mb-4">Feedback Details</h1>
 
//       <div className="flex items-center bg-white  p-4 rounded-lg mb-6">
//         <img
//           src={user} // Replace with user's image
//           alt="User"
//           className="w-20 h-20 rounded-full object-cover mr-4"
//         />
//         <div className="flex flex-col">
//           <p className="text-lg font-semibold">02</p>
//           <p className="text-sm text-gray-500">Name: Basha 858</p>
//           <p className="text-sm text-gray-500">Email: demo@gmail.com</p>
//           <p className="text-sm text-gray-500">Phone number: 555555555555</p>
//           <p className="text-sm text-gray-500">Town/City: Basha 858</p>
//           <p className="text-sm text-gray-500">Postcode: demo@gmail.com</p>
//           <p className="text-sm text-gray-500">Country: 555555555555</p>
//         </div>
//       </div>

//       {/* Feedback Section */}
//       <div className="bg-white  p-6 rounded-lg">
//         <div className="flex items-center space-x-2 mb-4">
//           <span className="text-xl text-yellow-500">😊</span>
//           <h2 className="text-xl font-semibold">Feed Back Details</h2>
//         </div>
//         <p className="text-sm text-gray-600">
//           "I've been using the app for a few days, and I'm really impressed with its clean interface and ease of use.
//           The navigation is intuitive, and I love how quickly I can access the features I need. 
//           I've been using the app for a few days, and I'm really impressed with its clean interface and ease of use. 
//           The navigation is intuitive, and I love how quickly I can access the features I need."
//         </p>
//       </div>
//     </div>
//   );
// };

// export default FeedbackDetails;


import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Divider, Tag } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetFeedbackQuery } from "../../../redux/features/otherApi/feedback";
import users from './../../../../public/image/users.jpg';

const FeedbackDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {};
  console.log(id)
  // Get feedback ID from URL params
  const { data: feedbackResponse, isLoading, error } = useGetFeedbackQuery();
  
  // Find the specific feedback by ID
  const feedbackData = feedbackResponse?.data || [];
  const selectedFeedback = feedbackData.find(item => item._id === id);

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  const handleDownload = () => {
    // Create download content
    const content = `
Feedback Details
================
Name: ${selectedFeedback?.userId?.fullName || 'N/A'}
Email: ${selectedFeedback?.userId?.email || 'N/A'}
Phone: ${selectedFeedback?.userId?.phoneNumber || 'N/A'}
Date: ${selectedFeedback?.createdAt ? new Date(selectedFeedback.createdAt).toLocaleDateString('en-GB') : 'N/A'}
Country: ${selectedFeedback?.userId?.country || 'N/A'}
City: ${selectedFeedback?.userId?.city || 'N/A'}
Emoji: ${selectedFeedback?.emoji || 'N/A'}
Message: ${selectedFeedback?.message || 'No message provided'}
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `feedback-${selectedFeedback?._id || 'details'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };



  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-lg">Loading feedback details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-500 text-lg">Error loading feedback details</div>
      </div>
    );
  }

  if (!selectedFeedback) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
        <div className="text-lg text-gray-600">Feedback not found</div>
        <Button onClick={handleBack} icon={<ArrowLeftOutlined />}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto p-4 md:p-6 mt-4 md:mt-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button 
            onClick={handleBack}
            icon={<ArrowLeftOutlined />}
            className="flex items-center"
          >
            Back
          </Button>
          <h1 className="text-2xl font-bold text-gray-800">Feedback Details</h1>
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={handleDownload}
            icon={<DownloadOutlined />}
            className="flex items-center"
          >
            Download
          </Button>
         
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Information Card */}
        <Card 
          title="User Information" 
          className="lg:col-span-1"
          headStyle={{ backgroundColor: '#f8f9fa', fontWeight: 'bold' }}
        >
          <div className="flex flex-col items-center text-center mb-4">
            <Avatar 
              size={80} 
              src={selectedFeedback?.userId?.profileImage || users}
              className="mb-3"
            />
            <h3 className="text-lg font-semibold">
              {selectedFeedback?.userId?.fullName || selectedFeedback?.userId?.firstName || 'N/A'}
            </h3>
            <Tag color={selectedFeedback?.userId?.status === 'Active' ? 'green' : 'red'}>
              {selectedFeedback?.userId?.status || 'Unknown'}
            </Tag>
          </div>
          
          <Divider />
          
          <div className="space-y-3">
            <div>
              <p className="text-gray-600 text-sm">Email</p>
              <p className="font-medium">{selectedFeedback?.userId?.email || 'N/A'}</p>
            </div>
            
            <div>
              <p className="text-gray-600 text-sm">Phone</p>
              <p className="font-medium">{selectedFeedback?.userId?.phoneNumber || 'N/A'}</p>
            </div>
            
            <div>
              <p className="text-gray-600 text-sm">Location</p>
              <p className="font-medium">
                {[selectedFeedback?.userId?.city, selectedFeedback?.userId?.country]
                  .filter(Boolean)
                  .join(', ') || 'N/A'}
              </p>
            </div>
            
            <div>
              <p className="text-gray-600 text-sm">Post Code</p>
              <p className="font-medium">{selectedFeedback?.userId?.postCode || 'N/A'}</p>
            </div>
            
            <div>
              <p className="text-gray-600 text-sm">Role</p>
              <Tag color="blue">{selectedFeedback?.userId?.role || 'N/A'}</Tag>
            </div>
            
            <div>
              <p className="text-gray-600 text-sm">Account Created</p>
              <p className="font-medium">
                {selectedFeedback?.userId?.createdAt 
                  ? new Date(selectedFeedback.userId.createdAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })
                  : 'N/A'
                }
              </p>
            </div>
          </div>
        </Card>

        {/* Feedback Content Card */}
        <Card 
          title="Feedback Content" 
          className="lg:col-span-2"
          headStyle={{ backgroundColor: '#f8f9fa', fontWeight: 'bold' }}
        >
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 text-sm mb-2">Feedback Date</p>
              <p className="font-medium text-lg">
                {selectedFeedback?.createdAt 
                  ? new Date(selectedFeedback.createdAt).toLocaleDateString('en-GB', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })
                  : 'N/A'
                }
              </p>
            </div>
            
            <Divider />
            
            <div>
              <p className="text-gray-600 text-sm mb-2">Emoji Rating</p>
              <div className="flex items-center gap-2">
                <span className="text-3xl">{selectedFeedback?.emoji || '😐'}</span>
                <span className="text-gray-600">({selectedFeedback?.emoji || 'No emoji'})</span>
              </div>
            </div>
            
            <Divider />
            
            <div>
              <p className="text-gray-600 text-sm mb-3">Message</p>
              <div className="bg-gray-50 p-4 rounded-lg min-h-[120px]">
                <p className="whitespace-pre-wrap leading-relaxed">
                  {selectedFeedback?.message || 'No message provided'}
                </p>
              </div>
            </div>
            
            <Divider />
            
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <p className="font-medium">Feedback ID</p>
                <p className="font-mono text-xs bg-gray-100 p-1 rounded">
                  {selectedFeedback?._id}
                </p>
              </div>
              <div>
                <p className="font-medium">Last Updated</p>
                <p>
                  {selectedFeedback?.updatedAt 
                    ? new Date(selectedFeedback.updatedAt).toLocaleDateString('en-GB')
                    : 'N/A'
                  }
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
     
    </div>
  );
};

export default FeedbackDetails;