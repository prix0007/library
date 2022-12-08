import React from "react";
import "/css/components/table.css";

const titles = [
  "Version",
  "Release Name",
  "Release Date",
  "End of Life",
  "Release Lead",
  "Release Notes",
  "Status",
];
const versions = [
  {
    id: "1",
    items: ["0.5", "Alpha", "", "", "Ani", "0.5.0", "Upcoming"],
    properties: {
      links: {
        4: "https://github.com/anistark",
        5: "/guide/release/v0.5",
      },
      state: "upcoming",
    },
  },
];

const TableHeadItem = ({ item }) => <th>{item}</th>;

const TableRow = ({ data }) => {
  return (
    <tr className={data.properties.state}>
      {data.items.map((item, index) => (
        <td key={index}>
          {[4, 5].includes(index) ? (
            <a href={data.properties.links[index]}>
              <strong>{item}</strong>
            </a>
          ) : (
            <strong>{item}</strong>
          )}
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
export function Releases() {
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
