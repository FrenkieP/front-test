import React from "react";
import { Table, Button } from "react-bootstrap";

const DataTable = ({ formData, onDelete }) => {
  return (
    <div className="scrollable-table">
      <Table className="table-smaller">
        <thead>
          <tr>
            <th>วันที่</th>
            <th>เวลา</th>
            <th>ช่องทาง</th>
            <th>ชื่อ</th>
            <th>เบอร์โทรศัพท์</th>
            <th>หมวดหมู่</th>
            <th>ระดับความสำคัญ</th>
            <th>ฝ่ายที่เกี่ยวข้อง</th>
            <th>รายละเอียด</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table">
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.time}</td>
              <td>{data.channel}</td>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.type}</td>
              <td>{data.priority}</td>
              <td>{data.relatedField}</td>
              <td>{data.details}</td>
              <td>
                <Button
                  variant="outline-danger"
                  className="deleteBtn"
                  size="sm"
                  onClick={() => onDelete(index)}>
                  delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
