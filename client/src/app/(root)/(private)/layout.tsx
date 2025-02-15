"use client";

import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { PROJECT_SIDEBAR_ELEMENTS, SIDEBAR_ELEMENTS } from "@/lib/lists";
import { useParams, usePathname } from "next/navigation";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let ELEMENTS;

  const path = usePathname();
  const { projectId } = useParams();

  if (projectId) {
    ELEMENTS = PROJECT_SIDEBAR_ELEMENTS;
  } else {
    ELEMENTS = SIDEBAR_ELEMENTS;
  }

  return (
    <>
      <section className="flex justify-start items-center w-full h-[80%]">
        <SidebarProvider>
          <Sidebar collapsible="icon" className="pt-20 px-4">
            {ELEMENTS.map((item) => (
              <SidebarGroup key={item.title}>
                <SidebarGroupLabel className="text-sm p-0 dark:text-neutral-600">
                  {item.title}
                </SidebarGroupLabel>
                <SidebarGroupContent className="border-l border-l-neutral-300 dark:border-l-neutral-800">
                  <SidebarMenu className="ml-2 dark:text-neutral-400">
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          className={path === item.url ? "bg-black" : ""}
                          asChild
                          isActive={path === item.url}
                        >
                          <a href={item.url} className="text-[15px]">
                            {item.title}
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </Sidebar>
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </section>
    </>
  );
}
