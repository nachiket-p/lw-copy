import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Calendar, Clock } from "lucide-react";
import type { ContactPageContent } from "../../../content/types";

interface ContactInfoProps {
  content: Omit<ContactPageContent, 'hero'>;
}

export function ContactInfo({ content }: ContactInfoProps) {
  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">Get in Touch</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium text-foreground">Location</div>
                <div className="text-muted-foreground">{content.contactInfo.location.city}, {content.contactInfo.location.country}</div>
                <div className="text-muted-foreground">{content.contactInfo.location.note}</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium text-foreground">Email</div>
                <div className="text-muted-foreground">{content.contactInfo.email}</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium text-foreground">Response Time</div>
                <div className="text-muted-foreground">{content.contactInfo.responseTime}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-8">
          <div className="flex items-center mb-4">
            <Calendar className="w-6 h-6 text-primary mr-3" />
            <h3 className="text-xl font-bold text-foreground">{content.scheduleCall.title}</h3>
          </div>
          
          <p className="text-muted-foreground mb-6">
            {content.scheduleCall.description}
          </p>
          
          <Button size="lg" className="w-full">
            {content.scheduleCall.ctaText}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">{content.nextSteps.title}</h3>
          
          <div className="space-y-4">
            {content.nextSteps.steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                  {index + 1}
                </div>
                <div>
                  <div className="font-medium text-foreground">{step.title}</div>
                  <div className="text-sm text-muted-foreground">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}