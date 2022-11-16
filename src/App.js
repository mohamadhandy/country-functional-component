import Searchbox from './components/search-box/Searchbox';
import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/CardList';

const App = () => {
  const [searchField, setsearchField] = useState("")
  const [countries, setcountries] = useState([])
  const [filteredCountries, setfilteredCountries] = useState(countries)

  const onSearchChange = (e) => {
    setsearchField(e.target.value.toLowerCase())
  }

  useEffect(() => {
    async function fetchCountries() {
      const res = await (await fetch('https://restcountries.com/v2/all')).json()
      setcountries(res)
    }
    return fetchCountries
  }, [])
  
  useEffect(() => {
    const newFilteredCountries = countries.filter(country => {
      return country.name.toLowerCase().includes(searchField)
    })
    setfilteredCountries(newFilteredCountries)
  }, [countries, searchField])

  return (
    <div className="App">
      <h1 className="app-title">Countries rolodex</h1>
      <Searchbox placeholder="Search Country" className="country-search-box" onChangeHandler={onSearchChange} />
      <CardList countries={filteredCountries} />
    </div>
  );
}

export default App;
