"use client";

import NavBar from "@/src/components/NavBar";
import {
   BackgroundContainer,
   MainContainer,
   HeaderContainer,
   ActionsContainer,
} from "./styles";
import { Title } from "@/src/components/Title";
import InputComponent from "../components/Input";
import ButtonComponent from "../components/Button";
import List from "../components/List";
import { IconProps } from "../components/Icon";
import Modal from "../components/Modal";
import { toast, ToastContainer } from "react-toastify";

const headerContent = ["Nome", "CPF", "Data de nascimento", "Endereço"];

const listContent = [
   ["Fulano", "123.456.789-00", "01/01/2000", "Rua dos Bobos, 0"],
   ["Ciclano", "987.654.321-00", "02/02/2000", "Rua dos Bobos, 1"],
   ["Beltrano", "456.789.123-00", "03/03/2000", "Rua dos Bobos, 2"],
];

const handleDelete = () => console.log("trash");
const handleView = () => console.log("eye");

const listButtons: IconProps[] = [
   { name: "TrashIcon", onClick: handleDelete },
   { name: "EyeIcon", onClick: handleView },
];

const testToast = () => {
   toast(Modal, {
      data: {
         title: "Teste",
         message: "Testando",
         confirmButton: "OK",
      },
      toastId: "modal",
      position: "top-center",
      autoClose: false,
      closeButton: false,
      hideProgressBar: true,
   });
};

export default function Home() {
   return (
      <BackgroundContainer>
         <ToastContainer />
         <NavBar />
         <MainContainer>
            <HeaderContainer>
               <Title>Lista de clientes</Title>
               <ActionsContainer>
                  <InputComponent
                     width="12.5rem"
                     placeholder="Buscar por nome"
                  />
                  <InputComponent
                     width="12.5rem"
                     placeholder="Buscar por CPF"
                  />
                  <ButtonComponent wired width="12.5rem" icon="SearchIcon">
                     Pesquisar
                  </ButtonComponent>
                  <ButtonComponent
                     onClick={testToast}
                     width="12.5rem"
                     icon="PlusIcon"
                  >
                     Adicionar
                  </ButtonComponent>
               </ActionsContainer>
            </HeaderContainer>
            <List
               headerContent={headerContent}
               listContent={listContent}
               actions={listButtons}
            />
         </MainContainer>
      </BackgroundContainer>
   );
}
