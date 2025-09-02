import { useState } from "react";
import { 
  Settings, 
  Bell, 
  FileText, 
  HardDrive, 
  Shield, 
  DollarSign, 
  Globe, 
  Scan,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  Database,
  Wifi
} from "lucide-react";
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
      { name: "Low Stock Alerts", status: "Enabled", count: "23 active" },
      { name: "Payment Due Reminders", status: "Enabled", count: "12 scheduled" },
      { name: "Expiry Notifications", status: "Enabled", count: "8 items" },
      { name: "Sales Target Alerts", status: "Disabled", count: "0 active" }
    ]
  },
  {
    title: "Document Management",
    description: "Upload, organize and manage business documents", 
    icon: FileText,
    status: "Active",
    items: [
      { name: "Invoice Attachments", status: "2.1 GB used", count: "1,247 files" },
      { name: "Vendor Documents", status: "890 MB used", count: "456 files" },
      { name: "Customer KYC", status: "654 MB used", count: "342 files" },
      { name: "Compliance Docs", status: "1.2 GB used", count: "89 files" }
    ]
  },
  {
    title: "Backup & Restore",
    description: "Data backup and recovery management",
    icon: HardDrive,
    status: "Healthy",
    items: [
      { name: "Daily Auto Backup", status: "Last: Today 2:00 AM", count: "Success" },
      { name: "Weekly Full Backup", status: "Last: Sunday 1:00 AM", count: "Success" },
      { name: "Cloud Storage", status: "78% used", count: "15.6 GB / 20 GB" },
      { name: "Recovery Points", status: "30 days retention", count: "Available" }
    ]
  },
  {
    title: "Audit Logs",
    description: "Track user activities and system changes",
    icon: Shield,
    status: "Monitoring",
    items: [
      { name: "User Login Activity", status: "24/7 tracking", count: "145 today" },
      { name: "Transaction Logs", status: "Real-time capture", count: "89 today" },
      { name: "Master Data Changes", status: "Change tracking", count: "12 today" },
      { name: "System Events", status: "Auto logging", count: "23 today" }
    ]
  },
  {
    title: "Budgeting & Cost Control", 
    description: "Financial planning and budget management",
    icon: DollarSign,
    status: "Active",
    items: [
      { name: "Monthly Budgets", status: "Current: Jan 2024", count: "12 categories" },
      { name: "Expense Tracking", status: "Real-time monitoring", count: "78% utilized" },
      { name: "Cost Centers", status: "5 centers active", count: "All monitored" },
      { name: "Variance Analysis", status: "Weekly reports", count: "Auto-generated" }
    ]
  },
  {
    title: "Multi-Currency Support",
    description: "Handle multiple currencies and exchange rates",
    icon: Globe,
    status: "Configured", 
    items: [
      { name: "Base Currency", status: "INR (Indian Rupee)", count: "Primary" },
      { name: "Foreign Currencies", status: "USD, EUR enabled", count: "2 active" },
      { name: "Exchange Rates", status: "Auto-update daily", count: "Live rates" },
      { name: "Currency Conversion", status: "Real-time calculation", count: "Available" }
    ]
  },
  {
    title: "Barcode & Scanning",
    description: "Barcode generation and scanning capabilities",
    icon: Scan, 
    status: "Ready",
    items: [
      { name: "Product Barcodes", status: "1,247 generated", count: "All SKUs" },
      { name: "Scanner Integration", status: "2 devices connected", count: "Online" },
      { name: "Batch Scanning", status: "Bulk operations", count: "Available" },
      { name: "Mobile App Sync", status: "Real-time sync", count: "Connected" }
    ]
  },
  {
    title: "System Health", 
    description: "Monitor system performance and health",
    icon: Settings,
    status: "Optimal",
    items: [
      { name: "Server Status", status: "Online", count: "99.9% uptime" },
      { name: "Database Performance", status: "Optimal", count: "<200ms queries" },
      { name: "API Response Time", status: "Fast", count: "<100ms average" },
      { name: "Storage Usage", status: "78% used", count: "15.6 GB / 20 GB" }
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

  const getAlertIcon = (type) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="h-4 w-4 text-warning" />;
      case 'success': return <CheckCircle className="h-4 w-4 text-success" />;
      case 'info': return <Bell className="h-4 w-4 text-info" />;
      default: return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'healthy': 
      case 'optimal':
      case 'ready': return 'success';
      case 'monitoring':
      case 'configured': return 'info';
      case 'warning': return 'warning';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Utilities & Settings</h1>
          <p className="text-muted-foreground">System configuration, monitoring, and administrative tools</p>
        </div>
        <Button>
          <Settings className="mr-2 h-4 w-4" />
          System Settings
        </Button>
      </div>

      {/* System Health Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="kpi-card kpi-card-success">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
            <CheckCircle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Healthy</div>
            <p className="text-xs opacity-80">All systems operational</p>
          </CardContent>
        </Card>

        <Card className="kpi-card kpi-card-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs opacity-80">Currently online</p>
          </CardContent>
        </Card>

        <Card className="kpi-card kpi-card-warning">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <Database className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <Progress value={78} className="mt-2 h-1" />
            <p className="text-xs opacity-80">15.6 GB / 20 GB</p>
          </CardContent>
        </Card>

        <Card className="kpi-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Health</CardTitle>
            <Wifi className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.9%</div>
            <p className="text-xs text-muted-foreground">Uptime this month</p>
          </CardContent>
        </Card>
      </div>

      {/* System Alerts */}
      <Card className="erp-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="mr-2 h-5 w-5" />
            System Alerts
          </CardTitle>
          <CardDescription>Recent system notifications and alerts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {systemAlerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                {getAlertIcon(alert.type)}
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{alert.title}</h4>
                  <p className="text-sm text-muted-foreground">{alert.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
                <Button variant="outline" size="sm">{alert.action}</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="erp-card">
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Configure how you receive system notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Email Notifications</h4>
                <p className="text-sm text-muted-foreground">Receive alerts via email</p>
              </div>
              <Switch 
                checked={notifications.email}
                onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">SMS Alerts</h4>
                <p className="text-sm text-muted-foreground">Urgent alerts via SMS</p>
              </div>
              <Switch 
                checked={notifications.sms}
                onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Push Notifications</h4>
                <p className="text-sm text-muted-foreground">Browser push notifications</p>
              </div>
              <Switch 
                checked={notifications.push}
                onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Desktop Notifications</h4>
                <p className="text-sm text-muted-foreground">System tray notifications</p>
              </div>
              <Switch 
                checked={notifications.desktop}
                onCheckedChange={(checked) => setNotifications({...notifications, desktop: checked})}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Utility Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {utilityCategories.map((category, index) => (
          <Card key={index} className="erp-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <category.icon className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
                <Badge variant={getStatusColor(category.status)} className="status-indicator">
                  {category.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <div>
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.status}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">{item.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}