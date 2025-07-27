import { EditCarModal } from "@/components/modal/edit-car-modal";
import { NewCarModal } from "@/components/modal/new-car-modal";

export const ModalProvider = () => {
  return (
    <>
      <NewCarModal />
      <EditCarModal />
    </>
  );
};
