import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";

const Add_User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(users);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.user_id}>
            <td>{user.user_id}</td>
            <td>{user.first_name}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
          </tr>
        ))}

        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr> */}
      </tbody>
    </Table>
  );
};

export default Add_User;
