import styled from "styled-components";

export const LabelContainer = styled.label`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 0.25rem;
   align-self: stretch;

   font-size: 1rem;
   color: ${({ theme }) => theme.colors.bw6};
`;
