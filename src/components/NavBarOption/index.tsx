import { OptionContainer } from "./styles";
import IconComponent from "../Icon";

interface Props {
   active?: boolean;
}

const NavBarOption = ({ active = false }: Props) => {
   return (
      <OptionContainer $active={active}>
         <IconComponent name="CustomersIcon" />
      </OptionContainer>
   );
};

export default NavBarOption;
