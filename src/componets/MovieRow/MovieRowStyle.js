import styled from "styled-components";

export const ProdutoContainer = styled.div`
  width: 18rem;
  color: ${({ theme }) => theme.color};
`;

export const MovieRowDiv = styled.div`
margin-bottom: 30px;

h2{
    margin: 0px 0px 0px 30px; 
}

    &:hover div { opacity: 1}
`;

export const MovieRowH2 = styled.h2`
margin: 0px 0px 0px 30px;
`;

export const MovieRowCard = styled.div`
 width: 140px;
    height: 350px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    margin:2px 10px 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);
    border-radius: 6px;

    button{
        display: inline-block;
font-size: 20px;
font-weight: bold;
padding:3px 5px;
border-radius: 5px;
text-decoration: none;
margin-right: 7px;
opacity: 1;
transition: all ease 0.2s;
cursor: pointer;    
    }
`;

export const MovieRowListarea = styled.div`
overflow-x: hidden;
padding-left: 30px;
`;

export const MovieRowList = styled.div`
transition: all ease 0.5s;
`;

export const MovieRowLegend = styled.div`
padding: 2px 16px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items:stretch;
`;


export const MovieRowItem = styled.div`
display: inline-block;
width: 150px;
cursor: pointer;

img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;  
}
img:hover{
    transform: scale(1);
}
`;

export const MovieRowLeft = styled.div`
position: absolute;
width: 40px;
height: 350px;
background-color: rgba(0, 0, 0, 0.6);
z-index: 99;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
cursor:pointer;
opacity: 0;
transition: all ease 0.5s;
left: 0;
`;

export const MovieRowRingth = styled.div`
position: absolute;
width: 40px;
height: 350px;
background-color: rgba(0, 0, 0, 0.6);
z-index: 99;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
cursor:pointer;
opacity: 0;
transition: all ease 0.5s;
right: 0;
`;

/*
export const MovieRowItemImg = styled.img`
width: 100 %;
transform: scale(0.9);
transition: all ease 0.2s;
`;



    .movieRow: hover.movieRow--left,.movieRow: hover .movieRow--ringth{
    opacity: 1;

}

.movieRow h2{
margin: 0px 0px 0px 30px;
}
*/