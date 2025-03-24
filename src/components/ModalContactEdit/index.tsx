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
import { useCustomerStore } from "@/src/store/CustomerStore";
import IContact from "@/src/interfaces/IContact";
import { editContact } from "@/src/services/contact.service";
import { useEffect } from "react";
import { useContactStore } from "@/src/store/ContactStore";
import { StyledSelect } from "../Select/styles";

interface Props {
   isOpen: boolean;
   setIsOpen: (value: boolean) => void;
}

const ModalEditContact = ({ isOpen, setIsOpen }: Props) => {
   const { setCustomer, customer } = useCustomerStore();
   const { contact, setContact } = useContactStore();

   const { register, handleSubmit, reset, setValue } = useForm<IContact>({
      mode: "onBlur",
   });

   useEffect(() => {
      setValue("type", contact?.type || "PHONE");
      setValue("value", contact?.value || "");
      setValue("observations", contact?.observations || "");
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

   const onSubmit = async (data: IContact) => {
      try {
         if (!data.type) {
            errorModal("Selecione um tipo de contato");
            return;
         }
         await editContact(contact?.id || 0, data);
         successModal("Contato alterado com sucesso!");
         setCustomer(customer?.id || 0);
         setIsOpen(false);
         reset();
         setContact(null);
      } catch (e: any) {
         errorModal(e.response.data);
      }
   };

   if (!isOpen) return null;

   return (
      <ModalBackground>
         <ModalContainer $width="35rem">
            <ModalHeader>Editar contato</ModalHeader>
            <ModalForm>
               <LabelComponent>
                  Nome
                  <StyledSelect id="type" {...register("type")}>
                     <option value="">Selecione</option>
                     <option value="PHONE">Telefone</option>
                     <option value="EMAIL">E-mail</option>
                  </StyledSelect>
               </LabelComponent>
               <LabelComponent>
                  Valor
                  <StyledInput
                     placeholder="Insira o Valor"
                     id="values"
                     {...register("value")}
                  />
               </LabelComponent>
               <LabelComponent>
                  Observações
                  <StyledInput
                     placeholder="Insira as observações"
                     id="observations"
                     {...register("observations")}
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

export default ModalEditContact;
