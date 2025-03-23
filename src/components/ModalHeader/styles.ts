import styled from "styled-components";

export const ModalHeaderContainer = styled.div`
   display: flex;
   padding: 0.75rem;
   justify-content: flex-start;
   align-self: stretch;

   background-color: ${({ theme }) => theme.colors.bw2};
   box-shadow: ${({ theme }) => theme.others.shadow};
`;
