import { 
  TrendingUp, 
  TrendingDown, 
  ShoppingCart, 
  Package, 
  Users, 
  AlertTriangle,
  DollarSign,
  Calendar,
  BarChart3,
  FileText
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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
  { id: "INV-2024-001", customer: "ABC Retailers", amount: "₹15,250", status: "Paid" },
  { id: "INV-2024-002", customer: "XYZ Store", amount: "₹8,940", status: "Pending" },
  { id: "INV-2024-003", customer: "Quick Shop", amount: "₹22,480", status: "Processing" },
  { id: "INV-2024-004", customer: "Super Bazaar", amount: "₹45,120", status: "Overdue" }
];

const alerts = [
  "Coca Cola 500ml - Only 12 units left",
  "Payment due from ABC Retailers - ₹15,250",
  "New order received - INV-2024-005",
  "Stock shipment delayed - Batch #B456"
];

const topProducts = [
  { name: "Maggi 2-Minute Noodles", sold: 1450, revenue: "₹87,000", growth: "+12%" },
  { name: "Britannia Good Day Biscuits", sold: 890, revenue: "₹62,300", growth: "+8%" },
  { name: "Coca-Cola 600ml", sold: 780, revenue: "₹54,600", growth: "+15%" },
  { name: "Parle-G Biscuits", sold: 1200, revenue: "₹48,000", growth: "+5%" },
  { name: "Amul Milk 1L", sold: 650, revenue: "₹32,500", growth: "+18%" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your business overview</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Generate Report
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
        {kpiCards.map((kpi, index) => (
          <Card key={index} className="bg-card border border-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{kpi.title}</p>
                  <p className="text-2xl font-bold">{kpi.value}</p>
                  {kpi.change && (
                    <div className="flex items-center space-x-1">
                      <span className={`text-xs ${kpi.color}`}>{kpi.change}</span>
                      <span className="text-xs text-muted-foreground">{kpi.period}</span>
                    </div>
                  )}
                  {!kpi.change && (
                    <p className="text-xs text-muted-foreground">{kpi.period}</p>
                  )}
                </div>
                <kpi.icon className={`h-5 w-5 ${kpi.color || 'text-muted-foreground'}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card className="bg-card border border-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Recent Transactions
            </CardTitle>
            <CardDescription>Latest sales, purchases, and payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">{transaction.id}</p>
                      <p className="text-xs text-muted-foreground">{transaction.customer}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{transaction.amount}</p>
                    <Badge 
                      variant={transaction.status === 'Paid' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card className="bg-card border border-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-warning" />
              Alerts
            </CardTitle>
            <CardDescription>Important notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">{alert}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}