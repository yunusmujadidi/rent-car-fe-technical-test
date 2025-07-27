import { Car } from "lucide-react";

import {
  SidebarHeader as SidebarHeaderUI,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export const SidebarHeader = () => {
  return (
    <SidebarHeaderUI>
      <SidebarMenu>
        <SidebarMenuItem>
          {/* logo and app name */}
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Car className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold text-primary">
                Rental-in Car
              </span>
              <span className="truncate text-xs">
                Rental Car Management App
              </span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeaderUI>
  );
};
