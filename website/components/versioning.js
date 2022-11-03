import React from "react";
import "/css/components/table.css";

const titles = [
  "Version",
  "Release Name",
  "Release Date",
  "End of Life",
  "Release Lead",
  "Release Notes",
];
const versions = [
  {
    id: "1",
    items: [
      "0.2.0",
      "Init",
      "2022-12-05",
      "",
      "Kumar Anirudha",
      "Release Page Link",
    ],
    properties: {
      authorGithub: "anistark",
      state: "upcoming",
      releaseLink: "#",
    },
  },
];

const TableHeadItem = ({ item }) => <th>{item}</th>;

const TableRow = ({ data }) => {
  return (
    <tr className={data.properties.state}>
      {data.items.map((item, index) => (
        <td key={index}>
          <strong>{item}</strong>
        </td>
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
          return <TableRow key={body.id} data={body} />;
        })}
      </tbody>
    </table>
  );
};

// Get Version History and display in table.
export function VersionHistory() {
  return (
    <>
      <Table
        theadData={titles}
        tbodyData={versions}
        customClass="table_common"
      />
    </>
  );
}
