import React, { useState } from "react";
import { Table, Space, Button } from "antd";
import DeleteButton from "./component/tipButton";
import AddAcountModal from "./component/addAcountModal";
const columns = [
  {
    title: "角色名",
    dataIndex: "roleName",
    key: "roleName",
    width: 500,
  },
  {
    title: "Action",
    key: "action",
    width: 500,
    render: (text, record) => (
      <Space size="middle">
        <a href="#">编辑</a>
        <a href="#">分配页面</a>
        <DeleteButton text="删除"></DeleteButton>
      </Space>
    ),
  },
];

const data = [
  {
    roleName: "陈学",
    key: "1",
  },
  {
    roleName: "超级管理员",
    key: "2",
  },
  {
    roleName: "时间管理大师",
    key: "3",
  },
];

export default () => {
  let [visible, setVisible] = useState(false);
  return (
    <>
      <AddAcountModal visible={visible} setVisible={setVisible}></AddAcountModal>
      <Button type="primary" onClick={() => setVisible(!visible)}>
        新增账号
      </Button>
      <Table columns={columns} dataSource={data} />;
    </>
  );
};
