import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, Outlet } from "react-router-dom";
import { Home, Book, Upload, Settings, Menu, User, Star, HelpCircle } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const menuItems = [
    {
      title: "Overview",
      icon: <Home className="h-5 w-5" />,
      id: "overview",
      path: "/dashboard",
    },
    {
      title: "My Resources",
      icon: <Book className="h-5 w-5" />,
      id: "resources",
      path: "/dashboard/resources",
    },
    {
      title: "Favorites",
      icon: <Star className="h-5 w-5" />,
      id: "favorites",
      path: "/dashboard/favorites",
    },
    {
      title: "Upload",
      icon: <Upload className="h-5 w-5" />,
      id: "upload",
      path: "/upload",
    },
    {
      title: "Profile",
      icon: <User className="h-5 w-5" />,
      id: "profile",
      path: "/dashboard/profile",
    },
    {
      title: "Settings",
      icon: <Settings className="h-5 w-5" />,
      id: "settings",
      path: "/dashboard/settings",
    },
    {
      title: "Help",
      icon: <HelpCircle className="h-5 w-5" />,
      id: "help",
      path: "/dashboard/help",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        {/* Mobile sidebar */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden absolute left-4 top-20 z-50">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-2 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md ${
                    activeTab === item.id ? "bg-primary text-primary-foreground" : "hover:bg-secondary/20"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        
        {/* Desktop sidebar */}
        <div className="hidden md:flex md:w-64 md:flex-col md:border-r">
          <div className="flex flex-col gap-2 p-4">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md ${
                  activeTab === item.id ? "bg-primary text-primary-foreground" : "hover:bg-secondary/20"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
