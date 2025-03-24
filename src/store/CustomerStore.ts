import { create } from "zustand";
import ICustomer from "@/src/interfaces/ICustomer";
import { getCustomer, getCustomers } from "@/src/services/customer.service";

interface CustomersStore {
   customers: ICustomer[];
   setCustomers: (customers?: ICustomer) => void;
}

export const useCustomersStore = create<CustomersStore>((set) => ({
   customers: [],
   setCustomers: async (customer?: ICustomer) => {
      const data = await getCustomers(customer);
      set({ customers: data });
   },
}));

interface CustomerStore {
   customer: ICustomer | null;
   setCustomer: (id: number) => void;
}

export const useCustomerStore = create<CustomerStore>((set) => ({
   customer: null,
   setCustomer: async (id: number) => {
      const data = await getCustomer(id);
      data && set({ customer: data });
   },
}));
