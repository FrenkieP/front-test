import { Card } from "react-bootstrap";
import DataTable from "./DataTable";

function SidebarCom({ data, onDelete }) {
  return (
    <Card className="card">
      {data && data.length > 0 && (
        <DataTable formData={data} onDelete={onDelete} />
      )}
    </Card>
  );
}

export default SidebarCom;
