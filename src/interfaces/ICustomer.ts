import IContact from "./IContact";

interface ICustomer {
   id: number;
   name: string;
   cpf: string;
   birthday: Date;
   address: string;
   contacts: IContact[];
}

export default ICustomer;
