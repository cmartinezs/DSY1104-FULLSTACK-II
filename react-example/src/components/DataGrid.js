import { Table } from "react-bootstrap";

const DataGrid = (props) => {
  //Como obtengo los nombres de los campos de un json?

  const fields = Object.keys(props.data[0]);
  console.log(fields);
  return (
    <div className="col-xl-6 col-sm-12">
      <h2>{props.title}</h2>
      <div className="border rounded" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Table striped bordered hover className="mb-0">
          <thead className="sticky-top bg-light">
            <tr>
              {fields.map((field) => (
                <th key={field}>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map((item) => {
              return (
                <tr key={item.id}>
                  {fields.map((field) => (
                    <td key={field}>{item[field]}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DataGrid;
