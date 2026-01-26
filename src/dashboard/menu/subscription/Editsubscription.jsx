import {
    ArrowLeftOutlined,
    DollarOutlined,
    EditOutlined,
} from "@ant-design/icons";
import {
    Button,
    Card,
    Form,
    Input,
    InputNumber,
    Select,
    Spin,
    Typography,
} from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";
import { useEditSubscriptionMutation } from "../../../redux/features/otherApi/editSubscription";
import { useSingleSubscriptionQuery } from "../../../redux/features/otherApi/getSingleSubscription";

const { Title, Text } = Typography;
const { Option } = Select;

const EditSubscription = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get subscription ID from URL params
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const durationOptions = ["01 Month", "06 Month", "12 Month"];

  // Fetch subscription data
  const {
    data: subscriptionData,
    isLoading: fetchingData,
    error: fetchError,
  } = useSingleSubscriptionQuery(id);

  const [updateSubscription] = useEditSubscriptionMutation();

  // Populate form when data is loaded
  useEffect(() => {
    if (subscriptionData?.data) {
      const subscription = subscriptionData.data?.attributes;
      form.setFieldsValue({
        duration: subscription.duration,
        price: subscription.price,
        advantage1: subscription.advantage1 || "",
        advantage2: subscription.advantage2 || "",
        advantage3: subscription.advantage3 || "",
      });
    }
  }, [subscriptionData, form]);

  // Handle fetch error
  useEffect(() => {
    if (fetchError) {
      toast.error("Failed to load subscription data");
      navigate("/dashboard/subscription");
    }
  }, [fetchError, navigate]);

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const processedValues = {
        ...values,
        advantage1: values.advantage1 || "",
        advantage2: values.advantage2 || "",
        advantage3: values.advantage3 || "",
      };
      const res = await updateSubscription({
        id,
        data: processedValues,
      }).unwrap();

      if (res?.code == 200) {
        toast.success(res?.message || "Subscription updated successfully!");
        setTimeout(() => {
          navigate("/dashboard/subscription");
        }, 1000);
      }
    } catch (error) {
      toast.error(
        error?.data?.message ||
          error?.message ||
          "Failed to update subscription",
      );
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/dashboard/subscription");
  };

  // Show loading spinner while fetching data
  if (fetchingData) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <Spin size="large" />
            <Text className="ml-3">Loading subscription data...</Text>
          </div>
        </div>
      </div>
    );
  }

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
            <EditOutlined className="text-blue-600" />
            Edit Subscription
          </Title>
          <Text className="text-gray-600">
            Update subscription plan details
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
            initialValues={{
              advantage1: "",
              advantage2: "",
              advantage3: "",
            }}
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
                Update Subscription
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default EditSubscription;
