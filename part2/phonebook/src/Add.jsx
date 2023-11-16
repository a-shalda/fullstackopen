export const Add = ( { newName, newNumber, handleName, handleNumber } ) => {
  return (
    <>
      <div>
      <h2>add a new</h2>
        name: <input 
          onChange={handleName}
          value={newName}
        />
      </div>
      <div>
        number: <input 
          onChange={handleNumber}
          value={newNumber}
        />
      </div>
    </> 
  )
}