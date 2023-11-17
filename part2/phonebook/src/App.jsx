import { useState, useEffect } from 'react'
import { Numbers } from './Numbers'
import { Search } from './Search'
import { Add } from './Add'
import personsService from './services/persons.js'

let id = 4

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

    let idOfNewName;
    let numbersDifferent = false
    
    persons.map(person => {
      if (person.name === newName) {
        idOfNewName = person.id
        if (person.number !== newNumber) {
          numbersDifferent = true;
        }
      }
    })

    let newPerson = {
      name: newName, 
      number: newNumber, 
    }

    if (!idOfNewName) {

      personsService
        .create(newPerson)
        .then(response => setPersons([...persons, response]))
    }
    else if (numbersDifferent) {

      if (window.confirm(`${newName} is already added to phonebook, update the phone number?`)) {

        personsService
          .update((idOfNewName), newPerson)
          .then(response => {
            setPersons(persons.map(person => {
              if (person.id === response.id) return response
              else return person
            }))
          })
      }
    }
  }

  const handleButton = (name, id) => {

    if (window.confirm(`Delete ${name}?`)) {
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