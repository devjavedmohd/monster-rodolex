// import {Component} from 'react';
import { useState, useEffect } from 'react';

// import logo from './logo.svg';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonster, setFilteredMonster] = useState([monsters])
    
    
    console.log('render');
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((user) => setMonsters(user))    
    }, [])
    useEffect( () => {
        const newFilteredMonster = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        setFilteredMonster(newFilteredMonster)
    }, [monsters, searchField])
    const onSearchChange = (event) => {
        const searchString = event.target.value.toLocaleLowerCase();
        setSearchField(searchString)
    };

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
}
// class App extends Component {
//     constructor(props) {
//         super(props);
//        
//         this.state = {
//             monsters: [],
//             searchField: ''
//         }
//     }
//    
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             .then(
//                 (user) => this.setState(() => {
//                     return { monsters: user }
//                 })
//             )
//     }
//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLocaleLowerCase();
//         this.setState(() => {
//             return { searchField };
//         });
//     };
//   render() {
//       const {monsters, searchField} = this.state;
//       const {onSearchChange} = this;
//      
//       const filteredMonster = monsters.filter((monster) => {
//           return monster.name.toLocaleLowerCase().includes(searchField);
//       });
//      
//       return (
//         <div className="App">
//             <h1>Monster Rodolex</h1>
//             <SearchBox 
//                 searchChanges={onSearchChange} 
//                 placeholder='search monsters' 
//                 className='search-box' />
//             <CardList monsters={filteredMonster} />
//         </div>
//       ) 
//   }
// }

export default App;
