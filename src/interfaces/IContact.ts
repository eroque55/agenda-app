interface IContact {
   id: number;
   type: "EMAIL" | "PHONE";
   value: string;
   observations: string;
}

export default IContact;
