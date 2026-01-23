import './SearchInput.css';

const SearchInput = ({search, setSearch})=>{
    return (
        <div className="search-container">
        <input
        className="search-input"
         type="text"
            placeholder="Buscar usuario..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
            </div>
    );

}
export default SearchInput;