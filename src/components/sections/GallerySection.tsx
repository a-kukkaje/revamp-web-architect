
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const GallerySection = () => {
  const campusImages = [
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
  ]

  const culturalImages = [
    "https://images.unsplash.com/photo-1545128485-c400ce7b23d2",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
    "https://images.unsplash.com/photo-1504326787394-e6d75cae8027",
    "https://images.unsplash.com/photo-1496360166961-10a51d5f367a",
    "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967"
  ]

  const spiritualImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    "https://images.unsplash.com/photo-1511578314322-379afb476865",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    "https://images.unsplash.com/photo-1544928147-79a2dbc1f389"
  ]

  const academicImages = [
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  ]

  return (
    <section className="py-16 bg-[#FAF3E6]">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="campus" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-[#E5DEFF] rounded-lg">
            <TabsTrigger value="campus" className="text-sm md:text-base">Campus Life</TabsTrigger>
            <TabsTrigger value="spiritual" className="text-sm md:text-base">Spiritual Activities</TabsTrigger>
            <TabsTrigger value="cultural" className="text-sm md:text-base">Cultural Events</TabsTrigger>
            <TabsTrigger value="academic" className="text-sm md:text-base">Academics</TabsTrigger>
          </TabsList>
          
          {[
            { value: "campus", images: campusImages, title: "Campus & Facilities" },
            { value: "spiritual", images: spiritualImages, title: "Spiritual Activities & Events" },
            { value: "cultural", images: culturalImages, title: "Cultural Programs" },
            { value: "academic", images: academicImages, title: "Academic Activities" }
          ].map((gallery) => (
            <TabsContent key={gallery.value} value={gallery.value} className="mt-8">
              <h3 className="text-2xl font-bold mb-8 text-center text-primary">{gallery.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gallery.images.map((src, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={src} 
                        alt={`${gallery.title} image ${idx+1}`} 
                        className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-300"
                      />
                    </AspectRatio>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default GallerySection
