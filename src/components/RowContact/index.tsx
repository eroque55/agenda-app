import Row from "../Row";
import { confirmationModal, IConfirmationToast } from "../Toasts";
import IContact from "@/src/interfaces/IContact";
import { deleteContact } from "@/src/services/contact.service";
import { useContactStore } from "@/src/store/ContactStore";
import { useCustomerStore } from "@/src/store/CustomerStore";

interface Props {
   contact: IContact;
   setIsEditContactOpen: (value: boolean) => void;
}

const RowContact = ({ contact, setIsEditContactOpen }: Props) => {
   const { setCustomer, customer } = useCustomerStore();
   const { setContact } = useContactStore();

   const deleteModal: IConfirmationToast = {
      title: "Excluir contato",
      message: "Deseja realmente excluir este contato?",
      notice: "Essa ação não poderá ser desfeita!",
      confirmButton: "Excluir",
      cancelButton: "Cancelar",
      succesMessage: "Contato excluído com sucesso!",
      confirmAction: async () => {
         await deleteContact(contact.id);
         await setCustomer(customer?.id || 0);
      },
   };

   const handleDelete = () => confirmationModal(deleteModal);
   const handleEdit = () => {
      setContact(contact);
      setIsEditContactOpen(true);
   };

   const contactType = contact.type === "EMAIL" ? "E-mail" : "Telefone";

   const collumns = [contactType, contact.value, contact.observations || "-"];

   return (
      <Row
         content={collumns}
         actions={[
            { name: "EditGrayIcon", onClick: handleEdit },
            { name: "TrashIcon", onClick: handleDelete },
         ]}
      ></Row>
   );
};

export default RowContact;
