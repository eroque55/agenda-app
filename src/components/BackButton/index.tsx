import { useRouter } from "next/navigation";
import IconComponent from "../Icon";
import { BackButtonContainer } from "./styles";

const BackButton = () => {
   const router = useRouter();
   return (
      <BackButtonContainer onClick={router.back}>
         <IconComponent name="ChevronLeftIcon" />
      </BackButtonContainer>
   );
};

export default BackButton;
