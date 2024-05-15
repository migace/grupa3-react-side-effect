import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const Users = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = () => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          id: prevUsers.length + 1,
          name: `Test #${prevUsers.length + 1}`,
          email: "undefined@undefined.com",
        },
      ];
    });
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <button onClick={addUserHandler}>Add user</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </>
  );
};
