"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
   ActionsContainer,
   BackgroundContainer,
   HeaderContainer,
   MainContainer,
} from "../../styles";
import NavBar from "@/src/components/NavBar";
import { Title, TitleContainer } from "@/src/components/Title";
import { ToastContainer } from "react-toastify";
import Loading from "@/src/components/Loading";
import BackButton from "@/src/components/BackButton";
import ButtonComponent from "@/src/components/Button";
import ListContact from "@/src/components/ListContact";
import { useCustomerStore } from "@/src/store/CustomerStore";
import ModalContactCreate from "@/src/components/ModalContactCreate";
import ModalContactEdit from "@/src/components/ModalContactEdit";
import ModalCustomerEdit from "@/src/components/ModalCustomerEdit";

const Customer = () => {
   const { customer, setCustomer } = useCustomerStore();
   const [isEditCustomerOpen, setIsEditCustomerOpen] = useState(false);
   const [isCreateContactOpen, setIsCreateContactOpen] = useState(false);
   const [isEditContactOpen, setIsEditContactOpen] = useState(false);
   const { id } = useParams();

   useEffect(() => {
      setCustomer(Number(id));
   }, []);

   return (
      <BackgroundContainer>
         <ModalContactCreate
            isOpen={isCreateContactOpen}
            setIsOpen={setIsCreateContactOpen}
         />
         <ModalCustomerEdit
            isOpen={isEditCustomerOpen}
            setIsOpen={setIsEditCustomerOpen}
         />
         <ModalContactEdit
            isOpen={isEditContactOpen}
            setIsOpen={setIsEditContactOpen}
         />
         <NavBar />
         <MainContainer>
            <HeaderContainer>
               <TitleContainer>
                  <BackButton />
                  <Title>Contatos do cliente: {customer?.name}</Title>
               </TitleContainer>
               <ActionsContainer>
                  <ButtonComponent
                     wired
                     width="12.5rem"
                     icon="EditIcon"
                     onClick={() => setIsEditCustomerOpen(true)}
                  >
                     Editar cliente
                  </ButtonComponent>
                  <ButtonComponent
                     width="12.5rem"
                     icon="PlusIcon"
                     onClick={() => setIsCreateContactOpen(true)}
                  >
                     Adicionar contato
                  </ButtonComponent>
               </ActionsContainer>
            </HeaderContainer>
            {!customer ? (
               <Loading />
            ) : (
               <ListContact
                  contacts={customer.contacts}
                  setIsEditContactOpen={setIsEditContactOpen}
               />
            )}
         </MainContainer>
         <ToastContainer />
      </BackgroundContainer>
   );
};

export default Customer;
