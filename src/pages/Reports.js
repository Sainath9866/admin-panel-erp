import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FileText, Download, Calendar, Filter, BarChart3, PieChart, TrendingUp, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const reportCategories = [
    {
        title: "Financial Reports",
        description: "Accounting and financial statements",
        icon: Calculator,
        reports: [
            {
                name: "Trial Balance",
                description: "Account balances verification",
                lastGenerated: "Today",
                format: "PDF"
            },
            {
                name: "Profit & Loss",
                description: "Income and expenses statement",
                lastGenerated: "Yesterday",
                format: "Excel"
            },
            {
                name: "Balance Sheet",
                description: "Assets and liabilities",
                lastGenerated: "2 days ago",
                format: "PDF"
            },
            {
                name: "Cash Flow Statement",
                description: "Cash inflows and outflows",
                lastGenerated: "3 days ago",
                format: "Excel"
            },
            {
                name: "Bank Reconciliation",
                description: "Bank account reconciliation",
                lastGenerated: "Today",
                format: "PDF"
            }
        ]
    },
    {
        title: "Inventory Reports",
        description: "Stock and warehouse analytics",
        icon: BarChart3,
        reports: [
            {
                name: "Stock Summary",
                description: "Current stock across warehouses",
                lastGenerated: "Today",
                format: "Excel"
            },
            {
                name: "Batch-wise Report",
                description: "Batch expiry and tracking",
                lastGenerated: "Today",
                format: "PDF"
            },
            {
                name: "Item Movement",
                description: "Product sales and purchase history",
                lastGenerated: "Yesterday",
                format: "Excel"
            },
            {
                name: "Reorder Report",
                description: "Items below minimum level",
                lastGenerated: "Today",
                format: "PDF"
            },
            {
                name: "ABC Analysis",
                description: "Product performance classification",
                lastGenerated: "1 week ago",
                format: "Excel"
            }
        ]
    },
    {
        title: "Sales & Purchase Reports",
        description: "Transaction and performance analysis",
        icon: TrendingUp,
        reports: [
            {
                name: "Route-wise Sales",
                description: "Sales performance by territory",
                lastGenerated: "Today",
                format: "Excel"
            },
            {
                name: "Customer Outstanding",
                description: "Pending receivables report",
                lastGenerated: "Today",
                format: "PDF"
            },
            {
                name: "Supplier Payment History",
                description: "Vendor payment tracking",
                lastGenerated: "Yesterday",
                format: "Excel"
            },
            {
                name: "Salesman Performance",
                description: "Individual sales targets",
                lastGenerated: "Today",
                format: "PDF"
            },
            {
                name: "Product Performance",
                description: "Top selling items analysis",
                lastGenerated: "Yesterday",
                format: "Excel"
            }
        ]
    },
    {
        title: "Target & Incentive Reports",
        description: "Performance and commission tracking",
        icon: PieChart,
        reports: [
            {
                name: "Monthly Targets",
                description: "Sales targets vs achievements",
                lastGenerated: "Today",
                format: "Excel"
            },
            {
                name: "Brand-wise Performance",
                description: "Brand category analysis",
                lastGenerated: "Yesterday",
                format: "PDF"
            },
            {
                name: "Incentive Calculations",
                description: "Commission and bonuses",
                lastGenerated: "2 days ago",
                format: "Excel"
            },
            {
                name: "Territory Analysis",
                description: "Geographic performance metrics",
                lastGenerated: "3 days ago",
                format: "PDF"
            }
        ]
    }
];
const quickStats = [
    {
        title: "Reports Generated Today",
        value: "24",
        description: "Across all categories",
        trend: "+15%"
    },
    {
        title: "Scheduled Reports",
        value: "12",
        description: "Auto-generated reports",
        trend: "3 pending"
    },
    {
        title: "Report Storage",
        value: "2.4 GB",
        description: "Total storage used",
        trend: "78% of limit"
    },
    {
        title: "Export Formats",
        value: "PDF, Excel",
        description: "Available formats",
        trend: "CSV coming soon"
    }
];
const recentReports = [
    {
        name: "Daily Sales Summary",
        category: "Sales Report",
        generatedBy: "System Auto",
        generatedAt: "09:00 AM",
        size: "2.4 MB",
        format: "Excel",
        status: "Ready"
    },
    {
        name: "Stock Valuation Report",
        category: "Inventory Report",
        generatedBy: "Admin User",
        generatedAt: "08:45 AM",
        size: "1.8 MB",
        format: "PDF",
        status: "Ready"
    },
    {
        name: "Customer Outstanding",
        category: "Financial Report",
        generatedBy: "Accounts Team",
        generatedAt: "08:30 AM",
        size: "890 KB",
        format: "Excel",
        status: "Ready"
    },
    {
        name: "Expiry Alert Report",
        category: "Inventory Report",
        generatedBy: "System Auto",
        generatedAt: "07:00 AM",
        size: "456 KB",
        format: "PDF",
        status: "Ready"
    }
];
export default function Reports() {
    const [selectedCategory, setSelectedCategory] = useState("All");
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
                                children: "Reports & Analytics"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "text-muted-foreground",
                                children: "Generate, view and analyze business reports across all modules"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "flex space-x-2",
                        children: [
                            /*#__PURE__*/ _jsxs(Button, {
                                variant: "outline",
                                children: [
                                    /*#__PURE__*/ _jsx(Calendar, {
                                        className: "mr-2 h-4 w-4"
                                    }),
                                    "Schedule Report"
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(Button, {
                                children: [
                                    /*#__PURE__*/ _jsx(FileText, {
                                        className: "mr-2 h-4 w-4"
                                    }),
                                    "Custom Report"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: quickStats.map((stat, index)=>/*#__PURE__*/ _jsxs(Card, {
                        className: "kpi-card",
                        children: [
                            /*#__PURE__*/ _jsxs(CardHeader, {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ _jsx(CardTitle, {
                                        className: "text-sm font-medium",
                                        children: stat.title
                                    }),
                                    /*#__PURE__*/ _jsx(FileText, {
                                        className: "h-4 w-4 text-muted-foreground"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(CardContent, {
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "text-2xl font-bold",
                                        children: stat.value
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: stat.description
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-xs text-primary font-medium",
                                                children: stat.trend
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ _jsx(Card, {
                className: "erp-card",
                children: /*#__PURE__*/ _jsx(CardContent, {
                    className: "pt-6",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "flex gap-4 items-center",
                        children: [
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
                                                "Category: ",
                                                selectedCategory
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs(DropdownMenuContent, {
                                        children: [
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                onClick: ()=>setSelectedCategory("All"),
                                                children: "All Categories"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                onClick: ()=>setSelectedCategory("Financial"),
                                                children: "Financial Reports"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                onClick: ()=>setSelectedCategory("Inventory"),
                                                children: "Inventory Reports"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                onClick: ()=>setSelectedCategory("Sales"),
                                                children: "Sales Reports"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(Button, {
                                variant: "outline",
                                children: [
                                    /*#__PURE__*/ _jsx(Calendar, {
                                        className: "mr-2 h-4 w-4"
                                    }),
                                    "Date Range"
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(Button, {
                                variant: "outline",
                                children: [
                                    /*#__PURE__*/ _jsx(Download, {
                                        className: "mr-2 h-4 w-4"
                                    }),
                                    "Bulk Export"
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: reportCategories.map((category, index)=>/*#__PURE__*/ _jsxs(Card, {
                        className: "erp-card",
                        children: [
                            /*#__PURE__*/ _jsx(CardHeader, {
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ _jsx(category.icon, {
                                            className: "h-5 w-5 text-primary"
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            children: [
                                                /*#__PURE__*/ _jsx(CardTitle, {
                                                    children: category.title
                                                }),
                                                /*#__PURE__*/ _jsx(CardDescription, {
                                                    children: category.description
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx(CardContent, {
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "space-y-3",
                                    children: category.reports.map((report, reportIndex)=>/*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center justify-between p-3 bg-muted/30 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "font-medium text-sm",
                                                            children: report.name
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: report.description
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsx(Badge, {
                                                            variant: "outline",
                                                            className: "text-xs",
                                                            children: report.format
                                                        }),
                                                        /*#__PURE__*/ _jsx(Button, {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            children: /*#__PURE__*/ _jsx(Download, {
                                                                className: "h-3 w-3"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, reportIndex))
                                })
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ _jsxs(Card, {
                className: "erp-card",
                children: [
                    /*#__PURE__*/ _jsxs(CardHeader, {
                        children: [
                            /*#__PURE__*/ _jsx(CardTitle, {
                                children: "Recent Reports"
                            }),
                            /*#__PURE__*/ _jsx(CardDescription, {
                                children: "Latest generated reports and their download status"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(CardContent, {
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "space-y-4",
                            children: recentReports.map((report, index)=>/*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-center justify-between p-4 border border-border rounded-lg",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "font-medium",
                                                            children: report.name
                                                        }),
                                                        /*#__PURE__*/ _jsx(Badge, {
                                                            variant: "outline",
                                                            children: report.category
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center space-x-4 mt-1 text-sm text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            children: [
                                                                "Generated by ",
                                                                report.generatedBy
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            children: [
                                                                "at ",
                                                                report.generatedAt
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ _jsxs("span", {
                                                            children: [
                                                                "Size: ",
                                                                report.size
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ _jsx(Badge, {
                                                    variant: "outline",
                                                    children: report.format
                                                }),
                                                /*#__PURE__*/ _jsx(Badge, {
                                                    variant: "success",
                                                    className: "status-active",
                                                    children: report.status
                                                }),
                                                /*#__PURE__*/ _jsxs(Button, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    children: [
                                                        /*#__PURE__*/ _jsx(Download, {
                                                            className: "mr-2 h-3 w-3"
                                                        }),
                                                        "Download"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, index))
                        })
                    })
                ]
            })
        ]
    });
}
