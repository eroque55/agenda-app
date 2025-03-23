import { StyledInput } from "./styles";

interface Props {
   width?: string;
   placeholder?: string;
}

const InputComponent = ({ width, placeholder }: Props) => {
   return <StyledInput $width={width} placeholder={placeholder} />;
};

export default InputComponent;
