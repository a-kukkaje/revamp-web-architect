
import { Card, CardContent } from "@/components/ui/card"

const MissionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-black">Our Vision and Mission</h2>
          <div className="h-1 w-24 bg-primary/60 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-black">
            Guided by the timeless principles of Bhagawan Shri Sathya Sai Baba
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 px-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Vision</h3>
              <p className="italic text-black font-medium mb-4 text-lg">
                "The End of Education is Character"
              </p>
              <p className="text-black leading-relaxed">
                We envision a society where education empowers individuals with knowledge and strong character
                to lead lives of service and integrity.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-t-4 border-t-primary">
            <CardContent className="pt-8">
              <h3 className="text-xl font-bold mb-4 text-black">Mission</h3>
              <p className="italic text-black font-medium mb-4">
                "Love All, Serve All" | "Help Ever, Hurt Never"
              </p>
              <p className="text-black">
                To provide inclusive education fostering universal human values regardless of 
                caste, religion, or socioeconomic status.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-t-4 border-t-primary">
            <CardContent className="pt-8">
              <h3 className="text-xl font-bold mb-4 text-black">Core Values</h3>
              <ul className="space-y-2 text-black text-left">
                <li>• Sathya (Truth)</li>
                <li>• Dharma (Righteousness)</li>
                <li>• Shanti (Peace)</li>
                <li>• Prema (Love)</li>
                <li>• Ahimsa (Non-Violence)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
