import { useState, useEffect } from 'react'
import axios from 'axios'
import { Numbers } from './Numbers'
import { Search } from './Search'
import { Add } from './Add'

let id = 5

const App = () => {

  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

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

  const handleAdd = () => {
    const exists = (persons.some(person => person.name === newName))
    !exists ? setPersons([...persons, {name: newName, number: newNumber, id: id++}]) : alert(`${newName} is already added to phonebook`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with 

        <Search 
          handleSearch={handleSearch}
          search={search}
        />

      </p>
      <form 
        onSubmit={handleSubmit} 
       >

        <Add 
          newName={newName} 
          newNumber={newNumber} 
          handleName={handleName} 
          handleNumber={handleNumber}
        />

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