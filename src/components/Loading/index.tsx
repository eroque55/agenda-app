import { Title } from "../Title";
import { LoadingContainer } from "./styles";

const Loading = () => {
   return (
      <LoadingContainer>
         <Title color="bw5" weight="regular">
            Carregando...
         </Title>
      </LoadingContainer>
   );
};

export default Loading;
