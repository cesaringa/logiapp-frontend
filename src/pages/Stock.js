import React from "react";
import Table from "react-bootstrap/Table";

export const Stock = () => {
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
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>l2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>l3</td>
        </tr>
      </tbody>
    </Table>
  );
};
