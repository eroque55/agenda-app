import api from "./api";
import { errorModal } from "@/src/components/Toasts";
import IContact from "../interfaces/IContact";

export const getContacts = async () => {
   try {
      const response = await api.get<IContact[]>("/contacts/");
      return response.data;
   } catch (e: any) {
      errorModal(e.response.data);
   }
};

export const getContact = async (id: number) => {
   try {
      const response = await api.get<IContact>(`/contacts/${id}`);
      return response.data;
   } catch (e: any) {
      errorModal(e.response.data);
   }
};

export const createContact = async (id: number, contact: IContact) => {
   console.log(contact);
   await api.post(`/contacts/${id}`, contact);
};

export const deleteContact = async (id: number) => {
   await api.delete(`/contacts/${id}`);
};

export const editContact = async (id: number, contact: IContact) => {
   await api.put(`/contacts/${id}`, contact);
};
