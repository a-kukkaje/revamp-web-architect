
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PageHeader from "@/components/layout/PageHeader"
import FacilitiesSection from "@/components/sections/FacilitiesSection"
import HostelLifeSection from "@/components/sections/HostelLifeSection"
import CampusHighlightsSection from "@/components/sections/CampusHighlightsSection"

const CampusLife = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Campus Life" 
        subtitle="Residential School Campus with Labs, Mandir & Playground – SSVK Karnataka"
        backgroundImage="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
      />
      <CampusHighlightsSection />
      <FacilitiesSection />
      <HostelLifeSection />
      <Footer />
    </div>
  )
}

export default CampusLife
