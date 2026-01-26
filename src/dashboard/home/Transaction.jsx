import { CloseOutlined } from "@ant-design/icons";
import { Button, Modal, Space, Table } from "antd";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { useAllUsersQuery } from "../../redux/features/otherApi/allUsers";
import styles from './../menu/sidebarMenu/style.module.css';
 



const Transaction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const { data: users, isLoading, error } = useAllUsersQuery();

  // Safe access to user list
  const dataSource = users?.data?.attributes?.slice(0,5) || [];

  const columns = [
    {
      title: "#SI",
      key: "si",
      render: (_, __, index) => index + 1,
    },
    {
      title: "User Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (text) => <p className="font-medium">{text || "N/A"}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <p>{text || "Apple Or Facebook User"}</p>,
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (text) => <p>{text || "N/A"}</p>,
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => <p>{text ? text.split("T")[0] : "N/A"}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <BsInfoCircle
            onClick={() => handleView(record)}
            size={18}
            className="text-[red] cursor-pointer"
          />
        </Space>
      ),
    },
  ];

  const handleView = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };



  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Failed to load users.</p>;

  return (
    <div>
      <div className="rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] justify-between items-center">
          <p className="text-header">Recent User</p>

       
        </div>

        <Table
          pagination={{
            total: dataSource.length,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            defaultPageSize: 5,
            showSizeChanger: false,
            itemRender: (current, type, originalElement) => {
              if (type === "prev") {
                return <Button className={styles.paginationButton}>Back</Button>;
              }
              if (type === "next") {
                return <Button className={styles.paginationButton}>Next</Button>;
              }
              return originalElement;
            },
            className: styles.paginationCenter,
          }}
          columns={columns}
          dataSource={dataSource}
          rowKey={(record) => record._id} // Use _id as unique key
          className={styles.customTable}
          scroll={{ x: 'max-content' }}
          components={{
            header: {
              cell: (props) => <th {...props} className={styles.tableHeader} />,
            },
          }}
        />
      </div>

      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        closeIcon={
          <CloseOutlined
            style={{
              color: "white",
              backgroundColor: "#de0a26",
              borderRadius: "10%",
              padding: "10px",
            }}
          />
        }
      >
        <div>
          <div className="flex justify-center py-4 items-center gap-2 flex-col border-b border-b-gray-300">
            <h1 className="text-xl font-medium">User Details</h1>
          </div>
          <div className="p-[20px]">
            <div className="flex justify-between border-b py-[16px]">
              <p>Full Name:</p>
              <p>{selectedUser?.firstName || "N/A"}</p>
            </div>

            <div className="flex justify-between border-b py-[16px]">
              <p>Email:</p>
              <p>{selectedUser?.email || "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Phone:</p>
              <p>{selectedUser?.phoneNumber || "N/A"}</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Date:</p>
              <p>{selectedUser?.createdAt ? selectedUser.createdAt.split("T")[0] : "N/A"}</p>
            </div>
            <div className="flex justify-between items-center pt-[16px]">
              <p>Address:</p>
              <p className="px-[15px] py-[10px] rounded-lg">
                {selectedUser?.country || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Transaction;
