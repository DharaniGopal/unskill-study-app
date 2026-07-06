import React, { useState,useEffect } from "react";

function SearchDebounceCounter() {
    const [users,setUsers] = useState([]);
    const [search,setSearch] = useState("");
    const [debounce,setDebounce] = useState("")

    useEffect(() => {
        const fetchUser = async() => {
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
            }
            catch(er){
                console.log("Faild to fetch Data", er);
            }
        }
        fetchUser();
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(search);
        },500)

        return () => clearTimeout(timer)
    },[search])

    const filteredUser = users.filter((user) => 
        user.name.toLowerCase().includes(search.toLowerCase())
    )

    return(
        <>
            <h1>User List</h1>
            <input
                type="text"
                value={search}
                placeHolder= " Enter name"
                onChange = {(e) => setSearch(e.target.value)}
            />
            {filteredUser.map((user) => (
                <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </>
    )
}

export default SearchDebounceCounter;