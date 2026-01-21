import { useState } from "react";
import UserList from "../components/UserList"


const Home = ()=>{
    const [search,setSearch] = useState("")
    return (
        <div>
            <h1>Gestion de Usuarios</h1>
            <input type="texte"
            placeholder="Buscar usuario..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            ></input>
            <UserList search={search} />
        </div>
    );
};

export default Home;