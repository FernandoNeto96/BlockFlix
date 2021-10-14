import styled from "styled-components";

export const ProdutoContainer = styled.div`
  width: 18rem;
  color: ${({ theme }) => theme.color};
`;

export const Feactured = styled.section`
height: 100vh; 
`;

export const FeacturedVertical = styled.div`
width:inherit;
    height: inherit;
    background: linear-gradient(to top,#111 10%,transparent 90%);
`;

export const FeaturedHorizontal = styled.div`
width:inherit;
    height: inherit;
    background: linear-gradient(to right,#111 30%,transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 150px;
    padding-top: 70px;
`;

export const FeacturedName = styled.div`
font-size: 60px;
    font-weight: bold;
`;

export const FeacturedInfo = styled.div`
font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
`;

export const FeacturedPoints = styled.div`
display: inline-block;
margin-right: 15px;
color: #46d369;
`;

export const FeacturedDescripition = styled.div`
margin-top: 15px;
font-size: 20px;
color: #999;
max-width: 40%;
`;

export const FeacturedYear = styled.div`
display: inline-block;
margin-right: 15px;
`;

export const FeacturedSeasons = styled.div`
display: inline-block;
margin-right: 15px;
`;

export const FeacturedButtons = styled.div`
margin-top: 15px;
`;

export const FeacturedWatchbutton = styled.a`
background-color: #fff;
color: #000;
display: inline-block;
font-size: 20px;
font-weight: bold;
padding:12px 25px;
border-radius: 5px;
text-decoration: none;
margin-right: 10px;
opacity: 1;
transition: all ease 0.2s;
`;

export const FeacturedMylistbutton = styled.a`
background-color: #333;
color: #fff;
display: inline-block;
font-size: 20px;
font-weight: bold;
padding:12px 25px;
border-radius: 5px;
text-decoration: none;
margin-right: 10px;
opacity: 1;
transition: all ease 0.2s;

`;

export const FeacturedGenrs = styled.div`
margin-top: 15px;
font-size: 18px;
color: #999;
`;

/*
.feactured--watchbutton:hover,.feactured--mylistbutton:hover {
    opacity: 0.7;
}
*/