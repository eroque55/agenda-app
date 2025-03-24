import { LabelContainer } from "./styles";

interface Props {
   children?: React.ReactNode;
}

const LabelComponent = ({ children }: Props) => {
   return <LabelContainer>{children}</LabelContainer>;
};

export default LabelComponent;
