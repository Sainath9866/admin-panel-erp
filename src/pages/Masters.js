import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Plus, Search, Filter, Edit, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// Sample data for demonstration
const masterCategories = [
    {
        title: "Journal Master",
        description: "Manage all journal types and entries",
        count: 8,
        lastUpdated: "2 hours ago",
        status: "Active"
    },
    {
        title: "Ledger Master",
        description: "Chart of accounts and ledger management",
        count: 156,
        lastUpdated: "1 day ago",
        status: "Active"
    },
    {
        title: "Item Master",
        description: "Product catalog and inventory items",
        count: 1247,
        lastUpdated: "3 hours ago",
        status: "Active"
    },
    {
        title: "Customer Master",
        description: "Customer database and information",
        count: 342,
        lastUpdated: "5 hours ago",
        status: "Active"
    },
    {
        title: "Vendor Master",
        description: "Supplier and vendor management",
        count: 89,
        lastUpdated: "1 day ago",
        status: "Active"
    },
    {
        title: "Tax Master",
        description: "GST rates and tax configuration",
        count: 12,
        lastUpdated: "2 days ago",
        status: "Active"
    }
];
const recentItems = [
    {
        id: "ITEM-001",
        name: "Maggi 2-Minute Noodles 70g",
        category: "Item Master",
        hsn: "1902301",
        status: "Active",
        lastModified: "2 hours ago",
        modifiedBy: "Admin"
    },
    {
        id: "CUST-045",
        name: "ABC Retail Store",
        category: "Customer Master",
        gstin: "29ABCDE1234F1Z5",
        status: "Active",
        lastModified: "4 hours ago",
        modifiedBy: "Sales Team"
    },
    {
        id: "VEND-012",
        name: "Nestle India Ltd",
        category: "Vendor Master",
        gstin: "29NESTLE1234F1Z5",
        status: "Active",
        lastModified: "1 day ago",
        modifiedBy: "Purchase Team"
    },
    {
        id: "LED-089",
        name: "Sales Account - Electronics",
        category: "Ledger Master",
        group: "Sales Accounts",
        status: "Active",
        lastModified: "2 days ago",
        modifiedBy: "Accountant"
    }
];
export default function Masters() {
    const [searchTerm, setSearchTerm] = useState("");
    return /*#__PURE__*/ _jsxs("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        children: [
                            /*#__PURE__*/ _jsx("h1", {
                                className: "text-3xl font-bold text-foreground",
                                children: "Masters"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "text-muted-foreground",
                                children: "Manage all master data for your ERP system"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Button, {
                        children: [
                            /*#__PURE__*/ _jsx(Plus, {
                                className: "mr-2 h-4 w-4"
                            }),
                            "New Master Entry"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Card, {
                className: "erp-card",
                children: /*#__PURE__*/ _jsx(CardContent, {
                    className: "pt-6",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "flex gap-4 items-center",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ _jsx(Search, {
                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                                        }),
                                        /*#__PURE__*/ _jsx(Input, {
                                            placeholder: "Search masters by name, code, or category...",
                                            className: "pl-10",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsxs(DropdownMenu, {
                                children: [
                                    /*#__PURE__*/ _jsx(DropdownMenuTrigger, {
                                        asChild: true,
                                        children: /*#__PURE__*/ _jsxs(Button, {
                                            variant: "outline",
                                            children: [
                                                /*#__PURE__*/ _jsx(Filter, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Filter"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs(DropdownMenuContent, {
                                        children: [
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "All Categories"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "Items"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "Customers"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "Vendors"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "Ledgers"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: "Master Categories"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: masterCategories.map((category, index)=>/*#__PURE__*/ _jsxs(Card, {
                                className: "erp-card hover:shadow-medium transition-all cursor-pointer",
                                children: [
                                    /*#__PURE__*/ _jsxs(CardHeader, {
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ _jsx(CardTitle, {
                                                        className: "text-lg",
                                                        children: category.title
                                                    }),
                                                    /*#__PURE__*/ _jsxs(Badge, {
                                                        variant: "secondary",
                                                        children: [
                                                            category.count,
                                                            " items"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx(CardDescription, {
                                                children: category.description
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx(CardContent, {
                                        children: /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center justify-between text-sm text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ _jsxs("span", {
                                                    children: [
                                                        "Last updated: ",
                                                        category.lastUpdated
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx(Badge, {
                                                    variant: "success",
                                                    className: "status-active",
                                                    children: category.status
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Card, {
                className: "erp-card",
                children: [
                    /*#__PURE__*/ _jsxs(CardHeader, {
                        children: [
                            /*#__PURE__*/ _jsx(CardTitle, {
                                children: "Recently Modified Items"
                            }),
                            /*#__PURE__*/ _jsx(CardDescription, {
                                children: "Latest updates across all master categories"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(CardContent, {
                        children: /*#__PURE__*/ _jsxs(Table, {
                            children: [
                                /*#__PURE__*/ _jsx(TableHeader, {
                                    children: /*#__PURE__*/ _jsxs(TableRow, {
                                        children: [
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "ID"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Name"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Category"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Details"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Status"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Last Modified"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Actions"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx(TableBody, {
                                    children: recentItems.map((item, index)=>/*#__PURE__*/ _jsxs(TableRow, {
                                            children: [
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    className: "font-medium",
                                                    children: item.id
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: item.name
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: /*#__PURE__*/ _jsx(Badge, {
                                                        variant: "outline",
                                                        children: item.category
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs(TableCell, {
                                                    className: "text-sm text-muted-foreground",
                                                    children: [
                                                        item.hsn && `HSN: ${item.hsn}`,
                                                        item.gstin && `GSTIN: ${item.gstin}`,
                                                        item.group && `Group: ${item.group}`
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: /*#__PURE__*/ _jsx(Badge, {
                                                        variant: "success",
                                                        className: "status-active",
                                                        children: item.status
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "text-sm",
                                                                children: item.lastModified
                                                            }),
                                                            /*#__PURE__*/ _jsxs("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: [
                                                                    "by ",
                                                                    item.modifiedBy
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsx(Button, {
                                                                variant: "ghost",
                                                                size: "sm",
                                                                children: /*#__PURE__*/ _jsx(Eye, {
                                                                    className: "h-4 w-4"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx(Button, {
                                                                variant: "ghost",
                                                                size: "sm",
                                                                children: /*#__PURE__*/ _jsx(Edit, {
                                                                    className: "h-4 w-4"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx(Button, {
                                                                variant: "ghost",
                                                                size: "sm",
                                                                className: "text-destructive hover:text-destructive",
                                                                children: /*#__PURE__*/ _jsx(Trash2, {
                                                                    className: "h-4 w-4"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, index))
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
