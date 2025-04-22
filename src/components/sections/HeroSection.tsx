
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <div 
      className="relative min-h-[85vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1501854140801-50d01698950b')`,
      }}
    >
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
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/academics">Our Programs</Link>
            </Button>
            <Button variant="secondary" asChild size="lg">
              <Link to="/campus-life">Explore Campus</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-primary"
        >
          <path d="M12 19V5" />
          <path d="m5 12 7 7 7-7" />
        </svg>
      </div>
    </div>
  )
}

export default HeroSection
