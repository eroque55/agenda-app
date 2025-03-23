import styled from "styled-components";

interface StyledInputProps {
   $width?: string;
}

export const StyledInput = styled.input<StyledInputProps>`
   display: flex;
   width: ${({ $width }) => $width || "100%"};
   padding: 0.75rem;
   align-items: center;
   border-radius: 12px;
   background: ${({ theme }) => theme.colors.bw1};
   border: 1px solid ${({ theme }) => theme.colors.bw3};

   color: ${({ theme }) => theme.colors.bw6};
   font-size: 1rem;

   &::placeholder {
      color: ${({ theme }) => theme.colors.bw4};
   }

   &:focus {
      outline: none;
   }
`;
