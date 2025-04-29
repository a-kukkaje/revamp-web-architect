
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import heroImage from 'src/assets/S S V K Chokkady.jpg'; // adjust path based on your project structure

const HeroSection = () => {
  return (
    <div 
      className="relative min-h-[90vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8)), url(${heroImage})`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl space-y-8">
          <p className="text-xl md:text-2xl text-black font-medium">
            Nurturing Excellence Through Value-Based Education
          </p>
          <p className="text-lg md:text-xl text-black">
            A premier residential school providing holistic education that blends academic excellence with spiritual wisdom and cultural values.
          </p>
          <p className="text-base md:text-lg text-black font-medium">
            Located at Chokkady in Sullia taluk, Dakshina Kannada district, Karnataka
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="text-lg shadow-lg bg-primary text-white hover:bg-primary/90">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="text-lg shadow-sm">
              <Link to="/academics">Our Programs</Link>
            </Button>
            <Button variant="secondary" asChild size="lg" className="text-lg shadow-sm">
              <Link to="/campus-life">Explore Campus</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="36" 
          height="36" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-primary opacity-80"
        >
          <path d="M12 19V5" />
          <path d="m5 12 7 7 7-7" />
        </svg>
      </div>
    </div>
  )
}

export default HeroSection
