import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Package, AlertTriangle, TrendingUp, BarChart3, Search, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const inventoryStats = [
    {
        title: "Total Stock Value",
        value: "₹45,67,890",
        change: "+5.2%",
        trend: "up",
        description: "Across all warehouses"
    },
    {
        title: "Low Stock Items",
        value: "23",
        change: "+3",
        trend: "alert",
        description: "Require immediate reorder"
    },
    {
        title: "Active SKUs",
        value: "1,247",
        change: "+12",
        trend: "up",
        description: "In current catalog"
    },
    {
        title: "Expiring Soon",
        value: "8",
        change: "0",
        trend: "alert",
        description: "Items expire within 30 days"
    }
];
const lowStockItems = [
    {
        sku: "SKU-001",
        name: "Maggi 2-Minute Noodles 70g",
        currentStock: 45,
        minLevel: 100,
        maxLevel: 500,
        warehouse: "Warehouse A",
        status: "Critical",
        lastRestocked: "5 days ago"
    },
    {
        sku: "SKU-045",
        name: "Britannia Good Day Biscuits",
        currentStock: 78,
        minLevel: 150,
        maxLevel: 600,
        warehouse: "Warehouse B",
        status: "Low",
        lastRestocked: "3 days ago"
    },
    {
        sku: "SKU-089",
        name: "Coca-Cola 600ml",
        currentStock: 120,
        minLevel: 200,
        maxLevel: 800,
        warehouse: "Warehouse A",
        status: "Low",
        lastRestocked: "2 days ago"
    },
    {
        sku: "SKU-156",
        name: "Parle-G Biscuits 100g",
        currentStock: 25,
        minLevel: 80,
        maxLevel: 400,
        warehouse: "Warehouse C",
        status: "Critical",
        lastRestocked: "7 days ago"
    }
];
const expiringItems = [
    {
        sku: "SKU-234",
        name: "Amul Fresh Milk 1L",
        batch: "BATCH001",
        quantity: 45,
        expiryDate: "2024-01-25",
        daysToExpiry: 5,
        warehouse: "Warehouse A",
        mrp: "₹65"
    },
    {
        sku: "SKU-567",
        name: "Bread - White Sandwich",
        batch: "BATCH045",
        quantity: 28,
        expiryDate: "2024-01-22",
        daysToExpiry: 2,
        warehouse: "Warehouse B",
        mrp: "₹35"
    },
    {
        sku: "SKU-890",
        name: "Yogurt - Mixed Fruit 100g",
        batch: "BATCH078",
        quantity: 67,
        expiryDate: "2024-01-28",
        daysToExpiry: 8,
        warehouse: "Warehouse A",
        mrp: "₹25"
    }
];
export default function Inventory() {
    const [searchTerm, setSearchTerm] = useState("");
    const getStockStatus = (current, min, max)=>{
        const percentage = current / max * 100;
        if (current <= min) return {
            status: "Critical",
            variant: "destructive",
            percentage
        };
        if (current <= min * 1.5) return {
            status: "Low",
            variant: "warning",
            percentage
        };
        return {
            status: "Normal",
            variant: "success",
            percentage
        };
    };
    const getExpiryStatus = (days)=>{
        if (days <= 3) return {
            status: "Critical",
            variant: "destructive"
        };
        if (days <= 7) return {
            status: "Warning",
            variant: "warning"
        };
        return {
            status: "Normal",
            variant: "info"
        };
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
                                children: "Inventory Management"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "text-muted-foreground",
                                children: "Monitor stock levels, track batches, and manage warehouse operations"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "flex space-x-2",
                        children: [
                            /*#__PURE__*/ _jsxs(Button, {
                                variant: "outline",
                                children: [
                                    /*#__PURE__*/ _jsx(BarChart3, {
                                        className: "mr-2 h-4 w-4"
                                    }),
                                    "Stock Reports"
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(Button, {
                                children: [
                                    /*#__PURE__*/ _jsx(Plus, {
                                        className: "mr-2 h-4 w-4"
                                    }),
                                    "Stock Entry"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: inventoryStats.map((stat, index)=>/*#__PURE__*/ _jsxs(Card, {
                        className: "kpi-card",
                        children: [
                            /*#__PURE__*/ _jsxs(CardHeader, {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ _jsx(CardTitle, {
                                        className: "text-sm font-medium",
                                        children: stat.title
                                    }),
                                    stat.trend === 'alert' ? /*#__PURE__*/ _jsx(AlertTriangle, {
                                        className: "h-4 w-4 text-warning"
                                    }) : /*#__PURE__*/ _jsx(Package, {
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
                                        className: "flex items-center space-x-1 text-xs",
                                        children: [
                                            stat.trend === 'up' && /*#__PURE__*/ _jsx(TrendingUp, {
                                                className: "h-3 w-3 text-success"
                                            }),
                                            stat.trend === 'alert' && /*#__PURE__*/ _jsx(AlertTriangle, {
                                                className: "h-3 w-3 text-warning"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                className: stat.trend === 'up' ? 'text-success' : stat.trend === 'alert' ? 'text-warning' : 'text-muted-foreground',
                                                children: stat.change
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "text-muted-foreground",
                                                children: stat.description
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
                            /*#__PURE__*/ _jsx("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ _jsx(Search, {
                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                                        }),
                                        /*#__PURE__*/ _jsx(Input, {
                                            placeholder: "Search by SKU, product name, batch number...",
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
                                                "Warehouse"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs(DropdownMenuContent, {
                                        children: [
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "All Warehouses"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "Warehouse A"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "Warehouse B"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "Warehouse C"
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
                                            variant: "outline",
                                            children: [
                                                /*#__PURE__*/ _jsx(Filter, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Category"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ _jsxs(DropdownMenuContent, {
                                        children: [
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "All Categories"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "Food & Beverages"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "Personal Care"
                                            }),
                                            /*#__PURE__*/ _jsx(DropdownMenuItem, {
                                                children: "Home Care"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsxs(Card, {
                className: "erp-card",
                children: [
                    /*#__PURE__*/ _jsx(CardHeader, {
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    children: [
                                        /*#__PURE__*/ _jsxs(CardTitle, {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ _jsx(AlertTriangle, {
                                                    className: "mr-2 h-5 w-5 text-warning"
                                                }),
                                                "Low Stock Alerts"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(CardDescription, {
                                            children: "Items that need immediate restocking"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(Button, {
                                    variant: "outline",
                                    size: "sm",
                                    children: "Generate Purchase Order"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(CardContent, {
                        children: /*#__PURE__*/ _jsxs(Table, {
                            children: [
                                /*#__PURE__*/ _jsx(TableHeader, {
                                    children: /*#__PURE__*/ _jsxs(TableRow, {
                                        children: [
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "SKU"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Product Name"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Current Stock"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Stock Level"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Warehouse"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Status"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Last Restocked"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Actions"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx(TableBody, {
                                    children: lowStockItems.map((item, index)=>{
                                        const stockInfo = getStockStatus(item.currentStock, item.minLevel, item.maxLevel);
                                        return /*#__PURE__*/ _jsxs(TableRow, {
                                            children: [
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    className: "font-medium",
                                                    children: item.sku
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: item.name
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        children: [
                                                            /*#__PURE__*/ _jsxs("p", {
                                                                className: "font-medium",
                                                                children: [
                                                                    item.currentStock,
                                                                    " units"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx(Progress, {
                                                                value: stockInfo.percentage,
                                                                className: "h-1 mt-1"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs(TableCell, {
                                                    className: "text-sm text-muted-foreground",
                                                    children: [
                                                        "Min: ",
                                                        item.minLevel,
                                                        " / Max: ",
                                                        item.maxLevel
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: item.warehouse
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: /*#__PURE__*/ _jsx(Badge, {
                                                        variant: stockInfo.variant,
                                                        className: "status-indicator",
                                                        children: stockInfo.status
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    className: "text-sm text-muted-foreground",
                                                    children: item.lastRestocked
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsx(Button, {
                                                                variant: "ghost",
                                                                size: "sm",
                                                                children: "Reorder"
                                                            }),
                                                            /*#__PURE__*/ _jsx(Button, {
                                                                variant: "ghost",
                                                                size: "sm",
                                                                children: "View"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, index);
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Card, {
                className: "erp-card",
                children: [
                    /*#__PURE__*/ _jsx(CardHeader, {
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    children: [
                                        /*#__PURE__*/ _jsxs(CardTitle, {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ _jsx(AlertTriangle, {
                                                    className: "mr-2 h-5 w-5 text-destructive"
                                                }),
                                                "Expiring Items"
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(CardDescription, {
                                            children: "Products approaching expiry date"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(Button, {
                                    variant: "outline",
                                    size: "sm",
                                    children: "Clearance Sale"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(CardContent, {
                        children: /*#__PURE__*/ _jsxs(Table, {
                            children: [
                                /*#__PURE__*/ _jsx(TableHeader, {
                                    children: /*#__PURE__*/ _jsxs(TableRow, {
                                        children: [
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "SKU"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Product Name"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Batch"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Quantity"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Expiry Date"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Days Left"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Warehouse"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "MRP"
                                            }),
                                            /*#__PURE__*/ _jsx(TableHead, {
                                                children: "Actions"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx(TableBody, {
                                    children: expiringItems.map((item, index)=>{
                                        const expiryInfo = getExpiryStatus(item.daysToExpiry);
                                        return /*#__PURE__*/ _jsxs(TableRow, {
                                            children: [
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    className: "font-medium",
                                                    children: item.sku
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: item.name
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: /*#__PURE__*/ _jsx(Badge, {
                                                        variant: "outline",
                                                        children: item.batch
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs(TableCell, {
                                                    children: [
                                                        item.quantity,
                                                        " units"
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: item.expiryDate
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: /*#__PURE__*/ _jsxs(Badge, {
                                                        variant: expiryInfo.variant,
                                                        className: "status-indicator",
                                                        children: [
                                                            item.daysToExpiry,
                                                            " days"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: item.warehouse
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    className: "font-medium",
                                                    children: item.mrp
                                                }),
                                                /*#__PURE__*/ _jsx(TableCell, {
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsx(Button, {
                                                                variant: "ghost",
                                                                size: "sm",
                                                                children: "Discount"
                                                            }),
                                                            /*#__PURE__*/ _jsx(Button, {
                                                                variant: "ghost",
                                                                size: "sm",
                                                                children: "Transfer"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, index);
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
