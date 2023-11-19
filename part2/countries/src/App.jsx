import { useState, useEffect } from "react"

const WeatherDetails = ({ weatherData, capital }) => {

  if (weatherData !== '') {

    console.log(weatherData)
    const img_id = weatherData.weather[0].icon
    const img_src = `https://openweathermap.org/img/wn/${img_id}@2x.png`

    return (
      <>
        <h2>Weather in {capital}</h2>
        <p>Temperature: {weatherData.main.temp} Celcius</p>
        <img src={img_src}/>
        <p>Wind: {weatherData.wind.speed} m/s</p>
      </>
    )
  }
}

const Fetch = ( {lat, lon, countryView} ) => {

  const [weatherData, setWeatherData] = useState('')
  const api_key = import.meta.env.VITE_SOME_KEY;

  //Making a weather call
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
    .then(response => {
      if (!response.ok) throw new Error ('Bad request')
      else return response.json()
    })
    .then(response => {
      setWeatherData(response)
    })
    .catch(err => console.log(err.message))
    console.log('weather fetched')

  }, [])

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
      <WeatherDetails
        weatherData={weatherData}
        capital={countryView.capital[0]}
      />
    </>
  )
}

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
      const lat = countryView.capitalInfo.latlng[0]
      const lon = countryView.capitalInfo.latlng[1]

      return <Fetch
                lat={lat}
                lon={lon}
                countryView={countryView}
              />
    }
    else return filteredCountries.map(item => {
      return (
        <p key={item}>{item} &nbsp;
            <button 
              onClick={() => handleView(item)}
            >
              Show
            </button> 
        </p>
      )
    })

  }
  else if (country === '') {
    return <>Start typing...</>
  }
}

const App = () => {

  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const handleView = (item) => setCountry(item)

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
    console.log('fetched')
  }, [])

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