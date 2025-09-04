import { ServiceTeamContent } from "../../../content/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ServiceTeamProps extends ServiceTeamContent {}

export function ServiceTeam({ title, subtitle, members, structure }: ServiceTeamProps) {
  if (structure === "individuals") {
    return (
      <section className="py-16 bg-pure-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
            <p className="text-lg text-neutral-grey max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {members.map((member, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-lg">{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl text-deep-navy">
                    {member.name}
                  </CardTitle>
                  <p className="text-logicwind-red font-semibold">
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-grey mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
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

  if (structure === "collective") {
    return (
      <section className="py-16 bg-pure-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
            <p className="text-lg text-neutral-grey max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex flex-wrap justify-center gap-4">
                {members.map((member, index) => (
                  <div key={index} className="text-center">
                    <Avatar className="w-16 h-16 mb-2">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-semibold text-deep-navy">{member.name}</div>
                    <div className="text-xs text-logicwind-red">{member.role}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {members.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-deep-navy">{member.name}</h3>
                        <p className="text-sm text-logicwind-red">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-grey mb-3">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
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

  if (structure === "expertise-grid") {
    return (
      <section className="py-16 bg-pure-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {title}
            </h2>
            <p className="text-lg text-neutral-grey max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {members.map((member, index) => (
              <Card key={index} className="mb-6">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex items-center gap-4 md:min-w-[300px]">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="text-lg">{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-semibold text-deep-navy">{member.name}</h3>
                        <p className="text-logicwind-red font-semibold">{member.role}</p>
                        <p className="text-sm text-neutral-grey mt-2">{member.bio}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-deep-navy mb-3">Core Expertise</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs justify-center">
                            {skill}
                          </Badge>
                        ))}
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

  return null;
}