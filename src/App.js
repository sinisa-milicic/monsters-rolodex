import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters:users}))
  }

  searchFieldUpdate = (event) => {
    this.setState({
      searchField: event.target.value
    });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1> Monsters Roladex</h1>
        <SearchBox 
          placeholder='Filter Monsters' 
          handleChange={this.searchFieldUpdate} />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
