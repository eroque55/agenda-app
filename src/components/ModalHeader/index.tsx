import { Title } from "../Title";
import { ModalHeaderContainer } from "./styles";

interface Props {
   children: React.ReactNode;
}

const ModalHeader = ({ children }: Props) => {
   return (
      <ModalHeaderContainer>
         <Title color="bw6" size={1.25}>
            {children}
         </Title>
      </ModalHeaderContainer>
   );
};

export default ModalHeader;
