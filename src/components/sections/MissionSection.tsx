
import { Card, CardContent } from "@/components/ui/card"

const MissionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Vision and Mission</h2>
          <p className="text-lg text-gray-600">
            Guided by the principles of our founder, Bhagawan Shri Sathya Sai Baba
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-t-4 border-t-primary">
            <CardContent className="pt-8">
              <h3 className="text-xl font-bold mb-4">Vision</h3>
              <p className="italic text-primary font-medium mb-4">
                "The End of Education is Character"
              </p>
              <p className="text-gray-600">
                We envision a society where education empowers individuals with knowledge and strong character
                to lead lives of service and integrity.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-t-4 border-t-primary">
            <CardContent className="pt-8">
              <h3 className="text-xl font-bold mb-4">Mission</h3>
              <p className="italic text-primary font-medium mb-4">
                "Love All, Serve All" | "Help Ever, Hurt Never"
              </p>
              <p className="text-gray-600">
                To provide inclusive education fostering universal human values regardless of 
                caste, religion, or socioeconomic status.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-t-4 border-t-primary">
            <CardContent className="pt-8">
              <h3 className="text-xl font-bold mb-4">Core Values</h3>
              <ul className="space-y-2 text-gray-600 text-left">
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
