import Row from "../Row";
import { ListContainer } from "./styles";
import { IconProps } from "../Icon";

interface Props {
   headerContent: string[];
   listContent: string[][];
   actions?: IconProps[];
}

const List = ({ headerContent, listContent, actions }: Props) => {
   return (
      <ListContainer>
         <Row content={headerContent} />
         {listContent.map((content, index) => (
            <Row key={index} content={content} actions={actions} />
         ))}
      </ListContainer>
   );
};

export default List;
