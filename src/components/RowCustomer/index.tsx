import ICustomer from "@/src/interfaces/ICustomer";
import Row from "../Row";
import { useRouter } from "next/navigation";
import { formatCpf } from "@/src/utils";
import { deleteCustomer } from "@/src/services/customer.service";
import { confirmationModal, IConfirmationToast } from "../Toasts";
import { useCustomersStore } from "@/src/store/CustomerStore";

interface Props {
   customer: ICustomer;
}

const RowCustomer = ({ customer }: Props) => {
   const { setCustomers } = useCustomersStore();
   const router = useRouter();

   const deleteModal: IConfirmationToast = {
      title: "Excluir cliente",
      message: "Deseja realmente excluir este cliente?",
      notice: "Essa ação não poderá ser desfeita!",
      confirmButton: "Excluir",
      cancelButton: "Cancelar",
      succesMessage: "Cliente excluído com sucesso!",
      confirmAction: async () => {
         await deleteCustomer(customer.id);
         await setCustomers();
      },
   };

   const handleDelete = () => confirmationModal(deleteModal);
   const handleView = (id: number) => router.push(`/customer/${id}`);

   const birthday = customer.birthday
      ? new Date(customer.birthday).toLocaleDateString()
      : "-";

   const collumns = [
      customer.name,
      formatCpf(customer.cpf),
      birthday,
      customer.address || "-",
   ];

   return (
      <Row
         content={collumns}
         actions={[
            { name: "TrashIcon", onClick: handleDelete },
            { name: "EyeIcon", onClick: () => handleView(customer.id) },
         ]}
      ></Row>
   );
};

export default RowCustomer;
