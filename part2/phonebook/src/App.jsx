import { useState, useEffect } from 'react'
import axios from 'axios'
import { Numbers } from './Numbers'
import { Search } from './Search'
import { Add } from './Add'
import personsService from './services/persons.js'

let id = 5

const App = () => {

  const [persons, setPersons] = useState([])
  
  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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
    if (!exists) {

      let newPerson = {
        name: newName, 
        number: newNumber, 
      }

      personsService
        .create(newPerson)
        .then(response => setPersons([...persons, response]))
      
    }
    else alert(`${newName} is already added to phonebook`)
  }

  console.log(persons)


  const handleButton = (name, id) => {

    if (window.confirm(`Delete ${name}`)) {
      personsService
      .deletePerson(id)
      setPersons(persons.filter(person => person.id !== id))
    }
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
          handleButton={handleButton}
        />

    </div>
  )
}

export default App