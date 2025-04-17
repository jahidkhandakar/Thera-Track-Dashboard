import React from 'react';
import user from './../../../../public/image/randomuser.jpg'
const FeedbackDetails = () => {
  return (
    <div className="p-6 mt-12">
        <h1 className="text-2xl font-semibold mb-4">Feedback Details</h1>
 
      <div className="flex items-center bg-white shadow-lg p-4 rounded-lg mb-6">
        <img
          src={user} // Replace with user's image
          alt="User"
          className="w-20 h-20 rounded-full object-cover mr-4"
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">02</p>
          <p className="text-sm text-gray-500">Name: Basha 858</p>
          <p className="text-sm text-gray-500">Email: demo@gmail.com</p>
          <p className="text-sm text-gray-500">Phone number: 555555555555</p>
          <p className="text-sm text-gray-500">Town/City: Basha 858</p>
          <p className="text-sm text-gray-500">Postcode: demo@gmail.com</p>
          <p className="text-sm text-gray-500">Country: 555555555555</p>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-xl text-yellow-500">😊</span>
          <h2 className="text-xl font-semibold">Feed Back Details</h2>
        </div>
        <p className="text-sm text-gray-600">
          "I've been using the app for a few days, and I'm really impressed with its clean interface and ease of use.
          The navigation is intuitive, and I love how quickly I can access the features I need. 
          I've been using the app for a few days, and I'm really impressed with its clean interface and ease of use. 
          The navigation is intuitive, and I love how quickly I can access the features I need."
        </p>
      </div>
    </div>
  );
};

export default FeedbackDetails;
