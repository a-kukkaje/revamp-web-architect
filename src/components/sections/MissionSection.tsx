
import { Card, CardContent } from "@/components/ui/card"
import { CircleCheck, SquarePlus, SquareChevronDown } from "lucide-react"

const MissionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#fdfcfb] to-[#e2d1c3]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-black">Our Vision and Mission</h2>
          <div className="h-1 w-24 bg-primary/60 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-black">
            Guided by the timeless principles of Bhagawan Shri Sathya Sai Baba
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <Card className="text-center shadow-xl border-0 bg-gradient-to-br from-[#E5DEFF] via-[#FEF7CD] to-[#FDE1D3] hover:scale-105 transition-transform">
            <CardContent className="pt-10 px-7 pb-8">
              <div className="bg-[#9b87f5]/20 mb-6 w-16 h-16 rounded-full mx-auto flex flex-col items-center justify-center shadow-lg">
                <CircleCheck size={32} className="text-primary" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Vision</h3>
              <p className="italic text-black font-medium mb-4 text-lg">
                "The End of Education is Character"
              </p>
              <p className="text-black leading-relaxed">
                We envision a society where education empowers individuals with knowledge and strong character to lead lives of service and integrity.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="text-center shadow-xl border-0 bg-gradient-to-br from-[#FEC6A1] via-[#D3E4FD] to-[#F2FCE2] hover:scale-105 transition-transform">
            <CardContent className="pt-10 px-7 pb-8">
              <div className="bg-[#F97316]/20 mb-6 w-16 h-16 rounded-full mx-auto flex flex-col items-center justify-center shadow-lg">
                <SquarePlus size={32} className="text-primary" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Mission</h3>
              <p className="italic text-black font-medium mb-4 text-lg">
                "Love All, Serve All" | "Help Ever, Hurt Never"
              </p>
              <p className="text-black leading-relaxed">
                To provide inclusive education fostering universal human values regardless of 
                caste, religion, or socioeconomic status.
              </p>
            </CardContent>
          </Card>

          {/* Core Values Card */}
          <Card className="text-center shadow-xl border-0 bg-gradient-to-br from-[#FFDEE2] via-[#E5DEFF] to-[#D6BCFA] hover:scale-105 transition-transform">
            <CardContent className="pt-10 px-7 pb-8">
              <div className="bg-[#D946EF]/20 mb-6 w-16 h-16 rounded-full mx-auto flex flex-col items-center justify-center shadow-lg">
                <SquareChevronDown size={32} className="text-primary" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Core Values</h3>
              <ul className="space-y-3 text-black text-center text-lg font-medium">
                <li>Sathya (Truth)</li>
                <li>Dharma (Righteousness)</li>
                <li>Shanti (Peace)</li>
                <li>Prema (Love)</li>
                <li>Ahimsa (Non-Violence)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
