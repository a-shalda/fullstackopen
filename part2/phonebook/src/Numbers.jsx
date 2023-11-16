export const Numbers = ( { persons, search } ) => {

  if (search === '') {
    return persons.map(person => {
      return <p key={person.name}>{person.name} {person.number}</p>
    })
  }
  else {
    return persons.map(person => {
      if (person.name.toLowerCase().includes(search.toLowerCase())) {
        return <p key={person.id}>{person.name} {person.number}</p>
      };
    })
  }
}