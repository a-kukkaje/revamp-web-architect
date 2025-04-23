
import { Card, CardContent } from "@/components/ui/card"

const FounderSection = () => {
  return (
    <section className="py-16 bg-[#FFDEE2]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Spiritual Legacy</h2>
          <p className="text-gray-600">
            Founded with the divine blessings of Bhagawan Shri Sathya Sai Baba
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1473177104440-ffee2f376098" 
              alt="School foundation ceremony" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Divine Foundation</h3>
            <p>
              SSVK Chokkady began its journey in 1979 with the divine blessings of Bhagawan Shri Sathya Sai Baba. 
              The school was established to nurture young minds with Indian cultural values, academic excellence, 
              and spiritual awareness.
            </p>
            <p>
              Bhagawan Baba's materialization of the "Swarna Vatapatra" marked the sacred beginning of the campus's 
              spiritual legacy. This divine foundation continues to guide our educational philosophy and vision.
            </p>
            <blockquote className="pl-4 border-l-4 border-primary italic text-gray-600">
              "The end of education is character. The end of knowledge is love. The end of culture is perfection. 
              The end of wisdom is freedom."
              <footer className="mt-2 font-semibold">— Bhagawan Shri Sathya Sai Baba</footer>
            </blockquote>
          </div>
        </div>

        <div className="bg-[#FAF3E6] rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Core Principles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card style={{background: "#FDF5E6"}}>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-3 text-center">Educare</h4>
                <p className="text-gray-600">
                  True education draws out the inherent divine qualities from within, transforming students 
                  from the inside out.
                </p>
              </CardContent>
            </Card>
            <Card style={{background: "#E5DEFF"}}>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-3 text-center">Head, Heart & Hands</h4>
                <p className="text-gray-600">
                  Harmonizing intellectual knowledge, compassionate feelings, and skillful action for 
                  balanced development.
                </p>
              </CardContent>
            </Card>
            <Card style={{background: "#FDE1D3"}}>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-3 text-center">Unity of Faiths</h4>
                <p className="text-gray-600">
                  Respecting all religions, cultures, and backgrounds while emphasizing universal 
                  human values that unite humanity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderSection
