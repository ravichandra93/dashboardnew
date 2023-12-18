import React, { useState } from "react";
import _ from "lodash";
import { Button, Space, Table } from "react";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park"
  }
];

const filterData = (data) => (formatter) =>
  data.map((item) => ({
    text: formatter(item),
    value: formatter(item)
  }));

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Tables = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      filters: _.uniqWith(
        filterData(data)((i) => i.name),
        _.isEqual
      ),
      filteredValue: filteredInfo.name || null,
      // filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "30%"
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
      filters: _.uniqWith(
        filterData(data)((i) => i.age),
        _.isEqual
      ),
      filterSearch: true,
      filteredValue: filteredInfo.age || null,
      onFilter: (value, record) =>
        record["age"].toString().toLowerCase().includes(value),
      width: "30%"
    },
    {
      title: "Address",
      dataIndex: "address",
      sorter: (a, b) => a.name.length - b.name.length,
      filters: _.uniqWith(
        filterData(data)((i) => i.address),
        _.isEqual
      ),
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "40%"
    }
  ];

  console.log("columns", columns);

  return (
    <>
      <Space
        style={{
          marginBottom: 16
        }}
      >
        {/* {/* <Button onClick={setAgeSort}>Sort age</Button> */}
        {/* <Button onClick={clearFilters}>Clear filters</Button> */}
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table
        size="small"
        columns={columns}
        dataSource={data}
        onChange={handleChange}
      />
    </>
  );
};

export default Tables;
