import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import UserList from "../components/UserList";
import { getUsers } from "../services/userService";


const Home = ()=>{
    const [users, setusers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search,setSearch] = useState("")

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
    
        const filteredUsers = users.filter(user => 
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        );

        if (loading) return <p>Cargando usuarios... ⌛</p>;
  if (error) return <p>{error}</p>;

    return (
    <>
      <h1>Gestión de Usuarios</h1>

      <SearchInput
        value={search}
        setSearch={setSearch}
      />

      {filteredUsers.length === 0 ? (
        <p>No hay usuarios para mostrar</p>
      ) : (
        <UserList
          users={filteredUsers}
          onDelete={handleDeleteuser}
        />
      )}
    </>
  );
};

export default Home;