import React from 'react';
import { Card, List, Avatar, Tag, Typography, Space, Badge } from 'antd';
import { BellOutlined, CrownOutlined, DollarOutlined, CalendarOutlined } from '@ant-design/icons';
import { usePaymentQuery } from '../../../redux/features/otherApi/Payment';

const { Title, Text } = Typography;

const NotificationPage = () => {
  const { data: payments } = usePaymentQuery();
  
  // Extract unique subscriptions from payments
  const subscriptions = payments?.data?.attributes?.map(payment => ({
    id: payment.subscriptionId?._id,
    name: payment.subscriptionId?.advantage1 || 'Premium Subscription',
    duration: payment.subscriptionId?.duration,
    price: payment.subscriptionId?.price,
    userName: payment.userId?.fullName,
    userEmail: payment.userId?.email,
    createdAt: payment.createdAt,
    avatar: payment.userId?.profileImage,
  })) || [];

  // Remove duplicates based on subscription ID
  const uniqueSubscriptions = subscriptions.filter((subscription, index, self) =>
    index === self.findIndex(s => s.id === subscription.id)
  );

  const getNotificationIcon = () => (
    <Avatar 
      icon={<CrownOutlined />} 
      style={{ backgroundColor: '#1890ff' }}
      size="large"
    />
  );

  const getTimeAgo = (date) => {
    const now = new Date();
    const created = new Date(date);
    const diffInHours = Math.floor((now - created) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <BellOutlined className="text-2xl text-blue-600" />
              <Title level={2} className="mb-0">Subscription Notifications</Title>
            </div>
            <Badge count={uniqueSubscriptions.length} showZero>
              <BellOutlined className="text-xl text-gray-400" />
            </Badge>
          </div>
          
          <Text className="text-gray-600">
            Recent subscription activities and updates
          </Text>
        </Card>

        <Card>
          <List
            itemLayout="horizontal"
            dataSource={uniqueSubscriptions}
            renderItem={(subscription) => (
              <List.Item className="hover:bg-gray-50 p-4 rounded-lg transition-colors">
                <List.Item.Meta
                  avatar={getNotificationIcon()}
                  title={
                    <div className="flex items-center justify-between">
                      <Space>
                        <Text strong className="text-lg">{subscription.name}</Text>
                        <Tag color="gold" icon={<CrownOutlined />}>
                          {subscription.duration}
                        </Tag>
                      </Space>
                      <Text className="text-gray-500 text-sm">
                        {getTimeAgo(subscription.createdAt)}
                      </Text>
                    </div>
                  }
                  description={
                    <div className="mt-2">
                      <div className="flex items-center space-x-4 mb-2">
                        <Space>
                          <DollarOutlined className="text-green-500" />
                          <Text strong className="text-green-600">
                            ${subscription.price?.toFixed(2)}
                          </Text>
                        </Space>
                        <Space>
                          <CalendarOutlined className="text-blue-500" />
                          <Text>{subscription.duration}</Text>
                        </Space>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg mt-3">
                        <Text className="text-blue-800">
                          <strong>{subscription.userName}</strong> ({subscription.userEmail}) 
                          has subscribed to {subscription.name}
                        </Text>
                      </div>
                      
                      <div className="mt-2 text-xs text-gray-500">
                        Subscription ID: {subscription.id}
                      </div>
                    </div>
                  }
                />
              </List.Item>
            )}
            locale={{
              emptyText: (
                <div className="text-center py-8">
                  <BellOutlined className="text-4xl text-gray-300 mb-4" />
                  <Text className="text-gray-500">No subscription notifications</Text>
                </div>
              )
            }}
          />
        </Card>

        {uniqueSubscriptions.length > 0 && (
          <Card className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Text className="block text-2xl font-bold text-blue-600">
                  {uniqueSubscriptions.length}
                </Text>
                <Text className="text-gray-600">Total Subscriptions</Text>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Text className="block text-2xl font-bold text-green-600">
                  ${uniqueSubscriptions.reduce((sum, sub) => sum + (sub.price || 0), 0).toFixed(2)}
                </Text>
                <Text className="text-gray-600">Total Revenue</Text>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Text className="block text-2xl font-bold text-purple-600">
                  {new Set(uniqueSubscriptions.map(sub => sub.userName)).size}
                </Text>
                <Text className="text-gray-600">Unique Users</Text>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default NotificationPage;