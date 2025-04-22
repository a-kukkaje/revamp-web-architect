
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Shri Sathya Sai Vidya Kendra
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            A value-based residential school providing spiritual, academic, and cultural education in a serene natural setting.
          </p>
          <p className="text-md md:text-lg text-gray-500 mb-8">
            Located in Chokkady, Sullia Taluk, Dakshina Kannada, Karnataka
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/academics">Our Programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
