"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioContent } from "@/lib/content"
import { Building2, Calendar, MapPin, CheckCircle2, Briefcase } from "lucide-react"

export function ExperienceSection() {
  const { experience } = portfolioContent

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg text-sm mb-4">
            <Briefcase className="w-4 h-4" />
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            {experience.title}
          </h2>
          <p className="text-lg text-muted-foreground">{experience.subtitle}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-8">
            {experience.list.map((exp, index) => (
              <div key={index} className="relative pl-16 md:pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-brutal-sm z-10">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                </div>

                <Card className="p-6 md:p-8 rounded-2xl border-2 border-border bg-card hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal group">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      {exp.companyDescription && (
                        <p className="text-sm text-muted-foreground mt-1 max-w-md">
                          {exp.companyDescription}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-xl shadow-brutal-sm border-2 border-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {exp.tech && exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, tIndex) => (
                        <Badge
                          key={tIndex}
                          variant="secondary"
                          className="px-3 py-1 rounded-lg bg-muted text-muted-foreground border border-border hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
