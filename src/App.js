import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import CardList from "./Components/card-list/card-list-component";
import SearchBox from './Components/search-box/search-box-component';

class App extends Component {

  constructor(){

    super();
    this.state={
      monsters:[],
      searchText: ''
    }
  }
onSearchChange = (event)=>{
  this.setState(()=>{
    const text = event.target.value.toLocaleLowerCase()
    return{searchText:text};
  });
  }
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=>this.setState(()=>{
      return{monsters:users}
    }))
  }
  render(){
    const { monsters, searchText} = this.state;
    const {onSearchChange} = this;
    const filterMonster = monsters.filter((monster)=>{return monster.name.toLocaleLowerCase().includes(searchText)})

    return (
      <div className="App">
        <h2 className='app-heading'>MONSTER ROLODEX</h2>
        <SearchBox className= "search-monster"
        placeHolder="Search Monster" 
        onChangeHandler={onSearchChange}/>
        <CardList filterMonster={filterMonster}/>
      </div>
    );
  }
  
}

export default App;
