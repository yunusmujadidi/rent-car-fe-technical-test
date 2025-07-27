import { create } from "zustand";

import { Order } from "@/lib/types";

type useNewOrderDialogState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

type useEditDialogDialogState = {
  isOpen: boolean;
  onOpen: (order: Order) => void;
  onClose: () => void;
  order: Order | null;
};

export const useNewOrderDialog = create<useNewOrderDialogState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export const useEditOrderDialog = create<useEditDialogDialogState>((set) => ({
  order: null,
  isOpen: false,
  onOpen: (order) => set({ isOpen: true, order }),
  onClose: () => set({ isOpen: false }),
}));
