
import { Card, CardContent } from "@/components/ui/card"
import { 
  BookIcon, 
  PencilIcon, 
  MonitorIcon, 
  HomeIcon, 
  UserIcon, 
  MusicIcon 
} from "lucide-react"

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: <BookIcon className="h-8 w-8 text-white fill-current" />,
      title: "Smart Classrooms",
      description: "Digital learning environments with modern teaching aids",
      bgColor: "bg-[#E5DEFF]"
    },
    {
      icon: <PencilIcon className="h-8 w-8 text-white fill-current" />,
      title: "Science Labs",
      description: "Well-equipped laboratories for practical learning",
      bgColor: "bg-[#FEC6A1]"
    },
    {
      icon: <MonitorIcon className="h-8 w-8 text-white fill-current" />,
      title: "Atal Tinkering Lab",
      description: "Innovation hub for developing creative problem-solving skills",
      bgColor: "bg-[#FFD1E3]"
    },
    {
      icon: <HomeIcon className="h-8 w-8 text-white fill-current" />,
      title: "Sri Sathya Sai Mandir",
      description: "Spiritual center with Shivalingam materialized by Bhagawan Baba",
      bgColor: "bg-[#D3E4FD]"
    },
    {
      icon: <UserIcon className="h-8 w-8 text-white fill-current" />,
      title: "Separate Hostels",
      description: "Safe and comfortable residential facilities for boys and girls",
      bgColor: "bg-[#F2FCE2]"
    },
    {
      icon: <MusicIcon className="h-8 w-8 text-white fill-current" />,
      title: "Cultural Center",
      description: "Dedicated space for music, dance, and other cultural activities",
      bgColor: "bg-[#FEF7CD]"
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Facilities</h2>
          <p className="text-gray-600">
            Our campus combines modern educational facilities with spiritual spaces, 
            creating an ideal environment for holistic development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-4 p-3 rounded-full ${facility.bgColor}`}>
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FacilitiesSection
