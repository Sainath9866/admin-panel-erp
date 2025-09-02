import { 
  TrendingUp, 
  TrendingDown, 
  ShoppingCart, 
  Package, 
  Users, 
  AlertTriangle,
  DollarSign,
  Calendar,
  BarChart3
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const kpiCards = [
  {
    title: "Total Sales",
    value: "₹12,45,680",
    change: "+12.5%",
    trend: "up",
    period: "This month",
    icon: ShoppingCart,
    variant: "primary"
  },
  {
    title: "Purchase Orders", 
    value: "₹8,76,540",
    change: "+8.2%",
    trend: "up",
    period: "This month",
    icon: Package,
    variant: "success"
  },
  {
    title: "Active Customers",
    value: "1,234",
    change: "+15.3%",
    trend: "up",
    period: "This month", 
    icon: Users,
    variant: "info"
  },
  {
    title: "Low Stock Items",
    value: "23",
    change: "+4",
    trend: "down",
    period: "Items to reorder",
    icon: AlertTriangle,
    variant: "warning"
  }
];

const recentTransactions = [
  { id: "INV-001", customer: "ABC Mart", amount: "₹15,670", status: "Paid", date: "Today" },
  { id: "INV-002", customer: "XYZ Store", amount: "₹8,940", status: "Pending", date: "Yesterday" },
  { id: "INV-003", customer: "Quick Shop", amount: "₹22,480", status: "Paid", date: "2 days ago" },
  { id: "INV-004", customer: "Super Bazaar", amount: "₹45,120", status: "Overdue", date: "3 days ago" },
  { id: "INV-005", customer: "Family Store", amount: "₹12,350", status: "Paid", date: "4 days ago" },
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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your business today.</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 days
          </Button>
          <Button>
            <BarChart3 className="mr-2 h-4 w-4" />
            View Reports
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((kpi, index) => (
          <Card key={index} className={`kpi-card ${kpi.variant === 'primary' ? 'kpi-card-primary' : 
                                                     kpi.variant === 'success' ? 'kpi-card-success' :
                                                     kpi.variant === 'warning' ? 'kpi-card-warning' : ''}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center space-x-1 text-xs">
                {kpi.trend === 'up' ? (
                  <TrendingUp className="h-3 w-3 text-success" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-destructive" />
                )}
                <span className={kpi.trend === 'up' ? 'text-success' : 'text-destructive'}>
                  {kpi.change}
                </span>
                <span className="text-muted-foreground">{kpi.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Overview */}
        <Card className="lg:col-span-2 erp-card">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>Your sales performance this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Monthly Target</span>
                <span className="text-sm font-medium">₹15,00,000</span>
              </div>
              <Progress value={83} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>₹12,45,680 achieved</span>
                <span>83% of target</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <p className="text-sm text-muted-foreground">Cash Sales</p>
                  <p className="text-lg font-semibold">₹8,76,540</p>
                  <p className="text-xs text-success">+12% from last month</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Credit Sales</p>
                  <p className="text-lg font-semibold">₹3,69,140</p>
                  <p className="text-xs text-warning">+5% from last month</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="erp-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-2">
              <Button variant="outline" className="justify-start">
                <ShoppingCart className="mr-2 h-4 w-4" />
                New Sale Invoice
              </Button>
              <Button variant="outline" className="justify-start">
                <Package className="mr-2 h-4 w-4" />
                Stock Entry
              </Button>
              <Button variant="outline" className="justify-start">
                <Users className="mr-2 h-4 w-4" />
                Add Customer
              </Button>
              <Button variant="outline" className="justify-start">
                <DollarSign className="mr-2 h-4 w-4" />
                Record Payment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card className="erp-card">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest sales and payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="text-sm font-medium">{transaction.id}</p>
                    <p className="text-xs text-muted-foreground">{transaction.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{transaction.amount}</p>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={
                          transaction.status === 'Paid' ? 'success' :
                          transaction.status === 'Pending' ? 'warning' : 'destructive'
                        }
                        className="status-indicator text-xs"
                      >
                        {transaction.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{transaction.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Selling Products */}
        <Card className="erp-card">
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
            <CardDescription>Best performers this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.sold} units sold</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{product.revenue}</p>
                    <p className="text-xs text-success">{product.growth}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}