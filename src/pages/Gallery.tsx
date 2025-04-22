
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
        subtitle="Explore our vibrant campus life and enriching student activities"
        backgroundImage="/lovable-uploads/c769aba4-b026-4468-9efd-ac53566d6e66.png"
      />
      <div className="py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Campus Story in Pictures</h2>
            <div className="h-1 w-24 bg-primary/60 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Take a visual journey through our vibrant campus life, spiritual activities, 
              academic achievements, and cultural celebrations at SSVK Chokkady.
            </p>
          </div>
          <GallerySection />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery
