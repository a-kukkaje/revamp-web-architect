
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PageHeader from "@/components/layout/PageHeader"
import ContactFormSection from "@/components/sections/ContactFormSection"
import { MapPin, Mail, Phone } from "lucide-react"

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you"
        backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <p className="text-gray-600">
                      Bhagawan Sri Sathya Sai Seva Trust,<br />
                      Chokkady Post, Sullia Taluk,<br />
                      Dakshina Kannada, Karnataka – 574212
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:ssvkchokkady@gmail.com" className="hover:text-primary transition-colors">
                        ssvkchokkady@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone Numbers</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        <span className="font-medium">Admin Office:</span>{" "}
                        <a href="tel:+916360099621" className="hover:text-primary transition-colors">
                          +91 63600 99621
                        </a>
                      </li>
                      <li>
                        <span className="font-medium">School Office:</span>{" "}
                        <a href="tel:+918792032722" className="hover:text-primary transition-colors">
                          +91 87920 32722
                        </a>
                      </li>
                      <li>
                        <span className="font-medium">Boys' Hostel:</span>{" "}
                        <a href="tel:+917019176539" className="hover:text-primary transition-colors">
                          +91 70191 76539
                        </a>
                      </li>
                      <li>
                        <span className="font-medium">Girls' Hostel:</span>{" "}
                        <a href="tel:+917975124942" className="hover:text-primary transition-colors">
                          +91 79751 24942
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31100.31898586534!2d75.38152542227913!3d12.57835946469224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4f2ebf763bcb3%3A0x576aa10ba247e547!2sSullia%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1682357610979!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="SSVK Chokkady Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <ContactFormSection />
      <Footer />
    </div>
  )
}

export default Contact
