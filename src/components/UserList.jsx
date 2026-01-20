import { useEffect, useState } from "react"
import { getUsers } from "../services/userService";
import UserItem from "./UserItem";

const UserList = ()=> {
    const [users, setusers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchUsers = async ()=>{
            try{
                setLoading(true);
                setError(null);

                const data = await getUsers()
                setusers(data);
            }
            catch (error) {
                setError(error.message);
            }
            finally{
                setLoading(false);
            }

        };
        fetchUsers();
    },[]);

    const handleDeleteuser = (id) => {
        setusers((prevusers)=>
        prevusers.filter((user)=>user.id !==id)
        );
    };


if(loading) return <p>Cargando usuarios...⌛</p>;
if(error) return <p>{error}</p>;


return (
    <ul>
        {users.map((user)=>(
            <UserItem 
            key={user.id}
            user= {user}
            onDelete={handleDeleteuser} 
            />
        ))}
    </ul>
);
};

export default UserList;