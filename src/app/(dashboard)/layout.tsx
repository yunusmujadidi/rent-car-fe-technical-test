import { Header } from "@/components/main/header";
import { Navbar } from "@/components/main/navbar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Navbar />
          <Header />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
