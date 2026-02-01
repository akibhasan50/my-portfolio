"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Folder } from "lucide-react"
import { portfolioContent } from "@/lib/content"

export function ProjectsSection() {
  const { projects, ui } = portfolioContent
  const featuredProjects = projects.list.filter((p) => p.featured)
  const otherProjects = projects.list.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg text-sm mb-4">
            {projects.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            {projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {projects.description}
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group rounded-2xl overflow-hidden border-2 border-border bg-card hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-brutal"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="p-6 pt-4">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg border ${
                        i % 3 === 0
                          ? "bg-primary/10 text-primary border-primary/20"
                          : i % 3 === 1
                            ? "bg-secondary/10 text-secondary border-secondary/20"
                            : "bg-accent/10 text-accent border-accent/20"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.live && (
                    <Button
                      size="sm"
                      className="flex-1 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-brutal-sm border-2 border-foreground transition-all duration-200 hover:-translate-y-0.5"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {ui.buttons.demo}
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-xl border-2 border-foreground bg-card font-semibold shadow-brutal-sm transition-all duration-200 hover:-translate-y-0.5"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {ui.buttons.code}
                      </a>
                    </Button>
                  )}
                  {!project.live && !project.github && (
                    <span className="text-sm text-muted-foreground italic">Enterprise project</span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground">{projects.moreWork}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {otherProjects.map((project) => (
                <Card
                  key={project.id}
                  className="p-6 rounded-xl border-2 border-border bg-card hover:border-primary transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Folder className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
