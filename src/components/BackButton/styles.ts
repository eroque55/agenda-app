import styled from "styled-components";

export const BackButtonContainer = styled.div`
   height: 2rem;
   width: 2rem;
   background-color: transparent;
   border: none;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;

   &:hover {
      background-color: rgba(0, 0, 0, 0.1);
   }
`;
