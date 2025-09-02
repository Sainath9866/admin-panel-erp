import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Plus, Search, Filter, FileText, Calendar, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const transactionSummary = [
    {
        title: "Today's Sales",
        value: "₹1,24,560",
        count: "23 invoices",
        trend: "up",
        change: "+12%",
        color: "success"
    },
    {
        title: "Today's Purchases",
        value: "₹87,340",
        count: "8 bills",
        trend: "up",
        change: "+5%",
        color: "primary"
    },
    {
        title: "Pending Receipts",
        value: "₹2,45,890",
        count: "47 customers",
        trend: "down",
        change: "-3%",
        color: "warning"
    },
    {
        title: "Pending Payments",
        value: "₹1,87,650",
        count: "12 suppliers",
        trend: "up",
        change: "+8%",
        color: "info"
    }
];
const recentTransactions = [
    {
        id: "INV-2024-001",
        type: "Sales Invoice",
        customer: "ABC Retail Store",
        amount: "₹15,670",
        status: "Completed",
        date: "2024-01-15",
        time: "10:30 AM"
    },
    {
        id: "BILL-2024-045",
        type: "Purchase Bill",
        customer: "Nestle India Ltd",
        amount: "₹45,890",
        status: "Pending Approval",
        date: "2024-01-15",
        time: "09:15 AM"
    },
    {
        id: "RCP-2024-089",
        type: "Payment Receipt",
        customer: "XYZ Supermarket",
        amount: "₹22,450",
        status: "Completed",
        date: "2024-01-14",
        time: "04:20 PM"
    },
    {
        id: "PAY-2024-034",
        type: "Supplier Payment",
        customer: "Hindustan Unilever",
        amount: "₹78,920",
        status: "Processing",
        date: "2024-01-14",
        time: "02:10 PM"
    },
    {
        id: "JV-2024-012",
        type: "Journal Voucher",
        customer: "Stock Adjustment",
        amount: "₹5,680",
        status: "Completed",
        date: "2024-01-14",
        time: "11:45 AM"
    }
];
const quickActions = [
    {
        title: "Cash Sale",
        description: "Record immediate sale",
        icon: "💰"
    },
    {
        title: "Credit Sale",
        description: "Create invoice for credit",
        icon: "📄"
    },
    {
        title: "Cash Purchase",
        description: "Record supplier purchase",
        icon: "🛒"
    },
    {
        title: "Payment Entry",
        description: "Record supplier payment",
        icon: "💳"
    },
    {
        title: "Receipt Entry",
        description: "Record customer payment",
        icon: "🧾"
    },
    {
        title: "Stock Transfer",
        description: "Move items between warehouses",
        icon: "📦"
    }
];
export default function Transactions() {
    const [searchTerm, setSearchTerm] = useState("");
    const getStatusVariant = (status)=>{
        switch(status){
            case 'Completed':
                return 'success';
            case 'Pending Approval':
                return 'warning';
            case 'Processing':
                return 'info';
            default:
                return 'secondary';
        }
    };
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
                                children: "Transactions"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "text-muted-foreground",
                                children: "Manage all sales, purchase, payment and receipt transactions"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(DropdownMenu, {
                        children: [
                            /*#__PURE__*/ _jsx(DropdownMenuTrigger, {
                                asChild: true,
                                children: /*#__PURE__*/ _jsxs(Button, {
                                    children: [
                                        /*#__PURE__*/ _jsx(Plus, {
                                            className: "mr-2 h-4 w-4"
                                        }),
                                        "New Transaction"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsxs(DropdownMenuContent, {
                                children: [
                                    /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                        children: "Cash Sale"
                                    }),
                                    /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                        children: "Credit Sale"
                                    }),
                                    /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                        children: "Purchase Entry"
                                    }),
                                    /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                        children: "Payment Entry"
                                    }),
                                    /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                        children: "Receipt Entry"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: transactionSummary.map((item, index)=>/*#__PURE__*/ _jsxs(Card, {
                        className: "kpi-card",
                        children: [
                            /*#__PURE__*/ _jsxs(CardHeader, {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ _jsx(CardTitle, {
                                        className: "text-sm font-medium",
                                        children: item.title
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
                                        children: item.value
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: item.count
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center space-x-1 text-xs",
                                                children: [
                                                    item.trend === 'up' ? /*#__PURE__*/ _jsx(TrendingUp, {
                                                        className: "h-3 w-3 text-success"
                                                    }) : /*#__PURE__*/ _jsx(TrendingDown, {
                                                        className: "h-3 w-3 text-destructive"
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: item.trend === 'up' ? 'text-success' : 'text-destructive',
                                                        children: item.change
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
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
                                children: "Quick Actions"
                            }),
                            /*#__PURE__*/ _jsx(CardDescription, {
                                children: "Frequently used transaction entries"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(CardContent, {
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",
                            children: quickActions.map((action, index)=>/*#__PURE__*/ _jsxs(Button, {
                                    variant: "outline",
                                    className: "h-20 flex flex-col items-center justify-center space-y-2 hover:shadow-medium transition-all",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "text-2xl",
                                            children: action.icon
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-sm font-medium",
                                                    children: action.title
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: action.description
                                                })
                                            ]
                                        })
                                    ]
                                }, index))
                        })
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
                                            placeholder: "Search by invoice number, customer, amount...",
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
                                                children: "All Transactions"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "Sales"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "Purchase"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "Payments"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "Receipts"
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
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsxs(Card, {
                className: "erp-card",
                children: [
                    /*#__PURE__*/ _jsxs(CardHeader, {
                        children: [
                            /*#__PURE__*/ _jsx(CardTitle, {
                                children: "Recent Transactions"
                            }),
                            /*#__PURE__*/ _jsx(CardDescription, {
                                children: "Latest transaction entries and their status"
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
                                                children: "Transaction ID"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Type"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Customer/Supplier"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Amount"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Status"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Date & Time"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Actions"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx(TableBody, {
                                    children: recentTransactions.map((transaction, index)=>/*#__PURE__*/ _jsxs(TableRow, {
                                            children: [
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    className: "font-medium",
                                                    children: transaction.id
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: /*#__PURE__*/ _jsx(Badge, {
                                                        variant: "outline",
                                                        children: transaction.type
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: transaction.customer
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    className: "font-medium",
                                                    children: transaction.amount
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: /*#__PURE__*/ _jsx(Badge, {
                                                        variant: getStatusVariant(transaction.status),
                                                        className: "status-indicator",
                                                        children: transaction.status
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "text-sm",
                                                                children: transaction.date
                                                            }),
                                                            /*#__PURE__*/ _jsx("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: transaction.time
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
                                                                children: "View"
                                                            }),
                                                            /*#__PURE__*/ _jsx(Button, {
                                                                variant: "ghost",
                                                                size: "sm",
                                                                children: "Edit"
                                                            }),
                                                            /*#__PURE__*/ _jsx(Button, {
                                                                variant: "ghost",
                                                                size: "sm",
                                                                children: "Print"
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
