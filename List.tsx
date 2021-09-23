import { prependOnceListener } from 'process';
import { IState as IProps } from './App';
import React from 'react';




 const List: React.FC<IProps> = ({ people }) => {

  const renderList = () => {
    return people.map(person => {
      return (
        <li className='List'>
        <div className='List-header'>
          <img src={person.url} alt="ff" className="List-img" />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className='List-note'>{person.notes}</p>
      </li>
      ) 
    })
  }

  return (
    <ul>
      {renderList()}
    </ul>
  )
}

export default List;