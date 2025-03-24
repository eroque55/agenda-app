import { ModalBackground, ModalContainer } from "../Modal/styles";
import ModalForm from "../ModalForm";
import ModalFooter from "../ModalFooter";
import ModalHeader from "../ModalHeader";
import LabelComponent from "../Label";
import { StyledInput } from "../Input/styles";
import { useForm } from "react-hook-form";
import {
   confirmationModal,
   errorModal,
   IConfirmationToast,
   successModal,
} from "../Toasts";
import ICustomer from "@/src/interfaces/ICustomer";
import { createCustomer } from "@/src/services/customer.service";
import { useCustomersStore } from "@/src/store/CustomerStore";

interface Props {
   isOpen: boolean;
   setIsOpen: (value: boolean) => void;
}

const ModalCreateCustomer = ({ isOpen, setIsOpen }: Props) => {
   const { setCustomers } = useCustomersStore();
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<ICustomer>({ mode: "onBlur" });

   const confModal: IConfirmationToast = {
      title: "Cancelar cadastro",
      message: "Deseja realmente cancelar o cadastro?",
      confirmButton: "Cancelar",
      cancelButton: "Voltar",
      confirmAction: () => {
         setIsOpen(false);
         reset();
      },
   };

   const onCancel = () => {
      confirmationModal(confModal);
   };

   const onSubmit = async (data: ICustomer) => {
      try {
         await createCustomer(data);
         successModal("Cliente cadastrado com sucesso!");
         setCustomers();
         setIsOpen(false);
         reset();
      } catch (e: any) {
         errorModal(e.response.data);
      }
   };

   if (!isOpen) return null;

   return (
      <ModalBackground>
         <ModalContainer $width="35rem">
            <ModalHeader>Cadastrar cliente</ModalHeader>
            <ModalForm>
               <LabelComponent>
                  Nome
                  <StyledInput
                     placeholder="Insira o nome"
                     id="name"
                     {...register("name")}
                  />
               </LabelComponent>
               <LabelComponent>
                  CPF
                  <StyledInput
                     placeholder="Insira o CPF"
                     id="cpf"
                     {...register("cpf")}
                  />
               </LabelComponent>
               <LabelComponent>
                  Data de Nascimento
                  <StyledInput
                     type="date"
                     id="birthday"
                     {...register("birthday")}
                  />
               </LabelComponent>
               <LabelComponent>
                  Endereço
                  <StyledInput
                     placeholder="Insira o endereço"
                     id="address"
                     {...register("address")}
                  />
               </LabelComponent>
            </ModalForm>
            <ModalFooter
               cancelButton="Cancelar"
               confirmAction={handleSubmit(onSubmit)}
               cancelAction={onCancel}
            >
               Cadastrar
            </ModalFooter>
         </ModalContainer>
      </ModalBackground>
   );
};

export default ModalCreateCustomer;
