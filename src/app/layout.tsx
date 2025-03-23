import ClientLayout from "@/src/themes/ClientLayout";
import StyledComponentsRegistry from "@/src/themes/StyledComponentsRegistry";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
   variable: "--font-roboto",
   subsets: ["latin"],
   weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
   title: "Agenda",
   description: "Desafio - Programa de Estágio",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR">
         <body className={`${roboto.variable}`}>
            <StyledComponentsRegistry>
               <ClientLayout>{children}</ClientLayout>
            </StyledComponentsRegistry>
         </body>
      </html>
   );
}
