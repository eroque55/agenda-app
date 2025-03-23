import styled from "styled-components";

interface OptionContainerProps {
   $active?: boolean;
}

export const OptionContainer = styled.li<OptionContainerProps>`
   width: 40px;
   height: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: ${({ $active }) => ($active ? "default" : "pointer")};
   border-radius: 8px;

   background-color: ${(props) =>
      props.$active ? props.theme.colors.blue : "transparent"};
`;
