// Sample data for FMCG ERP Demo

export const sampleProducts = [
  {
    id: "SKU-001",
    name: "Maggi 2-Minute Noodles 70g",
    category: "Food & Beverages",
    brand: "Nestle",
    hsn: "1902301",
    mrp: 14.00,
    cost: 10.50,
    stock: 45,
    minLevel: 100,
    maxLevel: 500,
    unit: "Pack",
    gst: 5,
    batch: "BATCH001",
    expiry: "2024-06-15",
    warehouse: "Warehouse A"
  },
  {
    id: "SKU-002", 
    name: "Britannia Good Day Biscuits 100g",
    category: "Food & Beverages",
    brand: "Britannia",
    hsn: "1905902",
    mrp: 25.00,
    cost: 18.00,
    stock: 78,
    minLevel: 150,
    maxLevel: 600,
    unit: "Pack",
    gst: 5,
    batch: "BATCH002",
    expiry: "2024-07-20",
    warehouse: "Warehouse B"
  },
  {
    id: "SKU-003",
    name: "Coca-Cola 600ml",
    category: "Beverages",
    brand: "Coca-Cola",
    hsn: "2202901",
    mrp: 40.00,
    cost: 28.00,
    stock: 120,
    minLevel: 200,
    maxLevel: 800,
    unit: "Bottle",
    gst: 28,
    batch: "BATCH003",
    expiry: "2024-05-30",
    warehouse: "Warehouse A"
  }
];

export const sampleCustomers = [
  {
    id: "CUST-001",
    name: "ABC Retail Store",
    type: "Retailer",
    gstin: "29ABCDE1234F1Z5",
    address: "123 Main Street, Mumbai",
    phone: "+91 98765 43210",
    email: "abc@retailstore.com",
    creditLimit: 100000,
    outstandingAmount: 25000,
    route: "Route-A",
    salesman: "Rajesh Kumar",
    status: "Active"
  },
  {
    id: "CUST-002",
    name: "XYZ Supermarket",
    type: "Distributor",
    gstin: "29XYZAB5678G2H6",
    address: "456 Commercial Complex, Delhi",
    phone: "+91 87654 32109",
    email: "xyz@supermarket.com",
    creditLimit: 250000,
    outstandingAmount: 45000,
    route: "Route-B",
    salesman: "Priya Sharma",
    status: "Active"
  }
];

export const sampleVendors = [
  {
    id: "VEND-001",
    name: "Nestle India Ltd",
    gstin: "29NESTLE1234F1Z5",
    address: "Nestle House, Gurugram",
    phone: "+91 124 3821000",
    email: "orders@nestle.in",
    paymentTerms: "30 days",
    category: "Principal",
    status: "Active"
  },
  {
    id: "VEND-002",
    name: "Britannia Industries Ltd",
    gstin: "29BRITAN5678G2H6",
    address: "Britannia House, Kolkata",
    phone: "+91 33 6602 7000",
    email: "orders@britannia.co.in",
    paymentTerms: "45 days",
    category: "Principal",
    status: "Active"
  }
];

export const sampleTransactions = [
  {
    id: "INV-2024-001",
    type: "Sales Invoice",
    customer: "ABC Retail Store",
    amount: 15670,
    items: [
      { sku: "SKU-001", qty: 100, rate: 14.00 },
      { sku: "SKU-002", qty: 50, rate: 25.00 }
    ],
    status: "Completed",
    date: "2024-01-15",
    dueDate: "2024-02-14",
    salesman: "Rajesh Kumar"
  },
  {
    id: "BILL-2024-001",
    type: "Purchase Bill",
    vendor: "Nestle India Ltd",
    amount: 45890,
    items: [
      { sku: "SKU-001", qty: 500, rate: 10.50 }
    ],
    status: "Pending Approval",
    date: "2024-01-14",
    dueDate: "2024-02-13"
  }
];

export const zohoIntegrationStatus = {
  books: { connected: true, lastSync: "2024-01-15 10:30:00", status: "Active" },
  inventory: { connected: true, lastSync: "2024-01-15 10:25:00", status: "Active" },
  crm: { connected: true, lastSync: "2024-01-15 10:20:00", status: "Active" },
  payroll: { connected: false, lastSync: null, status: "Disconnected" },
  analytics: { connected: true, lastSync: "2024-01-15 10:15:00", status: "Active" }
};