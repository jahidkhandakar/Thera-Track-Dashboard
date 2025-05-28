import React from 'react';
import { Table, Tag, Card, Typography, Space } from 'antd';
import { usePaymentQuery } from '../../../redux/features/otherApi/Payment';

const { Title } = Typography;

const Earning = () => {
  const { data: earning } = usePaymentQuery();
  console.log(earning);

  const columns = [
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => new Date(date).toLocaleDateString(),
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
    {
      title: 'User',
      dataIndex: ['userId', 'fullName'],
      key: 'user',
      render: (fullName, record) => (
        <div>
          <div className="font-medium">{fullName}</div>
          <div className="text-xs text-gray-500">{record.userId?.email}</div>
        </div>
      ),
    },
    {
      title: 'Subscription',
      dataIndex: ['subscriptionId', 'duration'],
      key: 'subscription',
      render: (duration, record) => (
        <div>
          <div className="font-medium">{duration}</div>
          <div className="text-xs text-gray-500">${record.subscriptionId?.price}</div>
        </div>
      ),
    },
    {
      title: 'Payment ID',
      dataIndex: 'stripPaymentId',
      key: 'stripPaymentId',
      render: (id) => (
        <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">
          {id?.substring(0, 20)}...
        </span>
      ),
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
      render: (currency) => <Tag color="blue">{currency}</Tag>,
    },
    {
      title: 'Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      render: (amount) => (
        <span className="font-semibold text-green-600">
          ${amount?.toFixed(2)}
        </span>
      ),
      sorter: (a, b) => a.totalAmount - b.totalAmount,
    },
    {
      title: 'Status',
      key: 'status',
      render: () => <Tag color="green">Completed</Tag>,
    },
  ];

  const tableData = earning?.data?.attributes || [];

  return (
    <div className="mt-12 p-6">
      <Card>
        <div className="mb-6">
          <Title level={2}>Earnings & Payments</Title>
          <p className="text-gray-600">
            Total Payments: {tableData.length}
          </p>
        </div>

        <Table
          columns={columns}
          dataSource={tableData}
          rowKey="_id"
          pagination={{
            pageSize: 10,
            showSizeChanger: false,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} payments`,
          }}
          scroll={{ x: 800 }}
          loading={!earning}
        />
      </Card>
    </div>
  );
};

export default Earning;