import { useState } from "react";
import { Bell, Search, User, Settings, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function TopNavbar() {
  const [notifications] = useState(5); // Mock notification count

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 shadow-soft">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search customers, products, invoices..." 
            className="pl-10 bg-background/50 border-border focus:bg-background transition-colors"
          />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              {notifications > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {notifications}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start p-3">
              <div className="flex items-center justify-between w-full">
                <span className="font-medium text-sm">Low Stock Alert</span>
                <span className="text-xs text-muted-foreground">2 mins ago</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Maggi 2-Minute Noodles is running low in Warehouse A
              </p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start p-3">
              <div className="flex items-center justify-between w-full">
                <span className="font-medium text-sm">Payment Due</span>
                <span className="text-xs text-muted-foreground">1 hour ago</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Customer ABC Mart has pending payment of ₹25,000
              </p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start p-3">
              <div className="flex items-center justify-between w-full">
                <span className="font-medium text-sm">Expiry Alert</span>
                <span className="text-xs text-muted-foreground">3 hours ago</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Batch #B001 expires in 7 days
              </p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@fmcg.com</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}