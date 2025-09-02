import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  Receipt,
  Package,
  FileText,
  ChevronDown,
  ChevronRight,
  Home,
  Building2,
  Users,
  ShoppingCart,
  Truck,
  CreditCard,
  Wallet,
  Archive,
  Tags,
  MapPin,
  UserCheck,
  Banknote,
  ScrollText,
  RefreshCw,
  TrendingUp,
  Calculator,
  Layers3
} from "lucide-react";
import {
  Sidebar as SidebarUI,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/",
  },
  {
    title: "Masters",
    icon: Layers3,
    subItems: [
      {
        title: "Journal Master",
        icon: ScrollText,
        subItems: [
          { title: "Sales Journal", url: "/masters/journal/sales" },
          { title: "Purchase Journal", url: "/masters/journal/purchase" },
          { title: "Receipt Journal", url: "/masters/journal/receipt" },
          { title: "Payment Journal", url: "/masters/journal/payment" },
          { title: "Contra Journal", url: "/masters/journal/contra" },
          { title: "Debit Note Journal", url: "/masters/journal/debit" },
          { title: "Credit Note Journal", url: "/masters/journal/credit" },
          { title: "Journal Proper", url: "/masters/journal/proper" },
        ]
      },
      {
        title: "Ledger Master",
        icon: Calculator,
        subItems: [
          { title: "Create / Modify Ledger", url: "/masters/ledger/manage" },
          { title: "Ledger Groups", url: "/masters/ledger/groups" },
          { title: "Opening Balance", url: "/masters/ledger/opening" },
          { title: "Ledger Reports", url: "/masters/ledger/reports" },
        ]
      },
      {
        title: "Item Master",
        icon: Package,
        subItems: [
          { title: "Product / SKU Details", url: "/masters/item/products" },
          { title: "HSN / GST", url: "/masters/item/hsn" },
          { title: "Batch / Expiry", url: "/masters/item/batch" },
          { title: "MRP / Cost / Margin", url: "/masters/item/pricing" },
        ]
      },
      { title: "Unit of Measure Master", icon: Archive, url: "/masters/uom" },
      { title: "Price List Master", icon: Tags, url: "/masters/pricelist" },
      { title: "Tax Master", icon: Receipt, url: "/masters/tax" },
      { title: "Batch / Lot Master", icon: Package, url: "/masters/batch" },
      { title: "Customer Master", icon: Users, url: "/masters/customers" },
      { title: "Vendor Master", icon: Building2, url: "/masters/vendors" },
      { title: "Warehouse Master", icon: Archive, url: "/masters/warehouse" },
      { title: "Route / Beat Master", icon: MapPin, url: "/masters/routes" },
      { title: "Employee Master", icon: UserCheck, url: "/masters/employees" },
      { title: "Vehicle Master", icon: Truck, url: "/masters/vehicles" },
      { title: "Bank Master", icon: Banknote, url: "/masters/banks" },
      { title: "Scheme Master", icon: Tags, url: "/masters/schemes" },
      { title: "Document Numbering", icon: ScrollText, url: "/masters/numbering" },
      { title: "Company / Branch", icon: Building2, url: "/masters/company" },
      { title: "User / Role Master", icon: Users, url: "/masters/users" },
      { title: "Opening Balance", icon: Calculator, url: "/masters/opening" },
      { title: "Line Sale Master", icon: TrendingUp, url: "/masters/linesale" },
      { title: "Return Master", icon: RefreshCw, url: "/masters/returns" },
    ]
  },
  {
    title: "Transactions",
    icon: Receipt,
    subItems: [
      {
        title: "Sales",
        icon: ShoppingCart,
        subItems: [
          { title: "Cash Sale", url: "/transactions/sales/cash" },
          { title: "Credit Sale", url: "/transactions/sales/credit" },
          { title: "GST Invoice", url: "/transactions/sales/gst" },
          { title: "Sales Returns", url: "/transactions/sales/returns" },
        ]
      },
      {
        title: "Purchase",
        icon: Package,
        subItems: [
          { title: "Cash Purchase", url: "/transactions/purchase/cash" },
          { title: "Credit Purchase", url: "/transactions/purchase/credit" },
          { title: "Goods Receipt Note", url: "/transactions/purchase/grn" },
        ]
      },
      {
        title: "Payment",
        icon: CreditCard,
        subItems: [
          { title: "To Supplier", url: "/transactions/payment/supplier" },
          { title: "To Employee", url: "/transactions/payment/employee" },
          { title: "Miscellaneous", url: "/transactions/payment/misc" },
        ]
      },
      {
        title: "Receipt",
        icon: Wallet,
        subItems: [
          { title: "From Customers", url: "/transactions/receipt/customer" },
          { title: "Other Income", url: "/transactions/receipt/other" },
        ]
      },
      {
        title: "Journal / Voucher",
        icon: ScrollText,
        subItems: [
          { title: "Adjustment Journal", url: "/transactions/journal/adjustment" },
          { title: "Contra Entry", url: "/transactions/journal/contra" },
          { title: "Debit Note", url: "/transactions/journal/debit" },
          { title: "Credit Note", url: "/transactions/journal/credit" },
        ]
      },
      {
        title: "Stock Transfer",
        icon: RefreshCw,
        subItems: [
          { title: "Between Warehouses", url: "/transactions/transfer/warehouse" },
          { title: "Branch Transfers", url: "/transactions/transfer/branch" },
        ]
      },
    ]
  },
  {
    title: "Inventory",
    icon: Package,
    subItems: [
      { title: "Stock Summary", url: "/inventory/summary" },
      { title: "Batch / Expiry Tracking", url: "/inventory/tracking" },
      { title: "Reorder Alerts", url: "/inventory/alerts" },
      { title: "Rack Stacking", url: "/inventory/stacking" },
      { title: "Stock Valuation", url: "/inventory/valuation" },
    ]
  },
  {
    title: "Reports",
    icon: FileText,
    subItems: [
      {
        title: "Financial Reports",
        icon: Calculator,
        subItems: [
          { title: "Trial Balance", url: "/reports/financial/trial" },
          { title: "Profit & Loss", url: "/reports/financial/pnl" },
          { title: "Balance Sheet", url: "/reports/financial/balance" },
          { title: "Cash Flow", url: "/reports/financial/cashflow" },
          { title: "Bank Reconciliation", url: "/reports/financial/bank" },
        ]
      },
      {
        title: "Inventory Reports",
        icon: Package,
        subItems: [
          { title: "Stock Summary", url: "/reports/inventory/summary" },
          { title: "Batch-wise Report", url: "/reports/inventory/batch" },
          { title: "Item-wise Movement", url: "/reports/inventory/movement" },
        ]
      },
      {
        title: "Sales & Purchase",
        icon: ShoppingCart,
        subItems: [
          { title: "Route-wise Sales", url: "/reports/sales/route" },
          { title: "Customer Outstanding", url: "/reports/sales/outstanding" },
          { title: "Supplier History", url: "/reports/purchase/history" },
          { title: "Salesman Performance", url: "/reports/sales/performance" },
        ]
      },
      {
        title: "Payroll Reports",
        icon: UserCheck,
        subItems: [
          { title: "Salary Register", url: "/reports/payroll/salary" },
          { title: "Attendance & Leave", url: "/reports/payroll/attendance" },
          { title: "PF / ESI Deductions", url: "/reports/payroll/deductions" },
        ]
      },
      {
        title: "Target Reports",
        icon: TrendingUp,
        subItems: [
          { title: "Brand-wise Targets", url: "/reports/targets/brand" },
          { title: "Incentive Calculations", url: "/reports/targets/incentive" },
        ]
      },
    ]
  },
  {
    title: "Utilities & Settings",
    icon: Settings,
    subItems: [
      { title: "Alerts & Notifications", url: "/utilities/alerts" },
      { title: "Document Management", url: "/utilities/documents" },
      { title: "Backup & Restore", url: "/utilities/backup" },
      { title: "Audit Logs", url: "/utilities/audit" },
      { title: "Budgeting & Cost Control", url: "/utilities/budgeting" },
      { title: "Multi-Currency Support", url: "/utilities/currency" },
      { title: "Barcode & Scanning", url: "/utilities/barcode" },
    ]
  },
];

