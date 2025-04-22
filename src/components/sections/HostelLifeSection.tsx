
import { Card, CardContent } from "@/components/ui/card"

const HostelLifeSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Residential Hostel Life</h2>
          <p className="text-gray-600">
            Our residential program provides a nurturing environment for students to develop
            discipline, self-reliance, and strong values
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1567104565706-436802c93fe5" 
              alt="Hostel buildings" 
              className="rounded-lg shadow-md h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">A Home Away From Home</h3>
            <p>
              Our separate hostels for boys and girls provide a safe, comfortable, and 
              disciplined environment. Students live in a community that fosters personal growth,
              responsibility, and brotherhood/sisterhood.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Boys' Hostel</h4>
                  <p className="text-sm text-gray-600">
                    Modern facilities with dedicated wardens and mentors
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Girls' Hostel</h4>
                  <p className="text-sm text-gray-600">
                    Secure environment with caring female wardens
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Daily Routine</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3 text-primary">Morning</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>Wake-up</span>
                  <span className="text-gray-500">5:30 AM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Yoga & Meditation</span>
                  <span className="text-gray-500">6:00 AM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Breakfast</span>
                  <span className="text-gray-500">7:30 AM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>School Assembly</span>
                  <span className="text-gray-500">8:45 AM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Classes Begin</span>
                  <span className="text-gray-500">9:00 AM</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3 text-primary">Afternoon</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>Lunch</span>
                  <span className="text-gray-500">12:30 PM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Classes Resume</span>
                  <span className="text-gray-500">1:30 PM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>School Ends</span>
                  <span className="text-gray-500">4:00 PM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Sports & Games</span>
                  <span className="text-gray-500">4:15 PM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Evening Snacks</span>
                  <span className="text-gray-500">5:30 PM</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3 text-primary">Evening</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>Study Hours</span>
                  <span className="text-gray-500">6:00 PM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Dinner</span>
                  <span className="text-gray-500">7:30 PM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Bhajans & Prayer</span>
                  <span className="text-gray-500">8:00 PM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Study Hours</span>
                  <span className="text-gray-500">8:30 PM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Lights Out</span>
                  <span className="text-gray-500">10:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HostelLifeSection
