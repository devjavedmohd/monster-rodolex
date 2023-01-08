import {Component} from 'react';

import logo from './logo.svg';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            monsters: [],
            searchField: ''
            // name: {
            //     firstName: 'Javed',
            //     lastName: 'Mohd'
            // },
            // company: 'FBJ'
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(
                (user) => this.setState(() => {
                    return { monsters: user }
                })
            )
    }
    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return { searchField };
        });
    };
  render() {
      const {monsters, searchField} = this.state;
      const {onSearchChange} = this;
      
      const filteredMonster = monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchField);
      });
      
      return (
        <div className="App">
            <h1>Monster Rodolex</h1>
            <SearchBox 
                searchChanges={onSearchChange} 
                placeholder='search monsters' 
                className='search-box' />
            <CardList monsters={filteredMonster} />
        </div>
      )
    // return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="log o" />
    //           <p>Hi {this.state.name.firstName} {this.state.name.lastName}, I worked in {this.state.company}</p>
    //           <button onClick={() => {
    //               this.setState(() => {
    //                   return {
    //                       name: {
    //                           firstName: 'Faham',
    //                           lastName: 'Javed'
    //                       }
    //                   }
    //               }, () => {
    //                   console.log(this.state) // not mandatory
    //               })
    //           }}>Change Name</button>
    //       </header>
    //     </div>
    // );  
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
