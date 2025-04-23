
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
      icon: <BookIcon className="h-8 w-8 text-white" />,
      iconBg: "#8B5CF6",
      cardBg: "#E5DEFF",
      title: "Smart Classrooms",
      description: "Digital learning environments with modern teaching aids"
    },
    {
      icon: <PencilIcon className="h-8 w-8 text-white" />,
      iconBg: "#F97316",
      cardBg: "#FEF7CD",
      title: "Science Labs",
      description: "Well-equipped laboratories for practical learning"
    },
    {
      icon: <MonitorIcon className="h-8 w-8 text-white" />,
      iconBg: "#1EAEDB",
      cardBg: "#D3E4FD",
      title: "Atal Tinkering Lab",
      description: "Innovation hub for developing creative problem-solving skills"
    },
    {
      icon: <HomeIcon className="h-8 w-8 text-white" />,
      iconBg: "#34A853",
      cardBg: "#F2FCE2",
      title: "Sri Sathya Sai Mandir",
      description: "Spiritual center with Shivalingam materialized by Bhagawan Baba"
    },
    {
      icon: <UserIcon className="h-8 w-8 text-white" />,
      iconBg: "#FFA99F",
      cardBg: "#FFDEE2",
      title: "Separate Hostels",
      description: "Safe and comfortable residential facilities for boys and girls"
    },
    {
      icon: <MusicIcon className="h-8 w-8 text-white" />,
      iconBg: "#7E69AB",
      cardBg: "#EFE1FF",
      title: "Cultural Center",
      description: "Dedicated space for music, dance, and other cultural activities"
    }
  ]

  return (
    <section className="py-16 bg-[#FEF7CD]">
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
            <Card key={index} className="border shadow-md hover:shadow-lg transition-shadow" style={{background: facility.cardBg}}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full" style={{background: facility.iconBg}}>
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                  <p className="text-gray-700">{facility.description}</p>
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
