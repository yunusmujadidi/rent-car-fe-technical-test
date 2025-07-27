"use client";

import { EditCarModal } from "@/components/modal/edit-car-modal";
import { EditOrderModal } from "@/components/modal/edit-order-modal";
import { NewCarModal } from "@/components/modal/new-car-modal";
import { NewOrderModal } from "@/components/modal/new-order-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NewCarModal />
      <EditCarModal />
      <NewOrderModal />
      <EditOrderModal />
    </>
  );
};
