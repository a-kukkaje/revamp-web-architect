
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PageHeader from "@/components/layout/PageHeader"
import AdmissionsSection from "@/components/sections/AdmissionsSection"

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Admissions 2025-26" 
        subtitle="Join our community of learners in pursuit of academic excellence and character development"
        backgroundImage="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
      />
      <AdmissionsSection />
      <Footer />
    </div>
  )
}

export default Admissions
