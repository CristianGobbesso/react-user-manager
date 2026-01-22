

const SearchInput = ({search, setSearch})=>{
    return (
        <input type="text"
            placeholder="Buscar usuario..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
    );

}
export default SearchInput;