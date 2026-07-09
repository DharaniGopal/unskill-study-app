import { useState, useEffect } from "react";
function AbortControllerUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal,
          },
        );
        const data = await response.json();
        setUsers(data);
      } catch (er) {
        if (er.name !== "AbortError") {
          console.log("Error", er);
        }
      }
    };
    fetchUser();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>User List</h1>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
}

export default AbortControllerUser;
