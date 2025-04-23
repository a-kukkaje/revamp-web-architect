
import ImageCarousel from "./ImageCarousel"
import { MapPin, School, Book } from "lucide-react"

const iconCircle = "w-12 h-12 rounded-full flex items-center justify-center mb-4"
const CampusHighlightsSection = () => {
  const campusImages = [
    {
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      alt: "Serene campus surroundings with pine trees"
    },
    {
      src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      alt: "Natural learning environment"
    },
    {
      src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      alt: "Campus wildlife and nature"
    },
    {
      src: "https://images.unsplash.com/photo-1498079022511-d15614cb1c02",
      alt: "School building"
    },
    {
      src: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6",
      alt: "School playground"
    }
  ]

  return (
    <section className="py-16 bg-[#FAF3E6]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Campus Highlights</h2>
        <div className="mb-12">
          <ImageCarousel images={campusImages} />
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className={`${iconCircle}`} style={{background:'#8B5CF6'}}>
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Natural Setting</h3>
            <p className="text-gray-600">Nestled in the serene hills of Dakshina Kannada</p>
          </div>
          <div className="flex flex-col items-center">
            <div className={`${iconCircle}`} style={{background:'#F97316'}}>
              <School className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Modern Facilities</h3>
            <p className="text-gray-600">Smart classrooms and well-equipped laboratories</p>
          </div>
          <div className="flex flex-col items-center">
            <div className={`${iconCircle}`} style={{background:'#D946EF'}}>
              <Book className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Spiritual Growth</h3>
            <p className="text-gray-600">On-campus Mandir for daily prayers and meditation</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampusHighlightsSection
