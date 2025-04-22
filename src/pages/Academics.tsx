
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PageHeader from "@/components/layout/PageHeader"
import AcademicProgramsSection from "@/components/sections/AcademicProgramsSection"
import AchievementsSection from "@/components/sections/AchievementsSection"

const Academics = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Academics" 
        subtitle="Integrated Curriculum with Moral Education | SSVK High School Karnataka"
        backgroundImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45"
      />
      <AcademicProgramsSection />
      <AchievementsSection />
      <Footer />
    </div>
  )
}

export default Academics
