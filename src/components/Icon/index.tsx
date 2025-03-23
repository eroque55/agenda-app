import * as Icon from "@/public";
import Image from "next/image"; // Importing the correct Image component

export type IconT = keyof typeof Icon;

export interface IconProps {
   name?: IconT;
   size?: number;
   icon?: IconProps;
   onClick?: () => void;
}

const IconComponent = ({ name, size = 20, icon, onClick }: IconProps) => {
   if (icon && icon.name && !!Icon[icon.name]) {
      return <IconComponent {...icon} />;
   }

   if (name && !!Icon[name]) {
      return (
         <Image
            style={{ cursor: onClick ? "pointer" : "default" }}
            src={Icon[name]}
            alt={name}
            width={size}
            height={size}
            onClick={onClick}
         />
      );
   }
   return null;
};

export default IconComponent;
