import styled from "styled-components";

interface StyledSelectProps {
   $width?: string;
}

export const StyledSelect = styled.select<StyledSelectProps>`
   display: flex;
   width: ${({ $width }) => $width || "100%"};
   padding: 0.75rem;
   align-items: center;
   border-radius: 12px;
   background: ${({ theme }) => theme.colors.bw1};
   border: 1px solid ${({ theme }) => theme.colors.bw3};

   color: ${({ theme }) => theme.colors.bw6};
   font-size: 1rem;

   &:focus {
      outline: none;
   }
`;
