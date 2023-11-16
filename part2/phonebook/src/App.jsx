import { useState } from 'react'

let id = 4

const Numbers = ( { persons, search } ) => {
  if (search === '') {
    return persons.map(person => {
      return <p key={person.name}>{person.name} {person.number}</p>
    })
  }
  else {
    return persons.map(person => {
      if (person.name.toLowerCase().includes(search.toLowerCase())) {
        return <p key={person.name}>{person.name} {person.number}</p>
      };
    })
  }
}

const App = () => {

  const [persons, setPersons] = useState(([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setNewName('')
    setNewNumber('')
  }
  const handleName = e => setNewName(e.target.value)
  const handleNumber = e => setNewNumber(e.target.value)
  const handleSearch = e => setSearch(e.target.value)

  console.log(search);

  const handleAdd = () => {
    const exists = (persons.some(person => person.name === newName))
    !exists ? setPersons([...persons, {name: newName, number: newNumber, id: id++}]) : alert(`${newName} is already added to phonebook`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with 

        <input
          onChange={handleSearch}
          value={search}
        />
    
      </p>
      <form 
        onSubmit={handleSubmit} 
       >
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
          search={search}
        />
    </div>
  )
}

export default App