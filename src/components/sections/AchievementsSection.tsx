
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Award, Star } from "lucide-react"

const AchievementsSection = () => {
  const academicResults = [
    { year: "2024", passPercentage: "100%", distinction: "85%", firstClass: "15%", topScore: "98%" },
    { year: "2023", passPercentage: "100%", distinction: "82%", firstClass: "18%", topScore: "97%" },
    { year: "2022", passPercentage: "100%", distinction: "80%", firstClass: "20%", topScore: "96%" },
    { year: "2021", passPercentage: "100%", distinction: "78%", firstClass: "22%", topScore: "95%" },
    { year: "2020", passPercentage: "100%", distinction: "76%", firstClass: "24%", topScore: "98%" },
  ]

  const otherAchievements = [
    {
      title: "State Science Olympiad",
      description: "First place in the Karnataka State Science Olympiad for three consecutive years"
    },
    {
      title: "National Art Competition",
      description: "Multiple students recognized in the National Art for Peace Competition"
    },
    {
      title: "Sports Championships",
      description: "District-level champions in athletics, volleyball, and kabaddi"
    },
    {
      title: "Music and Dance",
      description: "First place in state-level classical music and dance competitions"
    }
  ]

  return (
    <section className="py-16 bg-[#D3E4FD]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Student Achievements</h2>
          <p className="text-gray-600">
            Our students consistently excel in academics, sports, and extracurricular activities
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-12 border">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="h-6 w-6 text-white rounded-full p-1" style={{background:'#F97316'}} />
            <h3 className="text-2xl font-bold">10th Board Exam Results</h3>
          </div>
          <Table>
            <TableCaption>Historical 10th standard board examination results</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>Pass Percentage</TableHead>
                <TableHead>Distinction</TableHead>
                <TableHead>First Class</TableHead>
                <TableHead>Top Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {academicResults.map((result) => (
                <TableRow key={result.year}>
                  <TableCell className="font-medium">{result.year}</TableCell>
                  <TableCell>{result.passPercentage}</TableCell>
                  <TableCell>{result.distinction}</TableCell>
                  <TableCell>{result.firstClass}</TableCell>
                  <TableCell>{result.topScore}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-6 w-6 text-white rounded-full p-1" style={{background:'#9b87f5'}} />
              <h3 className="text-2xl font-bold">Notable Achievements</h3>
            </div>
            <div className="space-y-6">
              {otherAchievements.map((achievement, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h4 className="font-semibold text-lg mb-1">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
              alt="Students with awards" 
              className="rounded-lg shadow-md h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
