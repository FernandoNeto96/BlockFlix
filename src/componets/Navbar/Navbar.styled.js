import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #333;
  color: white;
  width: 100%;
  height: 30%;
  padding: 10px;
  cursor: pointer;

  
`;

export const StyleCartLogin = styled(StyledNavbar)`
  width: 10%;
  height: 100%;
  padding-right: 30px;

  img{
  width: 40px;
  height: 40px;
  
     }
  
`;


