import ImageCarousel from "./ImageCarousel";
import { MapPin, School, Book } from "lucide-react";

// Import images from assets
import mandiraImg from '../../assets/Mandira.jpg';
import photoFrameImg from '../../assets/photoframe.jpg';

const CampusHighlightsSection = () => {
  const campusImages = [
    {
      src: mandiraImg,
      alt: "Mandira"
    },
    {
      src: photoFrameImg,
      alt: "Natural learning environment"
    },
    {
      src: mandiraImg,
      alt: "Campus wildlife and nature"
    },
    {
      src: mandiraImg,
      alt: "School building"
    },
    {
      src: mandiraImg,
      alt: "School playground"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Campus Highlights</h2>

        <div className="mb-12">
          <ImageCarousel images={campusImages} />
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#FEC6A1] flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-white fill-current" />
            </div>
            <h3 className="font-semibold mb-2">Natural Setting</h3>
            <p className="text-gray-600">Nestled in the serene hills of Dakshina Kannada</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#E5DEFF] flex items-center justify-center mb-4">
              <School className="h-6 w-6 text-white fill-current" />
            </div>
            <h3 className="font-semibold mb-2">Modern Facilities</h3>
            <p className="text-gray-600">Smart classrooms and well-equipped laboratories</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#FFD1E3] flex items-center justify-center mb-4">
              <Book className="h-6 w-6 text-white fill-current" />
            </div>
            <h3 className="font-semibold mb-2">Spiritual Growth</h3>
            <p className="text-gray-600">On-campus Mandir for daily prayers and meditation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusHighlightsSection;
