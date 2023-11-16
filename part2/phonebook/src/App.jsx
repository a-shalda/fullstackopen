import { useState } from 'react'

const Numbers = ( { persons } ) => {
  return persons.map(person => {
    return <p key={person.name}>{person.name} {person.number}</p>
  })
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 3}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setNewName('')
    setNewNumber('')
  }
  const handleName = e => setNewName(e.target.value)
  const handleNumber = e => setNewNumber(e.target.value)

  const handleAdd = () => {
    const exists = (persons.some(person => person.name === newName))
    !exists ? setPersons([...persons, {name: newName, number: newNumber}]) : alert(`${newName} is already added to phonebook`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form 
        onSubmit={handleSubmit} 
       >
        <div>
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