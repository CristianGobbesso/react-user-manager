import './UserItem.css';

const UserItem = ({user,onDelete}) =>{
    return (
        <li className="user-item">
            <div className="user-info">
            <span className="user-name user-email">
                {user.name} ({user.email} ) 
            </span>
            </div>
            <button 
            className="delete-btn"
             onClick={()=> onDelete(user.id)}
             >
                Eliminar
            </button>

        </li>
    );
};

export default UserItem;