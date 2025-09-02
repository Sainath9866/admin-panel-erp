import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TrendingUp, ShoppingCart, Users, AlertTriangle, DollarSign, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const kpiCards = [
    {
        title: "Total Sales",
        value: "₹12,45,678",
        change: "+12.5%",
        period: "This Month",
        icon: TrendingUp,
        color: "text-success"
    },
    {
        title: "Purchases",
        value: "₹8,92,340",
        change: "-3.2%",
        period: "This Month",
        icon: ShoppingCart,
        color: "text-destructive"
    },
    {
        title: "Customers",
        value: "1,234",
        change: "+8.1%",
        period: "Active",
        icon: Users,
        color: "text-success"
    },
    {
        title: "Low Stock",
        value: "23",
        change: "",
        period: "Items",
        icon: AlertTriangle,
        color: "text-warning"
    },
    {
        title: "Receivables",
        value: "₹3,45,000",
        change: "-5.2%",
        period: "Outstanding",
        icon: DollarSign,
        color: "text-destructive"
    },
    {
        title: "Payables",
        value: "₹2,10,000",
        change: "+7.8%",
        period: "Due",
        icon: DollarSign,
        color: "text-success"
    }
];
const recentTransactions = [
    {
        id: "INV-2024-001",
        customer: "ABC Retailers",
        amount: "₹15,250",
        status: "Paid"
    },
    {
        id: "INV-2024-002",
        customer: "XYZ Store",
        amount: "₹8,940",
        status: "Pending"
    },
    {
        id: "INV-2024-003",
        customer: "Quick Shop",
        amount: "₹22,480",
        status: "Processing"
    },
    {
        id: "INV-2024-004",
        customer: "Super Bazaar",
        amount: "₹45,120",
        status: "Overdue"
    }
];
const alerts = [
    "Coca Cola 500ml - Only 12 units left",
    "Payment due from ABC Retailers - ₹15,250",
    "New order received - INV-2024-005",
    "Stock shipment delayed - Batch #B456"
];
const topProducts = [
    {
        name: "Maggi 2-Minute Noodles",
        sold: 1450,
        revenue: "₹87,000",
        growth: "+12%"
    },
    {
        name: "Britannia Good Day Biscuits",
        sold: 890,
        revenue: "₹62,300",
        growth: "+8%"
    },
    {
        name: "Coca-Cola 600ml",
        sold: 780,
        revenue: "₹54,600",
        growth: "+15%"
    },
    {
        name: "Parle-G Biscuits",
        sold: 1200,
        revenue: "₹48,000",
        growth: "+5%"
    },
    {
        name: "Amul Milk 1L",
        sold: 650,
        revenue: "₹32,500",
        growth: "+18%"
    }
];
export default function Dashboard() {
    return /*#__PURE__*/ _jsxs("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        children: [
                            /*#__PURE__*/ _jsx("h1", {
                                className: "text-3xl font-bold text-foreground",
                                children: "Dashboard"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "text-muted-foreground",
                                children: "Welcome back! Here's your business overview"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(Button, {
                        className: "bg-primary text-primary-foreground hover:bg-primary/90",
                        children: "Generate Report"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8",
                children: kpiCards.map((kpi, index)=>/*#__PURE__*/ _jsx(Card, {
                        className: "bg-card border border-border",
                        children: /*#__PURE__*/ _jsx(CardContent, {
                            className: "p-6",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: kpi.title
                                            }),
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "text-2xl font-bold",
                                                children: kpi.value
                                            }),
                                            kpi.change && /*#__PURE__*/ _jsxs("div", {
                                                className: "flex items-center space-x-1",
                                                children: [
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: `text-xs ${kpi.color}`,
                                                        children: kpi.change
                                                    }),
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: kpi.period
                                                    })
                                                ]
                                            }),
                                            !kpi.change && /*#__PURE__*/ _jsx("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: kpi.period
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx(kpi.icon, {
                                        className: `h-5 w-5 ${kpi.color || 'text-muted-foreground'}`
                                    })
                                ]
                            })
                        })
                    }, index))
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ _jsxs(Card, {
                        className: "bg-card border border-border",
                        children: [
                            /*#__PURE__*/ _jsxs(CardHeader, {
                                children: [
                                    /*#__PURE__*/ _jsxs(CardTitle, {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ _jsx(FileText, {
                                                className: "mr-2 h-5 w-5"
                                            }),
                                            "Recent Transactions"
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx(CardDescription, {
                                        children: "Latest sales, purchases, and payments"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx(CardContent, {
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "space-y-4",
                                    children: recentTransactions.map((transaction, index)=>/*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center justify-between py-2",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "flex items-center space-x-3",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "w-2 h-2 bg-success rounded-full"
                                                        }),
                                                        /*#__PURE__*/ _jsxs("div", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("p", {
                                                                    className: "text-sm font-medium",
                                                                    children: transaction.id
                                                                }),
                                                                /*#__PURE__*/ _jsx("p", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: transaction.customer
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-sm font-medium",
                                                            children: transaction.amount
                                                        }),
                                                        /*#__PURE__*/ _jsx(Badge, {
                                                            variant: transaction.status === 'Paid' ? 'default' : 'secondary',
                                                            className: "text-xs",
                                                            children: transaction.status
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, index))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Card, {
                        className: "bg-card border border-border",
                        children: [
                            /*#__PURE__*/ _jsxs(CardHeader, {
                                children: [
                                    /*#__PURE__*/ _jsxs(CardTitle, {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ _jsx(AlertTriangle, {
                                                className: "mr-2 h-5 w-5 text-warning"
                                            }),
                                            "Alerts"
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx(CardDescription, {
                                        children: "Important notifications"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx(CardContent, {
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "space-y-4",
                                    children: alerts.map((alert, index)=>/*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-start space-x-3",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-sm",
                                                    children: alert
                                                })
                                            ]
                                        }, index))
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
