// import React from 'react';
// import { Form, Input, Button, Space } from 'antd';
// import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
// import { MdOutlineArrowBackIosNew } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom';

// const Addsubscriptin = () => {
//     const navigate = useNavigate()
//   const onFinish = (values) => {
//     console.log('Received values of form:', values);
//   };

//   return (
//     <div className='mt-8'>
//    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"> <span className='cursor-pointer'> <MdOutlineArrowBackIosNew  onClick={() => navigate('/dashboard/subscription')}/> </span> Add Subscription</h2>

//     <div className="p-6 mt-6 w-[50%] mx-auto bg-white rounded-lg ">
//        <Form name="add_subscription" onFinish={onFinish} layout="vertical">
//         <Form.Item
//           name="packageName"
//           label="Package Name"
//           rules={[{ required: true, message: 'Please input the package name!' }]}
//         >
//           <Input placeholder="Basic" />
//         </Form.Item>
//         <Form.Item
//           name="packageAmount"
//           label="Package Amount"
//           rules={[{ required: true, message: 'Please input the package amount!' }]}
//         >
//           <Input placeholder="$ 4.99" />
//         </Form.Item>
//         <Form.Item
//           name="packageExpiration"
//           label="Package Expiration"
//           rules={[{ required: true, message: 'Please input the package expiration!' }]}
//         >
//           <Input placeholder="1 month" />
//         </Form.Item>

       
//         <Form.List className = "flex items-center " name="features">
//           {(fields, { add, remove }) => (
//             <>
//               {fields.map(({ key, name, fieldKey, ...restField }) => (
//                 <Space key={key} align="baseline" className="flex w-full items-center">
//                   <Form.Item
//                     {...restField}
//                     name={[name, 'feature']}
//                     fieldKey={[fieldKey, 'feature']}
//                     rules={[{ required: true, message: 'Missing feature' }]}
//                     className=""
//                   >
//                     <Input placeholder="Enter feature" />
//                   </Form.Item>
//                   <Form.Item>

//                   <MinusCircleOutlined className='text-[18px]' onClick={() => remove(name)} />
//                   </Form.Item>
//                 </Space>
//               ))}
//               <Form.Item>
//                 <Button
//                   type="dashed"
//                   onClick={() => add()}
//                   className="w-full flex items-center justify-center"
//                 >
//                   <PlusOutlined /> Add new feature
//                 </Button>
//               </Form.Item>
//             </>
//           )}
//         </Form.List>
//         <Form.Item>
//           <Button  htmlType="submit" className="w-full !bg-[#193664] !text-white">
//             ADD Subscription
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//     </div>
//   );
// };

// export default Addsubscriptin;



import { ArrowLeftOutlined, CrownOutlined, DollarOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, InputNumber, message, Select, Typography } from 'antd';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAddSubscriptionMutation } from '../../../redux/features/otherApi/addSubscription';

const { Title, Text } = Typography;
const { Option } = Select;

const AddSubscription = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const durationOptions = [
    '01 Month', 
    '06 Month',
    '12 Month',
    
  ];
const [add_subscription] = useAddSubscriptionMutation()

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      // Here you would make your API call
        const processedValues = {
        ...values,
        advantage1: values.advantage1 || '',
        advantage2: values.advantage2 || '',
        advantage3: values.advantage3 || '',
      };
      const res = await add_subscription(processedValues).unwrap()
      console.log(res)
      if(res?.code == 200){
        toast.success(res?.message)
      } 
      form.resetFields();
      setTimeout(() => {
        navigate('/dashboard/subscription')
      }, 1000); 
   
    } catch (error) {
      message.error(error?.message);
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/dashboard/subscription');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Toaster />
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Button 
            icon={<ArrowLeftOutlined />} 
            onClick={handleBack}
            className="mb-4"
            type="text"
          >
            Back to Subscriptions
          </Button>
          <Title level={2} className="mb-0 flex items-center gap-3">
            <CrownOutlined className="text-blue-600" />
            Add New Subscription
          </Title>
          <Text className="text-gray-600">
            Create a new subscription plan for your users
          </Text>
        </div>

        {/* Form Card */}
        <Card className="">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark={false}
            className="space-y-4"
          >
            {/* Duration Selection */}
            <Form.Item
              label={<span className="text-base font-medium">Duration</span>}
              name="duration"
              rules={[{ required: true, message: 'Please select duration' }]}
            >
              <Select
                placeholder="Select subscription duration"
                size="large"
                className="w-full"
              >
                {durationOptions.map(duration => (
                  <Option key={duration} value={duration}>
                    {duration}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            {/* Price */}
            <Form.Item
              label={<span className="text-base font-medium">Price (USD)</span>}
              name="price"
              rules={[
                { required: true, message: 'Please enter price' },
                { type: 'number', min: 0.01, message: 'Price must be greater than 0' }
              ]}
            >
              <InputNumber
                prefix={<DollarOutlined />}
                placeholder="99.99"
                size="large"
                className="w-full"
                min={0.01}
                step={0.01}
                precision={2}
              />
            </Form.Item>

            {/* Advantages */}
            <div className="space-y-4">
              <Text className="text-base font-medium block">Subscription Benefits</Text>
              
              <Form.Item
                label="Advantage 1"
                name="advantage1"
                rules={[{ required: true, message: 'Please enter first advantage' }]}
              >
                <Input
                  placeholder="e.g., Access to premium content"
                  size="large"
                  prefix="✓"
                />
              </Form.Item>

              <Form.Item
                label="Advantage 2"
                name="advantage2"
               
              >
                <Input
                  placeholder="e.g., Priority customer support"
                  size="large"
                  prefix="✓"
                />
              </Form.Item>

              <Form.Item
                label="Advantage 3"
                name="advantage3"
                
              >
                <Input
                  placeholder="e.g., Free monthly webinar"
                  size="large"
                  prefix="✓"
                />
              </Form.Item>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-6">
              <Button
                type="default"
                size="large"
                onClick={handleBack}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                Create Subscription
              </Button>
            </div>
          </Form>
        </Card> 
     
      </div>
    </div>
  );
};

export default AddSubscription;