import { theme } from "@/src/themes/ClientLayout";
import styled from "styled-components";

const fontWeights = {
   regular: theme.fonts.roboto.regular,
   bold: theme.fonts.roboto.bold,
};

const fontColors = {
   blue: theme.colors.blue,
   bw1: theme.colors.bw1,
   bw2: theme.colors.bw2,
   bw3: theme.colors.bw3,
   bw4: theme.colors.bw4,
   bw5: theme.colors.bw5,
   bw6: theme.colors.bw6,
   bw7: theme.colors.bw7,
   bw8: theme.colors.bw8,
};

interface Props {
   size?: number;
   weight?: keyof typeof fontWeights;
   color?: keyof typeof fontColors;
}

export const Title = styled.h1<Props>`
   font-weight: ${({ weight }) => fontWeights[weight || "bold"]};
   color: ${({ color }) => fontColors[color || "blue"]};
   font-size: ${({ size }) => size || 2}rem;
`;
