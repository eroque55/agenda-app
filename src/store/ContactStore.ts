import { create } from "zustand";

import IContact from "../interfaces/IContact";

interface ContactStore {
   contact: IContact | null;
   setContact: (contact: IContact | null) => void;
}

export const useContactStore = create<ContactStore>((set) => ({
   contact: null,
   setContact(contact) {
      set({ contact });
   },
}));
