import "./Home.css";
import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import UserList from "../components/UserList";
import { getUsers } from "../services/userService";


const Home = () => {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getUsers()
        setusers(data);
      }
      catch (error) {
        setError(error.message);
      }
      finally {
        setLoading(false);
      }

    };
    fetchUsers();
  }, []);

  const handleDeleteuser = (id) => {
    const confirmDelete = window.confirm("¿Seguro que quieres eliminar este usuario?")

    if (!confirmDelete) return;

    setusers((prevusers) =>
      prevusers.filter((user) => user.id !== id)
    );
    setSearch("");
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Cargando usuarios... ⌛</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home">
      <h1 className="home-title">Gestión de Usuarios</h1>

      <SearchInput
        search={search}
        setSearch={setSearch}
      />
      <div className="home-actions">
        <button onClick={() => setSearch("")}>
          Limpiar búsqueda
        </button>
      </div>
      <p className="home-info">
        Mostrando {filteredUsers.length} de {users.length} usuarios
      </p>

      {filteredUsers.length === 0 ? (
        <p className="state">No hay usuarios para mostrar</p>
      ) : (
        <UserList
          users={filteredUsers}
          onDelete={handleDeleteuser}
        />
      )}
    </div>
  );
};

export default Home;