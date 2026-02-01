"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioContent } from "@/lib/content"
import { Building2, Calendar, MapPin, CheckCircle2, Briefcase } from "lucide-react"
import { TracingBeam } from "@/components/ui/tracing-beam"
import Image from "next/image"

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
        <TracingBeam className="px-6 max-w-5xl">
          <div className="space-y-12 pl-4">
            {experience.list.map((exp, index) => (
              <div key={index} className="relative">
                <Card className="p-6 md:p-8 rounded-2xl border-2 border-border bg-card hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal group">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    {/* Logo Column */}
                    <div className="shrink-0">
                      {exp.logo ? (
                        <div className="w-16 h-16 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-border/50 flex items-center justify-center p-2">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Building2 className="w-8 h-8 text-primary" />
                        </div>
                      )}
                    </div>

                    {/* Content Column */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                            {exp.position}
                          </h3>
                          <div className="text-lg font-semibold text-primary flex items-center gap-2">
                            {exp.company}
                          </div>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-2 mt-2 md:mt-0">
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/50 text-secondary-foreground text-sm font-medium rounded-lg border border-border/50">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.duration}
                          </span>
                          {exp.location && (
                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {exp.companyDescription && (
                        <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-4 py-1">
                          {exp.companyDescription}
                        </p>
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
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
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
        </TracingBeam>
      </div>
    </section>
  )
}
