import { Car } from "@/lib/types";
import { create } from "zustand";

type useNewCarDialogState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

type useEditCarDialogState = {
  isOpen: boolean;
  onOpen: (car: Car) => void;
  onClose: () => void;
  car: Car | null;
};

export const useNewCarDialog = create<useNewCarDialogState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export const useEditCarDialog = create<useEditCarDialogState>((set) => ({
  car: null,
  isOpen: false,
  onOpen: (car) => set({ isOpen: true, car }),
  onClose: () => set({ isOpen: false }),
}));
