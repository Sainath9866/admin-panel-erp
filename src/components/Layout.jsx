import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "./ThemeProvider";

export function Layout({ children }) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="fmcg-erp-theme">
      <SidebarProvider defaultOpen={true}>
        <div className="min-h-screen flex w-full bg-background">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <TopNavbar />
            <main className="flex-1 p-6 overflow-auto bg-background">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}