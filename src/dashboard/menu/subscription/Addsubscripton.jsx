import {
    ArrowLeftOutlined,
    CrownOutlined,
    DollarOutlined,
} from "@ant-design/icons";
import {
    Button,
    Card,
    Form,
    Input,
    InputNumber,
    message,
    Select,
    Typography,
} from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAddSubscriptionMutation } from "../../../redux/features/otherApi/addSubscription";

const { Title, Text } = Typography;
const { Option } = Select;

const AddSubscription = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const durationOptions = ["01 Month", "06 Month", "12 Month"];
  const [add_subscription] = useAddSubscriptionMutation();

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      // Here you would make your API call
      const processedValues = {
        ...values,
        advantage1: values.advantage1 || "",
        advantage2: values.advantage2 || "",
        advantage3: values.advantage3 || "",
      };
      const res = await add_subscription(processedValues).unwrap();
      if (res?.code == 200) {
        toast.success(res?.message);
      }
      form.resetFields();
      setTimeout(() => {
        navigate("/dashboard/subscription");
      }, 1000);
    } catch (error) {
      message.error(error?.message);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/dashboard/subscription");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

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
              rules={[{ required: true, message: "Please select duration" }]}
            >
              <Select
                placeholder="Select subscription duration"
                size="large"
                className="w-full"
              >
                {durationOptions.map((duration) => (
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
                { required: true, message: "Please enter price" },
                {
                  type: "number",
                  min: 0.01,
                  message: "Price must be greater than 0",
                },
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
              <Text className="text-base font-medium block">
                Subscription Benefits
              </Text>

              <Form.Item
                label="Advantage 1"
                name="advantage1"
                rules={[
                  { required: true, message: "Please enter first advantage" },
                ]}
              >
                <Input
                  placeholder="e.g., Access to premium content"
                  size="large"
                  prefix="✓"
                />
              </Form.Item>

              <Form.Item label="Advantage 2" name="advantage2">
                <Input
                  placeholder="e.g., Priority customer support"
                  size="large"
                  prefix="✓"
                />
              </Form.Item>

              <Form.Item label="Advantage 3" name="advantage3">
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
