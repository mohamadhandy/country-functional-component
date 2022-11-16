import Searchbox from './components/search-box/Searchbox';
import './App.css';
import { useState } from 'react';
import CardList from './components/card-list/CardList';

const App = () => {
  const [searchField, setsearchField] = useState("")
  const [countries, setcountries] = useState([])

  const onSearchChange = (e) => {
    setsearchField(e.target.value.toLowerCase())
  }

  return (
    <div className="App">
      <h1 className="app-title">Countries rolodex</h1>
      <Searchbox placeholder="Search Country" className="country-search-box" onChangeHandler={onSearchChange} />
    </div>
  );
}

export default App;
