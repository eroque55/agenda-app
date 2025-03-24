"use client";

import { useEffect, useState } from "react";
import NavBar from "@/src/components/NavBar";
import {
   BackgroundContainer,
   MainContainer,
   HeaderContainer,
   ActionsContainer,
} from "./styles";
import { Title } from "@/src/components/Title";
import { StyledInput } from "@/src/components/Input/styles";
import ButtonComponent from "@/src/components/Button";
import ListCustomer from "@/src/components/ListCustomer";
import { useCustomersStore } from "@/src/store/CustomerStore";
import ModalCustomerCreate from "@/src/components/ModalCustomerCreate";
import { ToastContainer } from "react-toastify";
import ICustomer from "../interfaces/ICustomer";
import { useForm } from "react-hook-form";

const Home = () => {
   const { setCustomers } = useCustomersStore();
   const [isModalOpen, setIsModalOpen] = useState(false);

   const dsadas: ICustomer = {
      id: 1,
      name: "Teste",
      cpf: "12312312312",
      address: "Rua teste",
      birthday: new Date("2021-10-10"),
      contacts: [],
   };

   useEffect(() => {
      setCustomers();
   }, []);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<ICustomer>({ mode: "onBlur" });

   const handleSearch = async (data: ICustomer) => {
      await setCustomers(data);
   };

   return (
      <BackgroundContainer>
         <ModalCustomerCreate isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
         <NavBar />
         <MainContainer>
            <HeaderContainer>
               <Title>Lista de clientes</Title>
               <ActionsContainer>
                  <StyledInput
                     $width="13rem"
                     placeholder="Buscar por nome"
                     {...register("name")}
                  />
                  <StyledInput
                     $width="13rem"
                     placeholder="Buscar por CPF"
                     {...register("cpf")}
                  />
                  <ButtonComponent
                     wired
                     width="12.5rem"
                     icon="SearchIcon"
                     onClick={handleSubmit(handleSearch)}
                  >
                     Pesquisar
                  </ButtonComponent>
                  <ButtonComponent
                     onClick={() => setIsModalOpen(true)}
                     width="12.5rem"
                     icon="PlusIcon"
                  >
                     Adicionar
                  </ButtonComponent>
               </ActionsContainer>
            </HeaderContainer>
            <ListCustomer />
         </MainContainer>
         <ToastContainer />
      </BackgroundContainer>
   );
};

export default Home;
