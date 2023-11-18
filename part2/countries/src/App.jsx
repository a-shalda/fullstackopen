import { useState, useEffect } from "react"

const ShowCountries = ( {country, countries, handleView} ) => {

  if (country !== '') {
    const filteredCountries = countries
      .map(item => item.name.common)
      .filter(item => item.toLowerCase().includes(country.toLowerCase()))
    
    if (filteredCountries.length > 10) {
      return <>Too many matches, specify another filter</>
    }
    else if (filteredCountries.length === 1) {

      const countryIndex = countries.map(item => item.name.common).indexOf(filteredCountries[0])
      const countryView = countries[countryIndex]

      return (
        <>
          <h1>{countryView.name.common}</h1>
          <p>Capital: {countryView.capital[0]}</p>
          <p>Area: {countryView.area}</p>
          <h2>Languages:</h2>
          <ul>
            {Object.values(countryView.languages).map(language => <li key={language}>{language}</li>)}
          </ul>
          <img src={countryView.flags.png} width='200'/>
        </>
      )
    }
    else return filteredCountries.map(item => {
      return (
        <>
          <p key={item}>{item} &nbsp;
            <button 
              onClick={() => handleView(item)}
            >
              Show
            </button> 
        </p></>)
    })

  }
  else if (country === '') {
    return <>Start typing...</>
  }
}

const App = () => {

  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => {
      if (!response.ok) throw new Error ('Bad response')
      else return response.json()
    })
    .then(response => {
      setCountries(response.map(entry => {
        return entry
      }))
    })
    .catch(err => console.log(err.message))
  }, [])

  const handleView = (item) => setCountry(item)

  return (
    <>
      <p>find countries 
        <input
          value={country}
          onChange={(e) => {
            setCountry(e.target.value)
          }}
        />
      </p>
      <ShowCountries 
        country={country}
        countries={countries}
        handleView={handleView}
      />
    </>
  )
}


export default App