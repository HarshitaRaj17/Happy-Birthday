import React from 'react';
import Card from './Card';

import data from './data';
const CardList=({people})=>{
  const cardComponent=people.map((person) =>{
    const{id,name,age,image}=person;
    return <Card key={id}
      name={name} age={age} image={image}/>

  })
  return(
       <div>
       {cardComponent}
       </div>
     );
}
export default CardList;
