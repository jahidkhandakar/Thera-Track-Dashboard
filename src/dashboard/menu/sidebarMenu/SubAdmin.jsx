import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Space, Table } from "antd";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAllSubAdminsQuery } from "../../../redux/features/otherApi/subAdmin";

const SubAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  const { data: subAdmins, isLoading } = useAllSubAdminsQuery();

  // Safe access to sub-admin list
  const dataSource = subAdmins?.data?.attributes || [];

  const columns = [
    {
      title: "#SI",
      key: "si",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => <p className="font-medium">{text || "N/A"}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <p>{text || "N/A"}</p>,
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
            className="text-[#2196F3] cursor-pointer"
          />
        </Space>
      ),
    },
  ];

  const handleView = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full mx-auto bg-white rounded-xl">
      <div className="rounded-t-lg mt-[24px] ">
        <div className="flex py-[22px] justify-between items-center p-5">
          <h1 className="text-xl font-semibold">Sub Admins</h1>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => navigate("add")}
            className="bg-[#2196F3]"
          >
            Add Sub Admin
          </Button>
        </div>

        <Table
          pagination={{
            total: dataSource.length,
            position: ["bottomCenter"],
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
            defaultPageSize: 10,
            showSizeChanger: false,
            itemRender: (current, type, originalElement) => {
              if (type === "prev") {
                return <Button>Back</Button>;
              }
              if (type === "next") {
                return <Button>Next</Button>;
              }
              return originalElement;
            },
          }}
          loading={isLoading}
          columns={columns}
          dataSource={dataSource}
          rowKey={(record) => record._id}
          scroll={{ x: "max-content" }}
        />
      </div>
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
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
            <h1 className="text-xl font-medium">Sub Admin Details</h1>
          </div>
          <div className="p-4 md:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-3 gap-1">
              <p className="text-gray-500 text-sm">Full Name:</p>
              <p className="font-medium">{selectedUser?.fullName || "N/A"}</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-3 gap-1">
              <p className="text-gray-500 text-sm">Email:</p>
              <p className="font-medium break-all">
                {selectedUser?.email || "N/A"}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-3 gap-1">
              <p className="text-gray-500 text-sm">Phone:</p>
              <p className="font-medium">
                {selectedUser?.phoneNumber || "N/A"}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between pt-3 gap-1">
              <p className="text-gray-500 text-sm">Date:</p>
              <p className="font-medium">
                {selectedUser?.createdAt
                  ? selectedUser.createdAt.split("T")[0]
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SubAdmin;
