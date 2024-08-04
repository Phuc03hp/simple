import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";

const DeleteButton: React.FC = () => {
    const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <Popconfirm
      title="Title"
      description="Open Popconfirm with async logic"
      open={open}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    >
      <DeleteOutlined type="primary" onClick={showPopconfirm}>
        Open Popconfirm with async logic
      </DeleteOutlined>
    </Popconfirm>
  );
}

export default DeleteButton;