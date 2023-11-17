const Input = ({ person, handleButton}) => {

  return (
    <p>
      {person.name} 
      &nbsp;{person.number}&nbsp;
      <button
        onClick={handleButton}
      >
        Delete
      </button>
    </p>
  )
}

const Content = ({ person, handleButton }) => {

  return (
    <Input 
      person={person}
      handleButton={handleButton}
    />
  )
}

export const Numbers = ( { persons, search, handleButton } ) => {

  if (search === '') {
    return persons.map(person => {
      return (
        <Content 
          person={person}
          key={person.id}
          handleButton={handleButton}
        />
      )
    })
  }
  else {
    return persons.map(person => {
      if (person.name.toLowerCase().includes(search.toLowerCase())) {
        return (
          <Content 
            person={person}
            key={person.id}
            handleButton={handleButton}
          />
        )
      };
    })
  }
}