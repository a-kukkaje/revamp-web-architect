
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

  const eventsImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    "https://images.unsplash.com/photo-1511578314322-379afb476865",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    "https://images.unsplash.com/photo-1544928147-79a2dbc1f389"
  ]

  const culturalImages = [
    "https://images.unsplash.com/photo-1545128485-c400ce7b23d2",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
    "https://images.unsplash.com/photo-1504326787394-e6d75cae8027",
    "https://images.unsplash.com/photo-1496360166961-10a51d5f367a",
    "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967"
  ]

  const sportsImages = [
    "https://images.unsplash.com/photo-1526232373132-0e4ee643aad1",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    "https://images.unsplash.com/photo-1530549387789-4c1017266635",
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
    "https://images.unsplash.com/photo-1535131749006-b7f58c99034b"
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Photo Gallery</h2>
          <p className="text-gray-600">
            Explore our vibrant campus life through these images
          </p>
        </div>

        <Tabs defaultValue="campus" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="campus">Campus</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="cultural">Cultural</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
          </TabsList>
          
          {[
            { value: "campus", images: campusImages, title: "Campus & Facilities" },
            { value: "events", images: eventsImages, title: "School Events" },
            { value: "cultural", images: culturalImages, title: "Cultural Activities" },
            { value: "sports", images: sportsImages, title: "Sports & Games" }
          ].map((gallery) => (
            <TabsContent key={gallery.value} value={gallery.value} className="mt-8">
              <h3 className="text-xl font-bold mb-6 text-center">{gallery.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gallery.images.map((src, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={src} 
                        alt={`${gallery.title} image ${idx+1}`} 
                        className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
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
