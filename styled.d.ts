import { fail } from "assert";
import "styled-components";

declare module "styled-components" {
   export interface DefaultTheme {
      colors: {
         blue: string;
         bw1: string;
         bw2: string;
         bw3: string;
         bw4: string;
         bw5: string;
         bw6: string;
         bw7: string;
         bw8: string;
      };
      fonts: {
         roboto: {
            fontFamily: string;
            regular: string;
            bold: string;
         };
      };
      others: {
         shadow: string;
         hover: string;
      };
   }
}
