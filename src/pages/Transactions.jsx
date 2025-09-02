import { useState } from "react";
import { Plus, Search, Filter, FileText, Calendar, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  { title: "Cash Sale", description: "Record immediate sale", icon: "💰" },
  { title: "Credit Sale", description: "Create invoice for credit", icon: "📄" },
  { title: "Cash Purchase", description: "Record supplier purchase", icon: "🛒" },
  { title: "Payment Entry", description: "Record supplier payment", icon: "💳" },
  { title: "Receipt Entry", description: "Record customer payment", icon: "🧾" },
  { title: "Stock Transfer", description: "Move items between warehouses", icon: "📦" }
];

export default function Transactions() {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'Pending Approval': return 'warning';
      case 'Processing': return 'info';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Transactions</h1>
          <p className="text-muted-foreground">Manage all sales, purchase, payment and receipt transactions</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Transaction
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Cash Sale</DropdownMenuItem>
            <DropdownMenuItem>Credit Sale</DropdownMenuItem>
            <DropdownMenuItem>Purchase Entry</DropdownMenuItem>
            <DropdownMenuItem>Payment Entry</DropdownMenuItem>
            <DropdownMenuItem>Receipt Entry</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Transaction Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {transactionSummary.map((item, index) => (
          <Card key={index} className="kpi-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{item.count}</p>
                <div className="flex items-center space-x-1 text-xs">
                  {item.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-success" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-destructive" />
                  )}
                  <span className={item.trend === 'up' ? 'text-success' : 'text-destructive'}>
                    {item.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="erp-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used transaction entries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2 hover:shadow-medium transition-all"
              >
                <span className="text-2xl">{action.icon}</span>
                <div className="text-center">
                  <p className="text-sm font-medium">{action.title}</p>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <Card className="erp-card">
        <CardContent className="pt-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by invoice number, customer, amount..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All Transactions</DropdownMenuItem>
                <DropdownMenuItem>Sales</DropdownMenuItem>
                <DropdownMenuItem>Purchase</DropdownMenuItem>
                <DropdownMenuItem>Payments</DropdownMenuItem>
                <DropdownMenuItem>Receipts</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Date Range
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="erp-card">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest transaction entries and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Customer/Supplier</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{transaction.id}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{transaction.type}</Badge>
                  </TableCell>
                  <TableCell>{transaction.customer}</TableCell>
                  <TableCell className="font-medium">{transaction.amount}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(transaction.status)} className="status-indicator">
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm">{transaction.date}</p>
                      <p className="text-xs text-muted-foreground">{transaction.time}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">View</Button>
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">Print</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}