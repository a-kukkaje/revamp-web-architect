
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PageHeader from "@/components/layout/PageHeader"
import FounderSection from "@/components/sections/FounderSection"
import MissionSection from "@/components/sections/MissionSection"
import AchievementsSection from "@/components/sections/AchievementsSection"

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="About Us" 
        subtitle="Our Legacy | SSVK Chokkady | Sai-Inspired Education in India"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
      />
      <FounderSection />
      <MissionSection />
      <AchievementsSection />
      <Footer />
    </div>
  )
}

export default About
