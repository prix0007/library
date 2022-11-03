import React from "react";
import "/css/components/table.css";

const TableHeadItem = ({ item }) => <th>{item}</th>;

const TableRow = ({ data }) => {
  return (
    <tr>
      {data.map((item, index) => (
        <td key={index}>{item}</td>
      ))}
    </tr>
  );
};

const Table = ({ theadData, tbodyData, customClass }) => {
  return (
    <table className={customClass}>
      <thead>
        <tr>
          {theadData.map((head) => {
            return <TableHeadItem key={head} item={head} />;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((body) => {
          return <TableRow key={body.id} data={body.items} />;
        })}
      </tbody>
    </table>
  );
};

// Get Version History and display in table.
export function VersionHistory() {
  const theadData = ["Version", "Release Name", "Release Date"];
  const tbodyData = [
    {
      id: "1",
      items: ["0.2", "Init", "2022-12-05"],
    },
  ];
  return (
    <>
      <Table
        theadData={theadData}
        tbodyData={tbodyData}
        customClass="table_common"
      />
    </>
  );
}
