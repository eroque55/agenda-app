import Row from "../Row";
import { ListContainer } from "../List/styles";
import RowContact from "../RowContact";
import IContact from "@/src/interfaces/IContact";

interface Props {
   contacts: IContact[];
   setIsEditContactOpen: (value: boolean) => void;
}

const ListContact = ({ contacts, setIsEditContactOpen }: Props) => {
   const headerContent = ["Tipo", "Valor", "Observação"];

   return (
      <ListContainer>
         <Row content={headerContent} />
         {contacts.map((contact) => (
            <RowContact
               key={contact.id}
               contact={contact}
               setIsEditContactOpen={setIsEditContactOpen}
            />
         ))}
      </ListContainer>
   );
};

export default ListContact;
