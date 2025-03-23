import styled from "styled-components";

export const BackgroundContainer = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   padding: 1rem;
   gap: 1rem;
   background-color: ${({ theme }) => theme.colors.bw2};
`;

export const MainContainer = styled.main`
   display: flex;
   padding: 1.5rem 0rem;
   flex-direction: column;
   align-items: center;
   gap: 2rem;
   flex: 1 0 0;
   align-self: stretch;
`;

export const HeaderContainer = styled.header`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 0.75rem;
   align-self: stretch;
`;

export const ActionsContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   gap: 1.25rem;
   align-self: stretch;
`;
