
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Menu, Search, Upload, User } from "lucide-react";
import { Link } from "react-router-dom";
import { auth } from "@/utils/firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in
  auth.onAuthStateChanged((user) => {
    setIsLoggedIn(!!user);
  });

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-4 py-4">
                <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="m4 19.5 9-13.5 9 13.5" />
                    <path d="M4 19.5h18" />
                    <path d="m9 13-3-3h3l3 3" />
                  </svg>
                  <span>EduVault</span>
                </Link>
                <Link to="/" className="px-3 py-1 text-sm">
                  Home
                </Link>
                {isLoggedIn && (
                  <Link to="/dashboard" className="px-3 py-1 text-sm">
                    Dashboard
                  </Link>
                )}
                <Link to="/search" className="px-3 py-1 text-sm">
                  Search
                </Link>
                <Link to="/upload" className="px-3 py-1 text-sm">
                  Upload
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="hidden md:flex items-center gap-2 text-lg font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="m4 19.5 9-13.5 9 13.5" />
              <path d="M4 19.5h18" />
              <path d="m9 13-3-3h3l3 3" />
            </svg>
            <span>EduVault</span>
          </Link>

          <nav className="hidden md:flex gap-4">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            {isLoggedIn && (
              <Link to="/dashboard" className="text-sm font-medium hover:text-primary">
                Dashboard
              </Link>
            )}
            <Link to="/search" className="text-sm font-medium hover:text-primary">
              Search
            </Link>
            <Link to="/upload" className="text-sm font-medium hover:text-primary">
              Upload
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <form className="hidden md:flex items-center gap-2 w-80">
            <Input placeholder="Search resources..." className="rounded-full flex-1" />
            <Button type="submit" size="icon" className="rounded-full">
              <Search className="h-4 w-4" />
            </Button>
          </form>

          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link to="/upload">
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Upload className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="icon" variant="ghost" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
