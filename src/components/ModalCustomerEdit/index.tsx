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
import { editCustomer } from "@/src/services/customer.service";
import { useCustomerStore } from "@/src/store/CustomerStore";
import { useEffect } from "react";

interface Props {
   isOpen: boolean;
   setIsOpen: (value: boolean) => void;
}

const ModalEditCustomer = ({ isOpen, setIsOpen }: Props) => {
   const { customer, setCustomer } = useCustomerStore();
   const {
      register,
      handleSubmit,
      reset,
      setValue,
      formState: { errors },
   } = useForm<ICustomer>({ mode: "onBlur" });

   useEffect(() => {
      setValue("name", customer?.name || "");
      setValue("cpf", customer?.cpf || "");
      setValue("birthday", customer?.birthday || new Date());
      setValue("address", customer?.address || "");
   }, [isOpen]);

   const confModal: IConfirmationToast = {
      title: "Cancelar alterações",
      message: "Deseja realmente cancelar as alterações?",
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
         await editCustomer(customer?.id || 0, data);
         successModal("Cliente alterado com sucesso!");
         setCustomer(customer?.id || 0);
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
            <ModalHeader>Alterar cliente</ModalHeader>
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
               Alterar
            </ModalFooter>
         </ModalContainer>
      </ModalBackground>
   );
};

export default ModalEditCustomer;
