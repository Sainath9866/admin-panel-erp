import { useState } from "react";
import { Plus, Search, Filter, Edit, Trash2, Eye } from "lucide-react";
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

// Sample data for demonstration
const masterCategories = [
  {
    title: "Journal Master",
    description: "Manage all journal types and entries",
    count: 8,
    lastUpdated: "2 hours ago",
    status: "Active"
  },
  {
    title: "Ledger Master", 
    description: "Chart of accounts and ledger management",
    count: 156,
    lastUpdated: "1 day ago",
    status: "Active"
  },
  {
    title: "Item Master",
    description: "Product catalog and inventory items",
    count: 1247,
    lastUpdated: "3 hours ago", 
    status: "Active"
  },
  {
    title: "Customer Master",
    description: "Customer database and information",
    count: 342,
    lastUpdated: "5 hours ago",
    status: "Active"
  },
  {
    title: "Vendor Master",
    description: "Supplier and vendor management", 
    count: 89,
    lastUpdated: "1 day ago",
    status: "Active"
  },
  {
    title: "Tax Master",
    description: "GST rates and tax configuration",
    count: 12,
    lastUpdated: "2 days ago",
    status: "Active"
  }
];

const recentItems = [
  {
    id: "ITEM-001",
    name: "Maggi 2-Minute Noodles 70g",
    category: "Item Master",
    hsn: "1902301",
    status: "Active",
    lastModified: "2 hours ago",
    modifiedBy: "Admin"
  },
  {
    id: "CUST-045", 
    name: "ABC Retail Store",
    category: "Customer Master",
    gstin: "29ABCDE1234F1Z5",
    status: "Active", 
    lastModified: "4 hours ago",
    modifiedBy: "Sales Team"
  },
  {
    id: "VEND-012",
    name: "Nestle India Ltd", 
    category: "Vendor Master",
    gstin: "29NESTLE1234F1Z5",
    status: "Active",
    lastModified: "1 day ago",
    modifiedBy: "Purchase Team"
  },
  {
    id: "LED-089",
    name: "Sales Account - Electronics",
    category: "Ledger Master", 
    group: "Sales Accounts",
    status: "Active",
    lastModified: "2 days ago",
    modifiedBy: "Accountant"
  }
];

export default function Masters() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Masters</h1>
          <p className="text-muted-foreground">Manage all master data for your ERP system</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Master Entry
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="erp-card">
        <CardContent className="pt-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search masters by name, code, or category..." 
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
                <DropdownMenuItem>All Categories</DropdownMenuItem>
                <DropdownMenuItem>Items</DropdownMenuItem>
                <DropdownMenuItem>Customers</DropdownMenuItem>
                <DropdownMenuItem>Vendors</DropdownMenuItem>
                <DropdownMenuItem>Ledgers</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      {/* Master Categories Overview */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Master Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {masterCategories.map((category, index) => (
            <Card key={index} className="erp-card hover:shadow-medium transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <Badge variant="secondary">{category.count} items</Badge>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Last updated: {category.lastUpdated}</span>
                  <Badge variant="success" className="status-active">{category.status}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Items */}
      <Card className="erp-card">
        <CardHeader>
          <CardTitle>Recently Modified Items</CardTitle>
          <CardDescription>Latest updates across all master categories</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.category}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {item.hsn && `HSN: ${item.hsn}`}
                    {item.gstin && `GSTIN: ${item.gstin}`}
                    {item.group && `Group: ${item.group}`}
                  </TableCell>
                  <TableCell>
                    <Badge variant="success" className="status-active">{item.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm">{item.lastModified}</p>
                      <p className="text-xs text-muted-foreground">by {item.modifiedBy}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
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