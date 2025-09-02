import { useState } from "react";
import { Package, AlertTriangle, TrendingUp, BarChart3, Search, Filter, Plus } from "lucide-react";
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
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const getStockStatus = (current, min, max) => {
    const percentage = (current / max) * 100;
    if (current <= min) return { status: "Critical", variant: "destructive", percentage };
    if (current <= min * 1.5) return { status: "Low", variant: "warning", percentage };
    return { status: "Normal", variant: "success", percentage };
  };

  const getExpiryStatus = (days) => {
    if (days <= 3) return { status: "Critical", variant: "destructive" };
    if (days <= 7) return { status: "Warning", variant: "warning" };
    return { status: "Normal", variant: "info" };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inventory Management</h1>
          <p className="text-muted-foreground">Monitor stock levels, track batches, and manage warehouse operations</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <BarChart3 className="mr-2 h-4 w-4" />
            Stock Reports
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Stock Entry
          </Button>
        </div>
      </div>

      {/* Inventory Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {inventoryStats.map((stat, index) => (
          <Card key={index} className="kpi-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.trend === 'alert' ? (
                <AlertTriangle className="h-4 w-4 text-warning" />
              ) : (
                <Package className="h-4 w-4 text-muted-foreground" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-1 text-xs">
                {stat.trend === 'up' && <TrendingUp className="h-3 w-3 text-success" />}
                {stat.trend === 'alert' && <AlertTriangle className="h-3 w-3 text-warning" />}
                <span className={
                  stat.trend === 'up' ? 'text-success' : 
                  stat.trend === 'alert' ? 'text-warning' : 'text-muted-foreground'
                }>
                  {stat.change}
                </span>
                <span className="text-muted-foreground">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card className="erp-card">
        <CardContent className="pt-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by SKU, product name, batch number..." 
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
                  Warehouse
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All Warehouses</DropdownMenuItem>
                <DropdownMenuItem>Warehouse A</DropdownMenuItem>
                <DropdownMenuItem>Warehouse B</DropdownMenuItem>
                <DropdownMenuItem>Warehouse C</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Category
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All Categories</DropdownMenuItem>
                <DropdownMenuItem>Food & Beverages</DropdownMenuItem>
                <DropdownMenuItem>Personal Care</DropdownMenuItem>
                <DropdownMenuItem>Home Care</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      {/* Low Stock Alerts */}
      <Card className="erp-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-warning" />
                Low Stock Alerts
              </CardTitle>
              <CardDescription>Items that need immediate restocking</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Generate Purchase Order
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Warehouse</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Restocked</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lowStockItems.map((item, index) => {
                const stockInfo = getStockStatus(item.currentStock, item.minLevel, item.maxLevel);
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.sku}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{item.currentStock} units</p>
                        <Progress value={stockInfo.percentage} className="h-1 mt-1" />
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      Min: {item.minLevel} / Max: {item.maxLevel}
                    </TableCell>
                    <TableCell>{item.warehouse}</TableCell>
                    <TableCell>
                      <Badge variant={stockInfo.variant} className="status-indicator">
                        {stockInfo.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{item.lastRestocked}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">Reorder</Button>
                        <Button variant="ghost" size="sm">View</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Expiring Items */}
      <Card className="erp-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-destructive" />
                Expiring Items
              </CardTitle>
              <CardDescription>Products approaching expiry date</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Clearance Sale
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Batch</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Days Left</TableHead>
                <TableHead>Warehouse</TableHead>
                <TableHead>MRP</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expiringItems.map((item, index) => {
                const expiryInfo = getExpiryStatus(item.daysToExpiry);
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.sku}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.batch}</Badge>
                    </TableCell>
                    <TableCell>{item.quantity} units</TableCell>
                    <TableCell>{item.expiryDate}</TableCell>
                    <TableCell>
                      <Badge variant={expiryInfo.variant} className="status-indicator">
                        {item.daysToExpiry} days
                      </Badge>
                    </TableCell>
                    <TableCell>{item.warehouse}</TableCell>
                    <TableCell className="font-medium">{item.mrp}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">Discount</Button>
                        <Button variant="ghost" size="sm">Transfer</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}