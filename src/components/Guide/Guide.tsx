import { Button, Layout, Row, Typography } from 'antd';
import React from 'react';
import { Table, Space, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table'
import styles from './Guide.less';

interface Props {
  name: string;
}
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const tableProps: any = {
    title: () => <div style={{ fontSize: 16, color: '#000' }}>主角列表</div>,
  }
  const col: ColumnsType<DataType> = [
    {
      title: '名字',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '备注',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length >= 3 ? 'geekblue' : 'green';
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
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>查看</a>
        </Space>
      ),
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: '李小龙',
      age: 32,
      address: '北京胡同',
      tags: ['能打', '双节棍'],
    },
    {
      key: '2',
      name: '美国队长',
      age: 42,
      address: '美国',
      tags: ['盾牌', '能打一整天'],
    },
    {
      key: '3',
      name: '佐助',
      age: 32,
      address: '木叶忍者村',
      tags: ['装杯', '晓'],
    },
  ];
  return (
    <>
    <Button>添加按钮</Butt>
    <Table columns={col} dataSource={data} {...tableProps}/>
    </>
  );
};

export default Guide;
