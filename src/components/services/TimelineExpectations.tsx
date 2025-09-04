import { TimelineExpectationsContent } from "../../../content/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle } from "lucide-react";

interface TimelineExpectationsProps extends TimelineExpectationsContent {}

export function TimelineExpectations({ title, phases, totalDuration, display }: TimelineExpectationsProps) {
  if (display === "linear") {
    return (
      <section className="py-16 bg-stone-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
            <Badge variant="outline" className="text-lg px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Total Duration: {totalDuration}
            </Badge>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {phases.map((phase, index) => (
                <div key={index} className="flex-1 relative">
                  {index < phases.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 w-8 h-0.5 bg-logicwind-red transform translate-x-4"></div>
                  )}
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-logicwind-red rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-deep-navy font-bold">{index + 1}</span>
                      </div>
                      <CardTitle className="text-lg text-deep-navy">
                        {phase.phase}
                      </CardTitle>
                      <Badge variant="secondary" className="mx-auto">
                        {phase.duration}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {phase.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-logicwind-red flex-shrink-0" />
                            <span className="text-sm text-deep-navy">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (display === "phases") {
    return (
      <section className="py-16 bg-stone-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
            <Badge variant="outline" className="text-lg px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Total Duration: {totalDuration}
            </Badge>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {phases.map((phase, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-logicwind-red rounded-full flex items-center justify-center">
                      <span className="text-deep-navy font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-deep-navy">
                        {phase.phase}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {phase.duration}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-14">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-logicwind-red flex-shrink-0" />
                        <span className="text-sm text-deep-navy">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
}