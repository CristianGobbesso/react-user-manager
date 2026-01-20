
const UserItem = ({user,onDelete}) =>{
    return (
        <li>
            
            <span>
                {user.name} ({user.email} ) 
            </span>

            <button onClick={()=> onDelete(user.id)}>
                Eliminar
            </button>

        </li>
    );
};

export default UserItem;