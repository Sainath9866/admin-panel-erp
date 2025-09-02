import { useState } from "react";
import { FileText, Download, Calendar, Filter, BarChart3, PieChart, TrendingUp, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

const reportCategories = [
  {
    title: "Financial Reports",
    description: "Accounting and financial statements",
    icon: Calculator,
    reports: [
      { name: "Trial Balance", description: "Account balances verification", lastGenerated: "Today", format: "PDF" },
      { name: "Profit & Loss", description: "Income and expenses statement", lastGenerated: "Yesterday", format: "Excel" },
      { name: "Balance Sheet", description: "Assets and liabilities", lastGenerated: "2 days ago", format: "PDF" },
      { name: "Cash Flow Statement", description: "Cash inflows and outflows", lastGenerated: "3 days ago", format: "Excel" },
      { name: "Bank Reconciliation", description: "Bank account reconciliation", lastGenerated: "Today", format: "PDF" }
    ]
  },
  {
    title: "Inventory Reports", 
    description: "Stock and warehouse analytics",
    icon: BarChart3,
    reports: [
      { name: "Stock Summary", description: "Current stock across warehouses", lastGenerated: "Today", format: "Excel" },
      { name: "Batch-wise Report", description: "Batch expiry and tracking", lastGenerated: "Today", format: "PDF" },
      { name: "Item Movement", description: "Product sales and purchase history", lastGenerated: "Yesterday", format: "Excel" },
      { name: "Reorder Report", description: "Items below minimum level", lastGenerated: "Today", format: "PDF" },
      { name: "ABC Analysis", description: "Product performance classification", lastGenerated: "1 week ago", format: "Excel" }
    ]
  },
  {
    title: "Sales & Purchase Reports",
    description: "Transaction and performance analysis", 
    icon: TrendingUp,
    reports: [
      { name: "Route-wise Sales", description: "Sales performance by territory", lastGenerated: "Today", format: "Excel" },
      { name: "Customer Outstanding", description: "Pending receivables report", lastGenerated: "Today", format: "PDF" },
      { name: "Supplier Payment History", description: "Vendor payment tracking", lastGenerated: "Yesterday", format: "Excel" },
      { name: "Salesman Performance", description: "Individual sales targets", lastGenerated: "Today", format: "PDF" },
      { name: "Product Performance", description: "Top selling items analysis", lastGenerated: "Yesterday", format: "Excel" }
    ]
  },
  {
    title: "Target & Incentive Reports",
    description: "Performance and commission tracking",
    icon: PieChart, 
    reports: [
      { name: "Monthly Targets", description: "Sales targets vs achievements", lastGenerated: "Today", format: "Excel" },
      { name: "Brand-wise Performance", description: "Brand category analysis", lastGenerated: "Yesterday", format: "PDF" },
      { name: "Incentive Calculations", description: "Commission and bonuses", lastGenerated: "2 days ago", format: "Excel" },
      { name: "Territory Analysis", description: "Geographic performance metrics", lastGenerated: "3 days ago", format: "PDF" }
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate, view and analyze business reports across all modules</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Report
          </Button>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Custom Report
          </Button>
        </div>
      </div>

      {/* Quick Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card key={index} className="kpi-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{stat.description}</p>
                <p className="text-xs text-primary font-medium">{stat.trend}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filter Options */}
      <Card className="erp-card">
        <CardContent className="pt-6">
          <div className="flex gap-4 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Category: {selectedCategory}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedCategory("All")}>All Categories</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedCategory("Financial")}>Financial Reports</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedCategory("Inventory")}>Inventory Reports</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedCategory("Sales")}>Sales Reports</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Date Range
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Bulk Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Report Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reportCategories.map((category, index) => (
          <Card key={index} className="erp-card">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <category.icon className="h-5 w-5 text-primary" />
                <div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.reports.map((report, reportIndex) => (
                  <div key={reportIndex} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{report.name}</h4>
                      <p className="text-xs text-muted-foreground">{report.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">{report.format}</Badge>
                      <Button variant="ghost" size="sm">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Reports */}
      <Card className="erp-card">
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>Latest generated reports and their download status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentReports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium">{report.name}</h4>
                    <Badge variant="outline">{report.category}</Badge>
                  </div>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                    <span>Generated by {report.generatedBy}</span>
                    <span>at {report.generatedAt}</span>
                    <span>Size: {report.size}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{report.format}</Badge>
                  <Badge variant="success" className="status-active">{report.status}</Badge>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-3 w-3" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}