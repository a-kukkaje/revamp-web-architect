
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
        subtitle="Explore our vibrant campus life through these images"
        backgroundImage="https://images.unsplash.com/photo-1544928147-79a2dbc1f389"
      />
      <GallerySection />
      <Footer />
    </div>
  )
}

export default Gallery
