import React from "react";

const Table = (props) => {
  const { characterData, removeCharacter } = props;

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Job</th>
          <th scope="col">Delete Data</th>
        </tr>
      </thead>
    );
  };

  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button onClick={() => props.removeCharacter(index)} className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  };

  return (
    <table className="table">
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
    </table>
  );
};

export default Table;
