import React from "react";
import { Table, Tag, Space } from "antd";
import DeleteButton from "./component/tipButton";
const columns = [
  {
    title: "用户名",
    dataIndex: "userName",
    key: "userName",
  },
  {
    title: "用户账号",
    dataIndex: "userAcount",
    key: "userAcount",
  },
  {
    title: "用户角色",
    key: "userRole",
    dataIndex: "userRole",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a href="#">编辑</a>
        <DeleteButton text="删除"></DeleteButton>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    userName: "陈管",
    userAcount: 32,
    userRole: ["超级管理员", "时间管理大师"],
  },
  {
    key: "2",
    userName: "陈双",
    userAcount: 32,
    userRole: ["开发人员"],
  },
  {
    key: "3",
    userName: "陈梦",
    userAcount: 32,
    userRole: ["开发人员"],
  },
  {
    key: "4",
    userName: "陈吉学",
    userAcount: 32,
    userRole: ["开发人员"],
  },
];

export default () => <Table columns={columns} dataSource={data} />;
