// import { Component } from 'react';

import  Card  from '../card/card.component'; 

import './card-list.styles.css';
const CardList = ({monsters}) => (
    <div className='card-list'>
        {monsters.map((monster) => {
            return (
                <Card monster={monster} key={monster.id} />
            )}
        )}
    </div>
);

// const CardList = ({monsters}) => {
//     return (
//         <div className='card-list'>
//             {monsters.map((monster) => {
//                 return (
//                     <Card monster={monster} key={monster.id} />
//                 )}
//             )}
//         </div>
//     )
// }

// class CardList extends Component {
//     render() {
//         const { monsters } = this.props;
//
//         return (
//             <div className='card-list'>
//                 {monsters.map((monster) => {
//                     return (
//                         <div>
//                             {/*<div className='chart'></div>*/}
//                             <Card monster={monster} key={monster.id} />
//                         </div>
//                     )}
//                 )}
//             </div>
//         );
//     }
// }

export default CardList;