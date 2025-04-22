
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { School } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold text-primary">
            <School className="h-6 w-6" />
            SSVK Chokkady
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={cn("px-4 py-2 text-sm hover:text-primary transition-colors")}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={cn("px-4 py-2 text-sm hover:text-primary transition-colors")}>
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/academics" className={cn("px-4 py-2 text-sm hover:text-primary transition-colors")}>
                  Academics
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/campus-life" className={cn("px-4 py-2 text-sm hover:text-primary transition-colors")}>
                  Campus Life
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/admissions" className={cn("px-4 py-2 text-sm hover:text-primary transition-colors")}>
                  Admissions
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className={cn("px-4 py-2 text-sm hover:text-primary transition-colors")}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
