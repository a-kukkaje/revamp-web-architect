
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PageHeader from "@/components/layout/PageHeader"
import GallerySection from "@/components/sections/GallerySection"

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Photo Gallery" 
        subtitle="Explore our campus life, cultural activities, and student achievements through these images"
        backgroundImage="public/lovable-uploads/c769aba4-b026-4468-9efd-ac53566d6e66.png"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through our vibrant campus life, spiritual activities, 
            academic achievements, and cultural celebrations at SSVK Chokkady.
          </p>
        </div>
      </div>
      <GallerySection />
      <Footer />
    </div>
  )
}

export default Gallery
