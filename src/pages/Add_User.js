import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";

const url_Users = "http://localhost:7000/users";

const Add_User = () => {
  const [users, setUsers] = useState([]);
  const [usersInput, setUsersInput] = useState({
    first_name: "",
    lastname: "",
    email: "",
  });

  const createUser = (e) => {
    e.preventDefault();
    fetch(url_Users, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usersInput),
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
    setTimeout(() => updateScreen(), 100);
  };

  const deleteUser = (id) => {
    fetch(`http://localhost:7000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));

    setTimeout(() => updateScreen(), 100);
  };

  // const

  useEffect(() => {
    updateScreen();
  }, []);

  const updateScreen = () => {
    fetch("http://localhost:7000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  };

  console.log(users);
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>User_ID</th>
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
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteUser(user.user_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <form>
        <input
          type="text"
          value={usersInput.first_name}
          placeholder="First name"
          onChange={(e) =>
            setUsersInput({ ...usersInput, first_name: e.target.value })
          }
        ></input>
        <input
          type="text"
          value={usersInput.lastname}
          placeholder="Last name"
          onChange={(e) =>
            setUsersInput({ ...usersInput, lastname: e.target.value })
          }
        ></input>
        <input
          type="text"
          value={usersInput.email}
          placeholder="Email"
          onChange={(e) =>
            setUsersInput({ ...usersInput, email: e.target.value })
          }
        ></input>

        <button onClick={(e) => createUser(e)}> Add User </button>
      </form>
    </>
  );
};

export default Add_User;
