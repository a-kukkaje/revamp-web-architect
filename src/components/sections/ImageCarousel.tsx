
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  aspectRatio?: number;
}

const ImageCarousel = ({ images, aspectRatio = 16 / 9 }: ImageCarouselProps) => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="border-none">
              <CardContent className="p-0">
                <AspectRatio ratio={aspectRatio}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </AspectRatio>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;
