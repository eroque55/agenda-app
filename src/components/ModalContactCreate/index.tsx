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
import { createContact } from "@/src/services/contact.service";
import { StyledSelect } from "../Select/styles";

interface Props {
   isOpen: boolean;
   setIsOpen: (value: boolean) => void;
}

const ModalCreateContact = ({ isOpen, setIsOpen }: Props) => {
   const { setCustomer, customer } = useCustomerStore();
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<IContact>({ mode: "onBlur" });

   const confModal: IConfirmationToast = {
      title: "Cancelar Cadastro",
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

   const onSubmit = async (data: IContact) => {
      try {
         if (!data.type) {
            errorModal("Selecione um tipo de contato");
            return;
         }
         await createContact(customer?.id || 0, data);
         successModal("Contato cadastrado com sucesso!");
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
            <ModalHeader>Cadastrar contato</ModalHeader>
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

export default ModalCreateContact;
