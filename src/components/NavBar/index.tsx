import { NavBarContainer, OptionsContainer } from "./styles";
import { LogoImg } from "@/public/";
import Image from "next/image";
import NavBarOption from "../NavBarOption";

const NavBar = () => {
   return (
      <NavBarContainer>
         <Image src={LogoImg} alt="Logo" width={40} height={35} />
         <OptionsContainer>
            <NavBarOption active />
         </OptionsContainer>
      </NavBarContainer>
   );
};

export default NavBar;
