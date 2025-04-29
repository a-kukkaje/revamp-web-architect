import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// ✅ Correctly import images
import primaryImage from '../../assets/5th_Std.JPG';
import middleImage from '../../assets/6th.JPG';
import highImage from '../../assets/10th.JPG';

const AcademicProgramsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Academic Programs</h2>
          <p className="text-gray-600">
            We offer an integrated curriculum that blends academic excellence with character development
          </p>
        </div>

        <Tabs defaultValue="primary" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="primary">Primary School</TabsTrigger>
            <TabsTrigger value="middle">Middle School</TabsTrigger>
            <TabsTrigger value="high">High School</TabsTrigger>
          </TabsList>

          <TabsContent value="primary" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary School (Class 5)</CardTitle>
                <CardDescription>Building a strong foundation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our primary education focuses on developing foundational skills in literacy, 
                  numeracy, and environmental awareness while instilling core values through:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>English-medium instruction with emphasis on language skills</li>
                  <li>Activity-based learning approach</li>
                  <li>Introduction to computers from Class 1</li>
                  <li>Daily value education classes</li>
                  <li>Arts, music, and physical education</li>
                </ul>
                <div className="rounded-lg overflow-hidden mt-4">
                  <img 
                    src={primaryImage}
                    alt="Primary classroom" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="middle" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Middle School (Classes 6-7)</CardTitle>
                <CardDescription>Expanding horizons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our middle school program broadens students' knowledge across subjects 
                  while developing critical thinking and collaborative skills through:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Integrated subject curriculum aligned with national standards</li>
                  <li>Practical science experiments and field trips</li>
                  <li>Digital literacy and computer applications</li>
                  <li>Sports, yoga, and physical fitness</li>
                  <li>Value-based projects and community service</li>
                </ul>
                <div className="rounded-lg overflow-hidden mt-4">
                  <img 
                    src={middleImage}
                    alt="Middle school classroom" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="high" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>High School (Classes 8-10)</CardTitle>
                <CardDescription>Preparing for excellence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our high school program prepares students for board examinations while 
                  developing leadership qualities and life skills through:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Rigorous academic preparation for board exams</li>
                  <li>Advanced science labs and computer education</li>
                  <li>Career guidance and counseling</li>
                  <li>Leadership development programs</li>
                  <li>Special coaching for competitive exams</li>
                </ul>
                <div className="rounded-lg overflow-hidden mt-4">
                  <img 
                    src={highImage}
                    alt="High school students" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default AcademicProgramsSection;
