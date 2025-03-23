import styled from "styled-components";

export const NavBarContainer = styled.nav`
   display: flex;
   padding: 1.5rem 0.75rem;
   flex-direction: column;
   align-items: center;
   gap: 2rem;
   align-self: stretch;
   border-radius: 8px;
   background-color: ${({ theme }) => theme.colors.bw1};
   box-shadow: ${({ theme }) => theme.others.shadow};
`;

export const OptionsContainer = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`;
