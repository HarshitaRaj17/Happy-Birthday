import React,{useState} from 'react';
import styled from 'styled-components';
import data from './data';
import CardList from './CardList';
const Container =styled.div`
display:flex;

height:700px;
`;
const Wrapper=styled.div`
margin:auto;
display:flex;
align-items:center;
border-radius:5px;
width:500px;
height:660px;
background-color:white;
flex-direction:column;

`;
const Title=styled.h2`
 font-weight:500;
`;
const Head= styled.div``;


const Button=styled.button`
padding:10px 20px;
background-color:white;
font-size:20px;
border:1px solid white;
border-radius:10px;
cursor:pointer;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;
const Hr=styled.hr`
color:#999;
width:90%;
`;


const Home=()=>{
  const[people,setPeople]=useState(data);
  return (
    <Container>

    <Wrapper>
    <Head>

     <Title>{people.length} Birthdays Today</Title>
    </Head>

     <CardList people={people}/>

     <Hr/>
     <Button onClick={()=>setPeople([])}>
     Clear All</Button>

     </Wrapper>

    </Container>
  );
}
export default Home;
