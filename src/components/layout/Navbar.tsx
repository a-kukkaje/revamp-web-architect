import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import LogoImage from "/public/lovable-uploads/c769aba4-b026-4468-9efd-ac53566d6e66.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1100) {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden'; // also lock html
      } else {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
      }
    }
  
    // Cleanup in case window is resized or component unmounts
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Academics", path: "/academics" },
    { label: "Campus Life", path: "/campus-life" },
    { label: "Admissions", path: "/admissions" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top contact bar - hidden on mobile */}
      <div className="hidden md:block bg-primary/5 border-b text-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>+91 6360099621</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>ssvkchokkady@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>Chokkady, Sullia, Karnataka</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>Mon-Sat: 8:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={cn(
          "bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50 transition-all duration-300",
          isScrolled && "shadow-md"
        )}
      >
        <div className="container mx-auto px-4 py-2 relative">
          <div className="flex items-center justify-between">
            {/* Logo and School Name */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={LogoImage}
                alt="School Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />              
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-1">
                  {menuItems.map(({ label, path }) => (
                    <NavigationMenuItem key={path}>
                      <Link
                        to={path}
                        className={cn(
                          "px-3 py-2 text-sm rounded-md transition-colors",
                          isActive(path)
                            ? "text-primary font-medium bg-primary/10"
                            : "hover:text-primary hover:bg-gray-100"
                        )}
                      >
                        {label}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem>
                    <Button asChild size="sm" className="ml-2">
                      <Link to="/admissions">Apply Now</Link>
                    </Button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-primary transition-colors z-50"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Overlay when mobile menu is open */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/20 z-30 md:hidden"
              onClick={toggleMenu}
              aria-hidden="true"
            />
          )}
        </div>
      </nav>
      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 w-full h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden overflow-y-auto",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
      
        {/* Mobile Menu Items */}
        <div className="py-20 px-4 flex flex-col space-y-1">
          {menuItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={cn(
                "py-2 px-4 rounded-md transition-colors",
                isActive(path)
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-gray-100"
              )}
              onClick={toggleMenu}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Apply Now Button at the bottom */}
        <div className="absolute bottom-0 w-full p-4 border-t bg-white">
          <Button asChild className="w-full">
            <Link to="/admissions" onClick={toggleMenu}>
              Apply Now
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
