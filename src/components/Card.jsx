import React from 'react';
import styled from 'styled-components';
import data from './data';
const Data =styled.div`
display:flex;
margin-right:190px;
`;
const Image=styled.img`
border-radius:50%;

margin:10px 20px;
max-height: 65px;
    max-width: 65px;
    min-height: 65px;
    min-width: 65px;
    object-fit: cover;
`;
const Desc=styled.div`
margin-top:12px;
`;
const Hr=styled.hr`
color:#999;
width:90%;
`
const Age=styled.div`
margin-left:20px;
text-align:left;
`;
const Name=styled.h2`
  margin:0px 20px;
  font-weight:500;
`;
const Details=styled.div``;
const Card=({name,id,age,image})=>{

  return (
    <Details>
      <Hr/>
     <Data>

     <Image src={image} alt=""/>
     <Desc>
     <Name>{name}</Name>
     <Age>{age} years</Age>

     </Desc>

     </Data>
    </Details>

  );
}
export default Card;
