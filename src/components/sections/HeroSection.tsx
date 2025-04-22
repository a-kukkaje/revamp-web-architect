
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Welcome to SSVK Temple
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            A sacred space dedicated to spirituality, community, and cultural heritage.
            Join us in our daily prayers and cultural activities.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link to="/services">Our Services</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
