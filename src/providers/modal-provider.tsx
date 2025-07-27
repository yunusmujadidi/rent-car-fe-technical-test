import { EditCarModal } from "@/components/modal/edit-car-modal";
import { NewCarModal } from "@/components/modal/new-car-modal";
import { NewOrderModal } from "@/components/modal/new-order-modal";

export const ModalProvider = () => {
  return (
    <>
      <NewCarModal />
      <EditCarModal />
      <NewOrderModal />
      <EditCarModal />
    </>
  );
};
