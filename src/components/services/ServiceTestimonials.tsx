import { ServiceTestimonialsContent } from "../../../content/types";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface ServiceTestimonialsProps extends ServiceTestimonialsContent {
  // This interface extends ServiceTestimonialsContent with any additional props if needed
}

export function ServiceTestimonials({ title, testimonials, display }: ServiceTestimonialsProps) {
  if (display === "single" && testimonials.length > 0) {
    const testimonial = testimonials[0];
    return (
      <section className="py-16 bg-stone-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <Card className="border-2 border-logicwind-red">
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-logicwind-red mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl text-deep-navy mb-6 font-medium leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-deep-navy">{testimonial.author}</div>
                    <div className="text-sm text-neutral-grey">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  if (display === "accordion") {
    return (
      <section className="py-16 bg-stone-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {testimonials.map((testimonial, index) => (
                <AccordionItem key={index} value={`testimonial-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-deep-navy">{testimonial.author}</div>
                        <div className="text-sm text-neutral-grey">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 pl-14">
                      <Quote className="w-8 h-8 text-logicwind-red mb-4" />
                      <blockquote className="text-lg text-deep-navy leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  }

  if (display === "grid") {
    return (
      <section className="py-16 bg-stone-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-logicwind-red mb-4" />
                  <blockquote className="text-deep-navy mb-6 flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-deep-navy text-sm">{testimonial.author}</div>
                      <div className="text-xs text-neutral-grey">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (display === "carousel") {
    return (
      <section className="py-16 bg-stone-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex gap-6 overflow-x-auto pb-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="min-w-[400px] md:min-w-[500px]">
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-logicwind-red mb-4" />
                    <blockquote className="text-deep-navy mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-deep-navy text-sm">{testimonial.author}</div>
                        <div className="text-xs text-neutral-grey">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
}