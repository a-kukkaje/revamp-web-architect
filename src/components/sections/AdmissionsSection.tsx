
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Calendar } from "lucide-react"

const AdmissionsSection = () => {
  const admissionProcess = [
    {
      step: "Step 1",
      title: "Application Submission",
      description: "Complete and submit the online application form with required documents."
    },
    {
      step: "Step 2",
      title: "Entrance Assessment",
      description: "Students take a written assessment and participate in an interview."
    },
    {
      step: "Step 3",
      title: "Parent Interview",
      description: "Parents/guardians attend an interview to understand our educational philosophy."
    },
    {
      step: "Step 4",
      title: "Admission Decision",
      description: "Results are communicated within 2 weeks of completing all assessments."
    },
    {
      step: "Step 5",
      title: "Fee Payment & Enrollment",
      description: "Upon acceptance, complete the admission process by paying the required fees."
    }
  ]

  const faqs = [
    {
      question: "What are the age requirements for admission?",
      answer: "For Class 1, children should be at least 5.5 years old as of June 1st of the academic year. For other classes, appropriate age requirements apply."
    },
    {
      question: "What documents are required for admission?",
      answer: "Required documents include birth certificate, previous school records, transfer certificate (for those transferring from another school), passport-size photographs, and Aadhaar card."
    },
    {
      question: "Is there an entrance exam?",
      answer: "Yes, we conduct a basic assessment to understand the child's current knowledge level and learning abilities. This helps us provide appropriate support upon admission."
    },
    {
      question: "Do you offer scholarships?",
      answer: "Yes, we offer merit-based and need-based scholarships to deserving students. Please inquire at the admissions office for more details."
    },
    {
      question: "What is the teacher-to-student ratio?",
      answer: "We maintain a low teacher-to-student ratio of approximately 1:20 to ensure personalized attention for each student."
    },
    {
      question: "What curriculum do you follow?",
      answer: "We follow a curriculum aligned with national education standards while integrating value education and holistic development principles."
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Admissions 2025-26</h2>
          <p className="text-lg text-gray-600 mb-6">
            Join our community of learners in pursuit of academic excellence and character development
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="gap-2">
              <Calendar className="h-5 w-5" />
              Apply Now
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Admission Process</h3>
            <div className="space-y-6">
              {admissionProcess.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img 
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353" 
              alt="Students studying" 
              className="rounded-lg shadow-md h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default AdmissionsSection
