import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "./ThemeProvider";
export function Layout({ children }) {
    return /*#__PURE__*/ _jsx(ThemeProvider, {
        defaultTheme: "system",
        storageKey: "fmcg-erp-theme",
        children: /*#__PURE__*/ _jsx(SidebarProvider, {
            defaultOpen: true,
            children: /*#__PURE__*/ _jsxs("div", {
                className: "min-h-screen flex w-full bg-background",
                children: [
                    /*#__PURE__*/ _jsx(Sidebar, {}),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "flex-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ _jsx(TopNavbar, {}),
                            /*#__PURE__*/ _jsx("main", {
                                className: "flex-1 p-6 overflow-auto bg-background",
                                children: children
                            })
                        ]
                    })
                ]
            })
        })
    });
}
