export const Search = ({ handleSearch, search}) => {
  
  return (
    <input
      onChange={handleSearch}
      value={search}
    />
  )
}