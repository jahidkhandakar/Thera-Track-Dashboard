import { CloseOutlined } from "@ant-design/icons";
import { Button, Modal, Space, Table } from "antd";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { useGetFeedbackQuery } from "../../../redux/features/otherApi/feedback";
import users from "./../../../../public/image/users.jpg";

const Feedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [searchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: feedbackResponse, isLoading } = useGetFeedbackQuery();

  const feedbackData = Array.isArray(feedbackResponse?.data)
    ? feedbackResponse.data
    : Array.isArray(feedbackResponse?.data?.attributes)
      ? feedbackResponse?.data.attributes
      : Array.isArray(feedbackResponse)
        ? feedbackResponse
        : [];

  // Filter feedback based on search text
  const filteredData = Array.isArray(feedbackData)
    ? feedbackData.filter(
        (item) =>
          item?.userId?.fullName
            ?.toLowerCase()
            .includes(searchText.toLowerCase()) ||
          item?.userId?.email
            ?.toLowerCase()
            .includes(searchText.toLowerCase()) ||
          item?.message?.toLowerCase().includes(searchText.toLowerCase()),
      )
    : [];

  const columns = [
    {
      title: "#SI",
      dataIndex: "si",
      key: "si",
      render: (text, _, index) => (currentPage - 1) * 10 + index + 1,
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <img
            className="w-[34px] h-[34px] rounded-full"
            src={record?.userId?.profileImage || users}
            alt="User"
          />
          <p className="font-medium">
            {record?.userId?.fullName || record?.userId?.firstName || "N/A"}
          </p>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, record) => <p>{record?.userId?.email || "N/A"}</p>,
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      render: (_, record) => (
        <p className="max-w-[200px] truncate" title={record?.message}>
          {record?.message || "N/A"}
        </p>
      ),
    },
    {
      title: "Emoji",
      dataIndex: "emoji",
      key: "emoji",
      render: (_, record) => <p>{record?.emoji || "N/A"}</p>,
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
      render: (_, record) => (
        <p>
          {record?.createdAt
            ? new Date(record.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              })
            : "N/A"}
        </p>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <BsInfoCircle
            onClick={() => handleViewDetails(record)}
            size={18}
            className="text-[#193664] cursor-pointer hover:text-blue-600"
          />
        </Space>
      ),
    },
  ];

  const handleViewDetails = (feedback) => {
    setSelectedFeedback(feedback);
    setIsModalOpen(true);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      <div className="rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] justify-between items-center">
          <div>
            <p className="text-xl font-semibold">
              Feedback ({filteredData.length})
            </p>
          </div>
        </div>

        <Table
          pagination={{
            total: filteredData.length,
            position: ["bottomCenter"],
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
            defaultPageSize: 10,
            current: currentPage,
            onChange: handleChangePage,
            showSizeChanger: true,
            showQuickJumper: true,

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
          columns={columns}
          dataSource={filteredData}
          rowKey="_id"
          loading={isLoading}
          scroll={{ x: "max-content" }}
        />
      </div>

      {/* Feedback Details Modal */}
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
        width={600}
        closeIcon={
          <CloseOutlined
            style={{
              color: "white",
              backgroundColor: "#de0a26",
              borderRadius: "50%",
              padding: "8px",
              fontSize: "12px",
            }}
          />
        }
      >
        <div>
          <div className="flex justify-center items-center gap-2 flex-col border-b border-b-gray-300">
            <p className="text-[26px] mb-[16px] font-medium">
              Feedback Details
            </p>
          </div>

          {selectedFeedback && (
            <div className="p-[20px]">
              <div className="flex justify-between border-b py-[16px]">
                <p className="font-medium">Full Name:</p>
                <p>{selectedFeedback?.userId?.fullName || "N/A"}</p>
              </div>

              <div className="flex justify-between border-b py-[16px]">
                <p className="font-medium">Email:</p>
                <p>{selectedFeedback?.userId?.email || "N/A"}</p>
              </div>

              <div className="flex justify-between border-b py-[16px]">
                <p className="font-medium">Phone:</p>
                <p>{selectedFeedback?.userId?.phoneNumber || "N/A"}</p>
              </div>

              <div className="flex justify-between border-b py-[16px]">
                <p className="font-medium">Date:</p>
                <p>
                  {selectedFeedback?.createdAt
                    ? new Date(selectedFeedback.createdAt).toLocaleDateString(
                        "en-GB",
                      )
                    : "N/A"}
                </p>
              </div>

              <div className="flex justify-between border-b py-[16px]">
                <p className="font-medium">Country:</p>
                <p>{selectedFeedback?.userId?.country || "N/A"}</p>
              </div>

              <div className="flex justify-between border-b py-[16px]">
                <p className="font-medium">City:</p>
                <p>{selectedFeedback?.userId?.city || "N/A"}</p>
              </div>

              <div className="flex justify-between border-b py-[16px]">
                <p className="font-medium">Emoji:</p>
                <p className="text-xl">{selectedFeedback?.emoji || "N/A"}</p>
              </div>

              <div className="flex flex-col gap-2 pt-[16px]">
                <p className="font-medium">Message:</p>
                <div className="px-[15px] py-[10px] bg-gray-50 rounded-lg min-h-[60px]">
                  <p className="whitespace-pre-wrap">
                    {selectedFeedback?.message || "No message provided"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Feedback;
