
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import CampusHighlightsSection from "@/components/sections/CampusHighlightsSection"
import MissionSection from "@/components/sections/MissionSection"
import AcademicProgramsSection from "@/components/sections/AcademicProgramsSection"
import FacilitiesSection from "@/components/sections/FacilitiesSection"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <CampusHighlightsSection />
      <AcademicProgramsSection />
      <FacilitiesSection />
      <Footer />
    </div>
  )
}

export default Index
