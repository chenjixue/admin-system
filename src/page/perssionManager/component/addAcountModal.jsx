import React, { useState, useRef } from "react";
import { Modal, Button, Form, Input, Checkbox } from "antd";
const AddAcountModal = (props) => {
  // setVisible
  const formRef = useRef(null);
  const handleOk = (value) => {
    props.setVisible(false);
  };
  const handleCancel = (value) => {
    formRef.current.submit();
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    props.setVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Modal
        visible={props.visible}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="primary" onClick={handleCancel}>
            确认
          </Button>,
          <Button key="link" onClick={handleOk}>
            取消
          </Button>,
        ]}
      >
        <Form
          name="basic"
          ref={formRef}
          initialValues={{
            remember: true,
          }}
          labelCol={{
            span: 5,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default AddAcountModal;
