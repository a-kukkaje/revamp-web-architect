
import { Card, CardContent } from "@/components/ui/card"
import { Check, Plus, ArrowDown } from "lucide-react"

const iconStyles = "rounded-full p-3 mb-6 w-16 h-16 flex items-center justify-center mx-auto shadow-sm"

const MissionSection = () => {
  return (
    <section className="py-24 bg-white border-b">
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
          <Card className="text-center border bg-white hover:shadow-xl hover:scale-105 transition-transform">
            <CardContent className="pt-10 px-7 pb-8">
              <div className={`${iconStyles} bg-[#E5DEFF]`}>
                <Check size={32} className="text-white" style={{background:"#7c3aed", borderRadius:"50%"}} />
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
          <Card className="text-center border bg-white hover:shadow-xl hover:scale-105 transition-transform">
            <CardContent className="pt-10 px-7 pb-8">
              <div className={`${iconStyles} bg-[#FEC6A1]`}>
                <Plus size={32} className="text-white" style={{background:"#f97316", borderRadius:"50%"}} />
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
          <Card className="text-center border bg-white hover:shadow-xl hover:scale-105 transition-transform">
            <CardContent className="pt-10 px-7 pb-8">
              <div className={`${iconStyles} bg-[#FFD1E3]`}>
                <ArrowDown size={32} className="text-white" style={{background:"#d946ef", borderRadius:"50%"}} />
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

