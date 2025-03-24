import ICustomer from "@/src/interfaces/ICustomer";
import api from "./api";
import { errorModal } from "@/src/components/Toasts";

export const getCustomers = async (customer?: ICustomer) => {
   try {
      const response = await api.get<ICustomer[]>("/customers/", {
         params: customer,
      });
      return response.data;
   } catch (e: any) {
      errorModal(e.response.data);
   }
};

export const getCustomer = async (id: number) => {
   try {
      const response = await api.get<ICustomer>(`/customers/${id}`);
      return response.data;
   } catch (e: any) {
      errorModal(e.response.data);
   }
};

export const createCustomer = async (customer: ICustomer) => {
   await api.post("/customers/", customer);
};

export const deleteCustomer = async (id: number) => {
   await api.delete(`/customers/${id}`);
};

export const editCustomer = async (id: number, customer: ICustomer) => {
   await api.put(`/customers/${id}`, customer);
};
