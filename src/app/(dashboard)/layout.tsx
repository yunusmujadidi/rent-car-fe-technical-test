import { Navbar } from "@/components/main/navbar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-provider";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Navbar />
          {children}
        </SidebarInset>
      </SidebarProvider>
      <ModalProvider />
    </>
  );
};

export default DashboardLayout;
