import { useState } from 'react'

const Numbers = ( { persons } ) => {
  return persons.map(person => {
    return <p key={person.name}>{person.name}</p>
  })
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setNewName('')
  }
  const handleInput = e => setNewName(e.target.value)

  const handleAdd = () => {
    const exists = (persons.some(person => person.name === newName))
    !exists ? setPersons([...persons, {name: newName}]) : alert(`${newName} is already added to phonebook`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form 
        onSubmit={handleSubmit} 
       >
        <div>
          name: <input 
            onChange={handleInput}
            value={newName}
          />
        </div>
        <div>
          <button 
            type="submit"
            onClick={handleAdd}
          >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <Numbers 
          persons={persons}
        />
    </div>
  )
}

export default App