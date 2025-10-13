import { Table } from "react-bootstrap";
import DynamicTHead from "./DynamicTHead";
import DynamicTBody from "./DynamicTBody";

const DynamicDataGrid = ({ title, data }) => {
  const fields = Object.keys(data[0]);

  return (
    <div className="col-xl-6 col-sm-12">
      <h2>{title}</h2>
      <div className="border rounded" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Table striped bordered hover className="mb-0">
          <DynamicTHead fields={fields} className="sticky-top bg-light" />
          <DynamicTBody data={data} fields={fields} />
        </Table>
      </div>
    </div>
  );
};

export default DynamicDataGrid;
