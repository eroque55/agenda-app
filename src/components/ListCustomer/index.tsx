import Row from "../Row";
import { ListContainer } from "../List/styles";
import RowCustomer from "../RowCustomer";
import { useCustomersStore } from "@/src/store/CustomerStore";

const ListCustomer = () => {
   const { customers } = useCustomersStore();
   const headerContent = ["Nome", "CPF", "Data de nascimento", "Endereço"];

   return (
      <ListContainer>
         <Row content={headerContent} />
         {customers.map((customer) => (
            <RowCustomer key={customer.id} customer={customer} />
         ))}
      </ListContainer>
   );
};

export default ListCustomer;
