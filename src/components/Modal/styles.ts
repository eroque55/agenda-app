import styled from "styled-components";

export const ModalContainer = styled.dialog`
   display: flex;
   width: 22rem;
   height: 13rem;
   flex-direction: column;
   border-radius: 0.5rem;
   border: none;
   padding: 0;
   overflow: hidden;

   box-shadow: ${({ theme }) => theme.others.shadow};
`;
