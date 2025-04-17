// import React from 'react';
// import { Form, Input, Button } from 'antd';
 
// import { MdOutlineArrowBackIosNew } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom';

// const Editsubscription = () => {
//     const navigate = useNavigate()
//   const onFinish = (values) => {
//     console.log('Received values of form:', values);
//   };

//   return (
//      <div className='mt-8'>
//    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"> <span className='cursor-pointer'> <MdOutlineArrowBackIosNew  onClick={() => navigate('/dashboard/subscription')}/> </span> Edit Subscription</h2>
//     <div className="p-6 bg-white rounded-lg shadow-md mx-auto w-[50%]">
     
//       <Form name="edit_subscription" onFinish={onFinish} layout="vertical">
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
//         <Form.Item>
//           <Button  htmlType="submit" className="w-full !bg-[#193664] !text-white">
//             Update
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//      </div>
//   );
// };

// export default Editsubscription;


import React, { useEffect } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';

const EditSubscription = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Assuming you are passing the subscription id for editing

  // Dummy data for editing (In real scenario, fetch data from API)
  const subscriptionData = {
    packageName: 'Basic Plan',
    packageAmount: '$4.99',
    packageExpiration: '1 month',
    features: ['Unlimited Chart', 'Analytics Access'],
  };

  // Setting initial form values when component mounts
  useEffect(() => {
    // You would fetch the actual data from your API based on `id`
    form.setFieldsValue({
      packageName: subscriptionData.packageName,
      packageAmount: subscriptionData.packageAmount,
      packageExpiration: subscriptionData.packageExpiration,
      features: subscriptionData.features,
    });
  }, [id]);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Edited Subscription values:', values);
    // Make an API call to save the edited subscription data
    // navigate('/dashboard/subscription');
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span className="cursor-pointer">
          <MdOutlineArrowBackIosNew onClick={() => navigate('/dashboard/subscription')} />
        </span>
        Edit Subscription
      </h2>

      <div className="p-6 mt-6 w-[50%] mx-auto bg-white rounded-lg shadow-md">
        <Form
          form={form}
          name="edit_subscription"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="packageName"
            label="Package Name"
            rules={[{ required: true, message: 'Please input the package name!' }]}
          >
            <Input placeholder="Basic Plan" />
          </Form.Item>
          
          <Form.Item
            name="packageAmount"
            label="Package Amount"
            rules={[{ required: true, message: 'Please input the package amount!' }]}
          >
            <Input placeholder="$ 4.99" />
          </Form.Item>
          
          <Form.Item
            name="packageExpiration"
            label="Package Expiration"
            rules={[{ required: true, message: 'Please input the package expiration!' }]}
          >
            <Input placeholder="1 month" />
          </Form.Item>

          <Form.List
            name="features"
            initialValue={subscriptionData.features}
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Space key={key} align="baseline" className="flex w-full items-center">
                    <Form.Item
                      {...restField}
                      name={[name, 'feature']}
                      fieldKey={[fieldKey, 'feature']}
                      rules={[{ required: true, message: 'Missing feature' }]}
                      className=""
                    >
                      <Input placeholder="Enter feature" />
                    </Form.Item>
                    <Form.Item>
                      <MinusCircleOutlined className="text-[18px]" onClick={() => remove(name)} />
                    </Form.Item>
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    className="w-full flex items-center justify-center"
                  >
                    <PlusOutlined /> Add new feature
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item>
            <Button htmlType="submit" className="w-full !bg-[#193664] !text-white">
              Update Subscription
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditSubscription;
