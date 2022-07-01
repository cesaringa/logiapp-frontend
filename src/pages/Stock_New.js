import React from "react";
import Table from "react-bootstrap/Table";

const Stock_New = () => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Location</th>
          <th>Project ID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>l1</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Stock_New;
