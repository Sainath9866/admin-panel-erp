import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Settings, Bell, FileText, HardDrive, Shield, DollarSign, Globe, Scan, AlertTriangle, CheckCircle, Clock, Users, Database, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
const utilityCategories = [
    {
        title: "Alerts & Notifications",
        description: "Manage system alerts and notification settings",
        icon: Bell,
        status: "Active",
        items: [
            {
                name: "Low Stock Alerts",
                status: "Enabled",
                count: "23 active"
            },
            {
                name: "Payment Due Reminders",
                status: "Enabled",
                count: "12 scheduled"
            },
            {
                name: "Expiry Notifications",
                status: "Enabled",
                count: "8 items"
            },
            {
                name: "Sales Target Alerts",
                status: "Disabled",
                count: "0 active"
            }
        ]
    },
    {
        title: "Document Management",
        description: "Upload, organize and manage business documents",
        icon: FileText,
        status: "Active",
        items: [
            {
                name: "Invoice Attachments",
                status: "2.1 GB used",
                count: "1,247 files"
            },
            {
                name: "Vendor Documents",
                status: "890 MB used",
                count: "456 files"
            },
            {
                name: "Customer KYC",
                status: "654 MB used",
                count: "342 files"
            },
            {
                name: "Compliance Docs",
                status: "1.2 GB used",
                count: "89 files"
            }
        ]
    },
    {
        title: "Backup & Restore",
        description: "Data backup and recovery management",
        icon: HardDrive,
        status: "Healthy",
        items: [
            {
                name: "Daily Auto Backup",
                status: "Last: Today 2:00 AM",
                count: "Success"
            },
            {
                name: "Weekly Full Backup",
                status: "Last: Sunday 1:00 AM",
                count: "Success"
            },
            {
                name: "Cloud Storage",
                status: "78% used",
                count: "15.6 GB / 20 GB"
            },
            {
                name: "Recovery Points",
                status: "30 days retention",
                count: "Available"
            }
        ]
    },
    {
        title: "Audit Logs",
        description: "Track user activities and system changes",
        icon: Shield,
        status: "Monitoring",
        items: [
            {
                name: "User Login Activity",
                status: "24/7 tracking",
                count: "145 today"
            },
            {
                name: "Transaction Logs",
                status: "Real-time capture",
                count: "89 today"
            },
            {
                name: "Master Data Changes",
                status: "Change tracking",
                count: "12 today"
            },
            {
                name: "System Events",
                status: "Auto logging",
                count: "23 today"
            }
        ]
    },
    {
        title: "Budgeting & Cost Control",
        description: "Financial planning and budget management",
        icon: DollarSign,
        status: "Active",
        items: [
            {
                name: "Monthly Budgets",
                status: "Current: Jan 2024",
                count: "12 categories"
            },
            {
                name: "Expense Tracking",
                status: "Real-time monitoring",
                count: "78% utilized"
            },
            {
                name: "Cost Centers",
                status: "5 centers active",
                count: "All monitored"
            },
            {
                name: "Variance Analysis",
                status: "Weekly reports",
                count: "Auto-generated"
            }
        ]
    },
    {
        title: "Multi-Currency Support",
        description: "Handle multiple currencies and exchange rates",
        icon: Globe,
        status: "Configured",
        items: [
            {
                name: "Base Currency",
                status: "INR (Indian Rupee)",
                count: "Primary"
            },
            {
                name: "Foreign Currencies",
                status: "USD, EUR enabled",
                count: "2 active"
            },
            {
                name: "Exchange Rates",
                status: "Auto-update daily",
                count: "Live rates"
            },
            {
                name: "Currency Conversion",
                status: "Real-time calculation",
                count: "Available"
            }
        ]
    },
    {
        title: "Barcode & Scanning",
        description: "Barcode generation and scanning capabilities",
        icon: Scan,
        status: "Ready",
        items: [
            {
                name: "Product Barcodes",
                status: "1,247 generated",
                count: "All SKUs"
            },
            {
                name: "Scanner Integration",
                status: "2 devices connected",
                count: "Online"
            },
            {
                name: "Batch Scanning",
                status: "Bulk operations",
                count: "Available"
            },
            {
                name: "Mobile App Sync",
                status: "Real-time sync",
                count: "Connected"
            }
        ]
    },
    {
        title: "System Health",
        description: "Monitor system performance and health",
        icon: Settings,
        status: "Optimal",
        items: [
            {
                name: "Server Status",
                status: "Online",
                count: "99.9% uptime"
            },
            {
                name: "Database Performance",
                status: "Optimal",
                count: "<200ms queries"
            },
            {
                name: "API Response Time",
                status: "Fast",
                count: "<100ms average"
            },
            {
                name: "Storage Usage",
                status: "78% used",
                count: "15.6 GB / 20 GB"
            }
        ]
    }
];
const systemAlerts = [
    {
        type: "warning",
        title: "Storage Space Warning",
        message: "Database storage is 78% full. Consider cleanup or upgrade.",
        time: "2 hours ago",
        action: "Manage Storage"
    },
    {
        type: "info",
        title: "Backup Completed",
        message: "Daily backup completed successfully at 2:00 AM.",
        time: "6 hours ago",
        action: "View Details"
    },
    {
        type: "success",
        title: "System Update",
        message: "Security patches applied successfully. System restarted.",
        time: "1 day ago",
        action: "View Changelog"
    },
    {
        type: "warning",
        title: "Failed Login Attempts",
        message: "Multiple failed login attempts detected for user 'admin'.",
        time: "2 days ago",
        action: "Security Report"
    }
];
export default function Utilities() {
    const [notifications, setNotifications] = useState({
        email: true,
        sms: false,
        push: true,
        desktop: true
    });
    const getAlertIcon = (type)=>{
        switch(type){
            case 'warning':
                return /*#__PURE__*/ _jsx(AlertTriangle, {
                    className: "h-4 w-4 text-warning"
                });
            case 'success':
                return /*#__PURE__*/ _jsx(CheckCircle, {
                    className: "h-4 w-4 text-success"
                });
            case 'info':
                return /*#__PURE__*/ _jsx(Bell, {
                    className: "h-4 w-4 text-info"
                });
            default:
                return /*#__PURE__*/ _jsx(Clock, {
                    className: "h-4 w-4 text-muted-foreground"
                });
        }
    };
    const getStatusColor = (status)=>{
        switch(status.toLowerCase()){
            case 'active':
            case 'healthy':
            case 'optimal':
            case 'ready':
                return 'success';
            case 'monitoring':
            case 'configured':
                return 'info';
            case 'warning':
                return 'warning';
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
                                children: "Utilities & Settings"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: "text-muted-foreground",
                                children: "System configuration, monitoring, and administrative tools"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Button, {
                        children: [
                            /*#__PURE__*/ _jsx(Settings, {
                                className: "mr-2 h-4 w-4"
                            }),
                            "System Settings"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: [
                    /*#__PURE__*/ _jsxs(Card, {
                        className: "kpi-card kpi-card-success",
                        children: [
                            /*#__PURE__*/ _jsxs(CardHeader, {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ _jsx(CardTitle, {
                                        className: "text-sm font-medium",
                                        children: "System Status"
                                    }),
                                    /*#__PURE__*/ _jsx(CheckCircle, {
                                        className: "h-4 w-4"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(CardContent, {
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "text-2xl font-bold",
                                        children: "Healthy"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "text-xs opacity-80",
                                        children: "All systems operational"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Card, {
                        className: "kpi-card kpi-card-primary",
                        children: [
                            /*#__PURE__*/ _jsxs(CardHeader, {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ _jsx(CardTitle, {
                                        className: "text-sm font-medium",
                                        children: "Active Users"
                                    }),
                                    /*#__PURE__*/ _jsx(Users, {
                                        className: "h-4 w-4"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(CardContent, {
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "text-2xl font-bold",
                                        children: "23"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "text-xs opacity-80",
                                        children: "Currently online"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Card, {
                        className: "kpi-card kpi-card-warning",
                        children: [
                            /*#__PURE__*/ _jsxs(CardHeader, {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ _jsx(CardTitle, {
                                        className: "text-sm font-medium",
                                        children: "Storage Used"
                                    }),
                                    /*#__PURE__*/ _jsx(Database, {
                                        className: "h-4 w-4"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(CardContent, {
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "text-2xl font-bold",
                                        children: "78%"
                                    }),
                                    /*#__PURE__*/ _jsx(Progress, {
                                        value: 78,
                                        className: "mt-2 h-1"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "text-xs opacity-80",
                                        children: "15.6 GB / 20 GB"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs(Card, {
                        className: "kpi-card",
                        children: [
                            /*#__PURE__*/ _jsxs(CardHeader, {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ _jsx(CardTitle, {
                                        className: "text-sm font-medium",
                                        children: "API Health"
                                    }),
                                    /*#__PURE__*/ _jsx(Wifi, {
                                        className: "h-4 w-4"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(CardContent, {
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "text-2xl font-bold",
                                        children: "99.9%"
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Uptime this month"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Card, {
                className: "erp-card",
                children: [
                    /*#__PURE__*/ _jsxs(CardHeader, {
                        children: [
                            /*#__PURE__*/ _jsxs(CardTitle, {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ _jsx(Bell, {
                                        className: "mr-2 h-5 w-5"
                                    }),
                                    "System Alerts"
                                ]
                            }),
                            /*#__PURE__*/ _jsx(CardDescription, {
                                children: "Recent system notifications and alerts"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(CardContent, {
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "space-y-4",
                            children: systemAlerts.map((alert, index)=>/*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-start space-x-3 p-3 border border-border rounded-lg",
                                    children: [
                                        getAlertIcon(alert.type),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "font-medium text-sm",
                                                    children: alert.title
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: alert.message
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-xs text-muted-foreground mt-1",
                                                    children: alert.time
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Button, {
                                            variant: "outline",
                                            size: "sm",
                                            children: alert.action
                                        })
                                    ]
                                }, index))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Card, {
                className: "erp-card",
                children: [
                    /*#__PURE__*/ _jsxs(CardHeader, {
                        children: [
                            /*#__PURE__*/ _jsx(CardTitle, {
                                children: "Notification Preferences"
                            }),
                            /*#__PURE__*/ _jsx(CardDescription, {
                                children: "Configure how you receive system notifications"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(CardContent, {
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "font-medium",
                                                    children: "Email Notifications"
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Receive alerts via email"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Switch, {
                                            checked: notifications.email,
                                            onCheckedChange: (checked)=>setNotifications({
                                                    ...notifications,
                                                    email: checked
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "font-medium",
                                                    children: "SMS Alerts"
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Urgent alerts via SMS"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Switch, {
                                            checked: notifications.sms,
                                            onCheckedChange: (checked)=>setNotifications({
                                                    ...notifications,
                                                    sms: checked
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "font-medium",
                                                    children: "Push Notifications"
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Browser push notifications"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Switch, {
                                            checked: notifications.push,
                                            onCheckedChange: (checked)=>setNotifications({
                                                    ...notifications,
                                                    push: checked
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            children: [
                                                /*#__PURE__*/ _jsx("h4", {
                                                    className: "font-medium",
                                                    children: "Desktop Notifications"
                                                }),
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "System tray notifications"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Switch, {
                                            checked: notifications.desktop,
                                            onCheckedChange: (checked)=>setNotifications({
                                                    ...notifications,
                                                    desktop: checked
                                                })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: utilityCategories.map((category, index)=>/*#__PURE__*/ _jsxs(Card, {
                        className: "erp-card",
                        children: [
                            /*#__PURE__*/ _jsx(CardHeader, {
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ _jsx(category.icon, {
                                                    className: "h-5 w-5 text-primary"
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    children: [
                                                        /*#__PURE__*/ _jsx(CardTitle, {
                                                            className: "text-lg",
                                                            children: category.title
                                                        }),
                                                        /*#__PURE__*/ _jsx(CardDescription, {
                                                            children: category.description
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Badge, {
                                            variant: getStatusColor(category.status),
                                            className: "status-indicator",
                                            children: category.status
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ _jsx(CardContent, {
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "space-y-3",
                                    children: category.items.map((item, itemIndex)=>/*#__PURE__*/ _jsxs("div", {
                                            className: "flex items-center justify-between p-2 bg-muted/30 rounded",
                                            children: [
                                                /*#__PURE__*/ _jsxs("div", {
                                                    children: [
                                                        /*#__PURE__*/ _jsx("h4", {
                                                            className: "font-medium text-sm",
                                                            children: item.name
                                                        }),
                                                        /*#__PURE__*/ _jsx("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: item.status
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx(Badge, {
                                                    variant: "outline",
                                                    className: "text-xs",
                                                    children: item.count
                                                })
                                            ]
                                        }, itemIndex))
                                })
                            })
                        ]
                    }, index))
            })
        ]
    });
}
