import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Bell, Search, User, Settings, LogOut, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "./ThemeProvider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
export function TopNavbar() {
    const [notifications] = useState(3); // Mock notification count
    const { theme, setTheme } = useTheme();
    return /*#__PURE__*/ _jsxs("header", {
        className: "h-16 bg-card border-b border-border flex items-center justify-between px-6",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "flex items-center space-x-4 flex-1",
                children: [
                    /*#__PURE__*/ _jsx(SidebarTrigger, {
                        className: "h-9 w-9"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "flex-1 max-w-md",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ _jsx(Search, {
                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                                }),
                                /*#__PURE__*/ _jsx(Input, {
                                    placeholder: "Search customers, items, invoices...",
                                    className: "pl-10 bg-muted/30 border-border focus:bg-background transition-colors"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ _jsxs(Button, {
                        variant: "ghost",
                        size: "sm",
                        className: "relative inline-flex items-center justify-center",
                        onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
                        children: [
                            /*#__PURE__*/ _jsx(Sun, {
                                className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground"
                            }),
                            /*#__PURE__*/ _jsx(Moon, {
                                className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(DropdownMenu, {
                        children: [
                            /*#__PURE__*/ _jsx(DropdownMenuTrigger, {
                                asChild: true,
                                children: /*#__PURE__*/ _jsxs(Button, {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ _jsx(Bell, {
                                            className: "h-4 w-4"
                                        }),
                                        notifications > 0 && /*#__PURE__*/ _jsx(Badge, {
                                            variant: "destructive",
                                            className: "absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs",
                                            children: notifications
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsxs(DropdownMenuContent, {
                                align: "end",
                                className: "w-80",
                                children: [
                                    /*#__PURE__*/ _jsx(DropdownMenuLabel, {
                                        children: "Notifications"
                                    }),
                                    /*#__PURE__*/ _jsx(DropdownMenuSeparator, {}),
                                    /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                        className: "flex flex-col items-start p-3",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center justify-between w-full",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "font-medium text-sm",
                                                    children: "Coca Cola 500ml - Only 12 units left"
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "text-xs text-destructive",
                                                    children: "•"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                        className: "flex flex-col items-start p-3",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center justify-between w-full",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "font-medium text-sm",
                                                    children: "Payment reminder for ABC Retailers"
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "2h"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                        className: "flex flex-col items-start p-3",
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center justify-between w-full",
                                            children: [
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "font-medium text-sm",
                                                    children: "Stock shipment delayed"
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "1d"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(DropdownMenu, {
                        children: [
                            /*#__PURE__*/ _jsx(DropdownMenuTrigger, {
                                asChild: true,
                                children: /*#__PURE__*/ _jsxs(Button, {
                                    variant: "ghost",
                                    className: "flex items-center space-x-2 p-2",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "w-8 h-8 bg-primary rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ _jsx(User, {
                                                className: "h-4 w-4 text-primary-foreground"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "hidden md:block text-left",
                                            children: [
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-sm font-medium",
                                                    children: "Admin User"
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "admin@fmcgerp.com"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsxs(DropdownMenuContent, {
                                align: "end",
                                children: [
                                    /*#__PURE__*/ _jsx(DropdownMenuLabel, {
                                        children: "My Account"
                                    }),
                                    /*#__PURE__*/ _jsx(DropdownMenuSeparator, {}),
                                    /*#__PURE__*/ _jsxs(DropdownMenuItem, {
                                        children: [
                                            /*#__PURE__*/ _jsx(Settings, {
                                                className: "mr-2 h-4 w-4"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                children: "Settings"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs(DropdownMenuItem, {
                                        children: [
                                            /*#__PURE__*/ _jsx(User, {
                                                className: "mr-2 h-4 w-4"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                children: "Profile"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx(DropdownMenuSeparator, {}),
                                    /*#__PURE__*/ _jsxs(DropdownMenuItem, {
                                        className: "text-destructive",
                                        children: [
                                            /*#__PURE__*/ _jsx(LogOut, {
                                                className: "mr-2 h-4 w-4"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                children: "Sign out"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
