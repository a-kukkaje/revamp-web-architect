
import { Link } from "react-router-dom"
import { School, Mail, Phone, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <School className="h-6 w-6" />
              <span>SSVK Chokkady</span>
            </Link>
            <p className="text-sm">
              A value-based residential school providing spiritual, academic, and cultural education in a serene natural setting.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:underline">About Us</Link>
              </li>
              <li>
                <Link to="/academics" className="text-sm hover:underline">Academics</Link>
              </li>
              <li>
                <Link to="/campus-life" className="text-sm hover:underline">Campus Life</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-sm hover:underline">Admissions</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:underline">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:underline">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <p className="text-sm">
                  Chokkady Post, Sullia Taluk, Dakshina Kannada, Karnataka – 574212
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:ssvkchokkady@gmail.com" className="text-sm hover:underline">
                  ssvkchokkady@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Phone Numbers</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Admin Office:</p>
                  <a href="tel:+916360099621" className="text-sm hover:underline">+91 63600 99621</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <div>
                  <p className="text-sm font-medium">School Office:</p>
                  <a href="tel:+918792032722" className="text-sm hover:underline">+91 87920 32722</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Boys' Hostel:</p>
                  <a href="tel:+917019176539" className="text-sm hover:underline">+91 70191 76539</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Girls' Hostel:</p>
                  <a href="tel:+917975124942" className="text-sm hover:underline">+91 79751 24942</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} Shri Sathya Sai Vidya Kendra, Chokkady. All rights reserved.</p>
          <p className="mt-1">Managed by: Bhagawan Shri Sathya Sai Seva Trust</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
