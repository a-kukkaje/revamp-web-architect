import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

// Import the actual logo
import LogoImage from "/public/lovable-uploads/c769aba4-b026-4468-9efd-ac53566d6e66.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Check if the current route matches the link
  const isActive = (path: string) => location.pathname === path

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={cn(
      "bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50 transition-all duration-300",
      isScrolled && "shadow-md"
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 text-xl md:text-2xl font-bold text-black z-10">
            <img 
              src={LogoImage} 
              alt="School Logo" 
              className="h-20 w-20 object-contain"
            />
            SSVK Chokkady
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={cn(
                      "px-4 py-2 text-sm transition-colors",
                      isActive("/") ? "text-primary font-medium" : "hover:text-primary"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={cn(
                      "px-4 py-2 text-sm transition-colors",
                      isActive("/about") ? "text-primary font-medium" : "hover:text-primary"
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/academics" 
                    className={cn(
                      "px-4 py-2 text-sm transition-colors",
                      isActive("/academics") ? "text-primary font-medium" : "hover:text-primary"
                    )}
                  >
                    Academics
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/campus-life" 
                    className={cn(
                      "px-4 py-2 text-sm transition-colors",
                      isActive("/campus-life") ? "text-primary font-medium" : "hover:text-primary"
                    )}
                  >
                    Campus Life
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/admissions" 
                    className={cn(
                      "px-4 py-2 text-sm transition-colors",
                      isActive("/admissions") ? "text-primary font-medium" : "hover:text-primary"
                    )}
                  >
                    Admissions
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/gallery" 
                    className={cn(
                      "px-4 py-2 text-sm transition-colors",
                      isActive("/gallery") ? "text-primary font-medium" : "hover:text-primary"
                    )}
                  >
                    Gallery
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className={cn(
                      "px-4 py-2 text-sm transition-colors",
                      isActive("/contact") ? "text-primary font-medium" : "hover:text-primary"
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-500 hover:text-primary transition-colors z-10"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {/* Mobile Menu */}
          <div className={cn(
            "fixed inset-0 bg-white/95 backdrop-blur-sm flex flex-col justify-center items-center transition-opacity duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}>
            <div className="space-y-6 text-center">
              <Link 
                to="/" 
                className={cn(
                  "block px-4 py-2 text-lg",
                  isActive("/") ? "text-primary font-medium" : "hover:text-primary"
                )}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={cn(
                  "block px-4 py-2 text-lg",
                  isActive("/about") ? "text-primary font-medium" : "hover:text-primary"
                )}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/academics" 
                className={cn(
                  "block px-4 py-2 text-lg",
                  isActive("/academics") ? "text-primary font-medium" : "hover:text-primary"
                )}
                onClick={toggleMenu}
              >
                Academics
              </Link>
              <Link 
                to="/campus-life" 
                className={cn(
                  "block px-4 py-2 text-lg",
                  isActive("/campus-life") ? "text-primary font-medium" : "hover:text-primary"
                )}
                onClick={toggleMenu}
              >
                Campus Life
              </Link>
              <Link 
                to="/admissions" 
                className={cn(
                  "block px-4 py-2 text-lg",
                  isActive("/admissions") ? "text-primary font-medium" : "hover:text-primary"
                )}
                onClick={toggleMenu}
              >
                Admissions
              </Link>
              <Link 
                to="/gallery" 
                className={cn(
                  "block px-4 py-2 text-lg",
                  isActive("/gallery") ? "text-primary font-medium" : "hover:text-primary"
                )}
                onClick={toggleMenu}
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                className={cn(
                  "block px-4 py-2 text-lg",
                  isActive("/contact") ? "text-primary font-medium" : "hover:text-primary"
                )}
                onClick={toggleMenu}
              >
                Contact
              </Link>
              
              <Button asChild className="mt-4">
                <Link to="/admissions" onClick={toggleMenu}>Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
