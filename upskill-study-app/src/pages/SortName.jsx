import React, {useState, useEffect} from "react";

function SortName(){
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        const fetchUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            const filteredData = [...data].sort((a,b) => a.name.localeCompare(b.name));
            setUsers(filteredData);
        }
        fetchUsers();
    }, []);

    return(
        <>
        <h1>Sort Name</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default SortName;