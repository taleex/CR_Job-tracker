import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function HeroSectionRightContent() {
  return (
    <section className="hero-section-right-content">
      <Carousel>
            <CarouselContent>
                <CarouselItem><img src="https://placehold.co/600x400" alt="Image 1" /></CarouselItem>
                <CarouselItem><img src="https://placehold.net/800x600.png" alt="Image 2" /></CarouselItem>
                <CarouselItem><img src="https://placehold.co/600x400" alt="Image 3" /></CarouselItem>
            </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
    </section>
  )
}
