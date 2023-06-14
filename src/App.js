import './App.css';
import { Component } from 'react';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';

class App extends Component {

  constructor() {
    super()
    this.state = {
      Monsters: [],
      searchTerm: '',
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => this.setState(() => {
        return {
          Monsters: json,
        }},
        () => console.log(this.state),
      ));
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }
  render() {
    const { Monsters, searchTerm } = this.state;
    const { onSearchChange } = this;


    return (
      <div className="App">
      <h1 className='app-heading'>Monsters Maniaa </h1>
        <SearchBar onSearchChange={onSearchChange} />
        <CardList Monsters={Monsters} searchTerm={searchTerm} />
      </div>
    )
  }
}

export default App;