export function Sidebar() {
  const location = useLocation();
  const { collapsed } = useSidebar();
  const [openMenus, setOpenMenus] = useState(new Set(["Dashboard"]));

  const toggleMenu = (title) => {
    setOpenMenus(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  const isActive = (url) => {
    return location.pathname === url;
  };

  const hasActiveChild = (item) => {
    if (item.subItems) {
      return item.subItems.some(subItem => 
        subItem.url ? isActive(subItem.url) : 
        subItem.subItems?.some(nestedItem => isActive(nestedItem.url))
      );
    }
    return false;
  };

  const renderMenuItem = (item, level = 0) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isMenuOpen = openMenus.has(item.title);
    const isItemActive = item.url ? isActive(item.url) : hasActiveChild(item);

    if (hasSubItems) {
      return (
        <Collapsible key={item.title} open={isMenuOpen} onOpenChange={() => toggleMenu(item.title)}>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              className={`w-full justify-between text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md ${isItemActive ? 'bg-sidebar-primary text-sidebar-primary-foreground' : ''}`}
              style={{ paddingLeft: `${(level + 1) * 12}px` }}
            >
              <div className="flex items-center">
                {item.icon && <item.icon className="h-4 w-4 mr-3" />}
                <span>{item.title}</span>
              </div>
              {isMenuOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="ml-2">
              {item.subItems.map(subItem => renderMenuItem(subItem, level + 1))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      );
    }

    return (
      <SidebarMenuItem key={item.title || item.url}>
        <SidebarMenuButton asChild className={`text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md ${isActive(item.url) ? 'bg-sidebar-primary text-sidebar-primary-foreground' : ''}`}>
          <NavLink 
            to={item.url} 
            className="flex items-center w-full"
            style={{ paddingLeft: `${(level + 1) * 12}px` }}
          >
            {item.icon && <item.icon className="h-4 w-4 mr-3" />}
            <span>{item.title}</span>
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <SidebarUI className="border-r-0">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-sidebar-primary rounded-md flex items-center justify-center">
            <Layers3 className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-sidebar-foreground">FMCG ERP</h2>
            <p className="text-xs text-sidebar-foreground/60">Distributor Panel</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-0">
        <SidebarGroup>
          <SidebarMenu className="px-2 pt-4">
            {menuItems.map(item => renderMenuItem(item))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </SidebarUI>
  );
}