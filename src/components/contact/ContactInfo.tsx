import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Calendar, Clock } from "lucide-react";

export function ContactInfo() {
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
                <div className="text-muted-foreground">Surat, India</div>
                <div className="text-muted-foreground">Serving clients worldwide</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium text-foreground">Email</div>
                <div className="text-muted-foreground">hello@logicwind.com</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium text-foreground">Response Time</div>
                <div className="text-muted-foreground">Within 24 hours</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-8">
          <div className="flex items-center mb-4">
            <Calendar className="w-6 h-6 text-primary mr-3" />
            <h3 className="text-xl font-bold text-foreground">Schedule a Call</h3>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Prefer to talk directly? Schedule a free 30-minute discovery call with our strategy team.
          </p>
          
          <Button size="lg" className="w-full">
            Book Discovery Call
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">What Happens Next?</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                1
              </div>
              <div>
                <div className="font-medium text-foreground">We Review Your Inquiry</div>
                <div className="text-sm text-muted-foreground">Our team reviews your project details within 24 hours.</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                2
              </div>
              <div>
                <div className="font-medium text-foreground">Discovery Call</div>
                <div className="text-sm text-muted-foreground">We schedule a call to understand your goals and requirements.</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                3
              </div>
              <div>
                <div className="font-medium text-foreground">Custom Proposal</div>
                <div className="text-sm text-muted-foreground">We create a tailored proposal with timeline and fixed pricing.</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}