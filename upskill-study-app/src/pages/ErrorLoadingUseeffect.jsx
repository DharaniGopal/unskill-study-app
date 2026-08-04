import { useState, useEffect } from "react";
function ErrorLoadingUseeffect() {
    const [users, setUsers] = useState([]);
    const[error,setError] = useState("");
    const[loading, setLoading] = useState(false);
    const Url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        const controller = new AbortController();
        const fetchUser = async () => {
            try{
                setLoading(true);
            const response = await fetch(Url,{
                signal: controller.signal
            });
            const data = await response.json();
            const filter = [...data].sort((a,b) => a.name.localeCompare(b.name))
            setUsers(filter);
            } catch(er){
                if(er.name !== "AbortError"){
                    setError(er);
                }
            }
            finally{
                setLoading(false);
            }
        }
        fetchUser();

        return() => {
            controller.abort();
        }
    },[Url])

  return (
    <>
      <h1>User List</h1>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}</li>
      ))}
    </>
  );
}

export default ErrorLoadingUseeffect;
