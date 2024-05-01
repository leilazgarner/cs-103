import useSWR from "swr";
import styled from 'styled-components';

const StyleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10%;
  background-color: lightsteelblue;
`;


const StyleCard = styled.div`
  flex: 25%;
  margin: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: cadetblue 4px solid;
  border-radius: 1%;
  padding: 2%;
  background-color: #fff;
`;

const StyleImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 1%;
`;


const StyleHeading = styled.h3`
  font-size: calc(20px + 1vw);
  text-align: center;
  color: #333;
  margin: 6%;
`;


const StyleMain = styled.p`
  text-align: center;
  color: #666;
  margin: 0 0 2%;  
`;

function App() {


    const {data, error} =
        useSWR('https://rickandmortyapi.com/api/character',
            (url)=>
                fetch(url).then((res) => res.json())
        );


    if (error) return <p>{error.message}</p>;
    if (!data) return <p>Loading...</p>;


    return (
        <StyleDiv>
            {
                data.results.map((pers) =>
                    (
                        <StyleCard key={pers.id}>
                            <StyleImage src={pers.image} alt={pers.name}/>
                            <StyleHeading>{pers.name}</StyleHeading>
                            <StyleMain><b>Status:</b> {pers.status}</StyleMain>
                            <StyleMain><b>Species:</b> {pers.species}</StyleMain>
                            <StyleMain><b>Gender:</b> {pers.gender}</StyleMain>
                            <StyleMain><b>Origin:</b> {pers.origin.name}</StyleMain>
                            <StyleMain><b>Current:</b> Location: {pers.location.name}</StyleMain>
                        </StyleCard>
                    )
                )
            }
        </StyleDiv>
    )
}


export default App
