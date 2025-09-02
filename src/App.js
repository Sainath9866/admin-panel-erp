import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Masters from "./pages/Masters";
import Transactions from "./pages/Transactions";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import Utilities from "./pages/Utilities";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();
const App = ()=>/*#__PURE__*/ _jsx(QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ _jsx(TooltipProvider, {
            children: /*#__PURE__*/ _jsx(BrowserRouter, {
                children: /*#__PURE__*/ _jsxs(Layout, {
                    children: [
                        /*#__PURE__*/ _jsxs(Routes, {
                            children: [
                                /*#__PURE__*/ _jsx(Route, {
                                    path: "/",
                                    element: /*#__PURE__*/ _jsx(Dashboard, {})
                                }),
                                /*#__PURE__*/ _jsx(Route, {
                                    path: "/masters/*",
                                    element: /*#__PURE__*/ _jsx(Masters, {})
                                }),
                                /*#__PURE__*/ _jsx(Route, {
                                    path: "/transactions/*",
                                    element: /*#__PURE__*/ _jsx(Transactions, {})
                                }),
                                /*#__PURE__*/ _jsx(Route, {
                                    path: "/inventory/*",
                                    element: /*#__PURE__*/ _jsx(Inventory, {})
                                }),
                                /*#__PURE__*/ _jsx(Route, {
                                    path: "/reports/*",
                                    element: /*#__PURE__*/ _jsx(Reports, {})
                                }),
                                /*#__PURE__*/ _jsx(Route, {
                                    path: "/utilities/*",
                                    element: /*#__PURE__*/ _jsx(Utilities, {})
                                }),
                                /*#__PURE__*/ _jsx(Route, {
                                    path: "*",
                                    element: /*#__PURE__*/ _jsx(NotFound, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Toaster, {}),
                        /*#__PURE__*/ _jsx(Sonner, {})
                    ]
                })
            })
        })
    });
export default App;
