import styled from "styled-components";

interface StyledButtonProps {
   $width?: string;
   $wired?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
   display: flex;
   width: ${({ $width }) => $width || "100%"};
   padding: 0.75rem;
   justify-content: center;
   align-items: center;
   gap: 0.75rem;
   border-radius: 8px;
   border: none;

   font-size: 1rem;
   font-weight: 700;

   cursor: pointer;
   &:hover {
      filter: brightness(0.9);
   }

   ${({ $wired, theme }) =>
      $wired
         ? `
      border: 2px solid ${theme.colors.blue};
      color: ${theme.colors.blue};
      `
         : `
      background-color: ${theme.colors.blue};
      color: ${theme.colors.bw1};
   `};
`;
