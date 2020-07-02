import React from 'react';
import { useTable } from 'react-table';

function Table({columns, data}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function PlayerTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Player",
        accessor: "playerName",
      },
      {
        Header: "Team",
        accessor: "team",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Overall KD",
        accessor: "overallKD",
      },
      {
        Header: "Hardpoint KD",
        accessor: "hpKD",
      },
      {
        Header: "Search and Destroy KD",
        accessor: "sndKD",
      },
      {
        Header: "Domination KD",
        accessor: "domKD",
      },
    ],
  )

  const data = []

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  )
}

export default PlayerTable;
