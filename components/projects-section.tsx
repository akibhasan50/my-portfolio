"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react"
import { portfolioContent } from "@/lib/content"
import { motion } from "framer-motion"

const accents = [
  {
    band: "from-primary via-secondary to-accent",
    ghost: "text-primary/15",
    chip: "bg-primary/10 text-primary border-primary/25",
  },
  {
    band: "from-secondary via-accent to-primary",
    ghost: "text-secondary/15",
    chip: "bg-secondary/10 text-secondary border-secondary/25",
  },
  {
    band: "from-accent via-primary to-secondary",
    ghost: "text-accent/20",
    chip: "bg-accent/10 text-accent border-accent/25",
  },
  {
    band: "from-primary via-accent to-secondary",
    ghost: "text-primary/15",
    chip: "bg-primary/10 text-primary border-primary/25",
  },
]

const getMonogram = (title: string) =>
  title
    .split(/[\s/]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

export function ProjectsSection() {
  const { projects, ui } = portfolioContent
  const featuredProjects = projects.list.filter((p) => p.featured)
  const otherProjects = projects.list.filter((p) => !p.featured)
  const [heroProject, ...gridProjects] = featuredProjects

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  })

  return (
    <section id="projects" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            {projects.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            {projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {projects.description}
          </p>
        </div>

        {/* Flagship Hero Card */}
        {heroProject && (
          <motion.article
            {...fadeUp(0)}
            className="group relative mb-8 overflow-hidden rounded-3xl border-2 border-border bg-card shadow-brutal shadow-brutal-hover transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="flex flex-col gap-6 p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-black uppercase tracking-widest shadow-brutal-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    Flagship
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(heroProject.id).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {heroProject.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {heroProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {heroProject.tech.map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-bold rounded-lg border ${accents[i % accents.length].chip}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 items-center min-h-[40px]">
                  {heroProject.live && (
                    <Button
                      size="sm"
                      className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-brutal-sm border-2 border-foreground transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
                      asChild
                    >
                      <a href={heroProject.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {ui.buttons.demo}
                      </a>
                    </Button>
                  )}
                  {heroProject.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-xl border-2 border-foreground bg-card font-bold shadow-brutal-sm transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
                      asChild
                    >
                      <a href={heroProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {ui.buttons.code}
                      </a>
                    </Button>
                  )}
                  {!heroProject.live && !heroProject.github && (
                    <span className="text-sm font-mono text-muted-foreground italic">
                      Enterprise project
                    </span>
                  )}
                </div>
              </div>

              {/* Visual Panel */}
              <div className={`relative min-h-[300px] lg:min-h-full overflow-hidden bg-gradient-to-br ${accents[0].band}`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:28px_28px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent_55%)]" />

                {/* Giant monogram */}
                <span className="absolute inset-0 flex items-center justify-center text-[10rem] md:text-[12rem] font-black text-white/25 leading-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  {getMonogram(heroProject.title)}
                </span>

                {/* Floating tech pills */}
                {heroProject.tech.slice(0, 4).map((tech, i) => {
                  const positions = [
                    "top-8 left-8",
                    "top-16 right-10",
                    "bottom-14 left-12",
                    "bottom-8 right-14",
                  ]
                  return (
                    <span
                      key={tech}
                      className={`absolute ${positions[i]} animate-float px-3 py-1.5 rounded-lg bg-white/90 dark:bg-black/80 text-foreground text-xs font-bold shadow-brutal-sm border border-white/50 dark:border-white/10`}
                      style={{ animationDelay: `${i * 0.7}s` }}
                    >
                      {tech}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Bottom accent bar */}
            <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accents[0].band}`} />
          </motion.article>
        )}

        {/* Featured Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {gridProjects.map((project, index) => {
            const accent = accents[(index + 1) % accents.length]
            return (
              <motion.article
                key={project.id}
                {...fadeUp(0.1 + index * 0.1)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-border bg-card shadow-brutal-sm shadow-brutal-hover transition-all duration-300 hover:-translate-y-2"
              >
                {/* Visual band */}
                <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${accent.band}`}>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:22px_22px]" />
                  <span className={`absolute -right-3 -bottom-8 text-[7rem] font-black leading-none ${accent.ghost} select-none transition-transform duration-500 group-hover:-translate-y-1.5`}>
                    {String(project.id).padStart(2, "0")}
                  </span>
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-card border-2 border-foreground/10 flex items-center justify-center font-black text-sm text-foreground shadow-brutal-sm transition-transform duration-300 group-hover:rotate-6 group-hover:-translate-y-0.5">
                    {getMonogram(project.title)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 gap-4 p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 shrink-0 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 5).map((tech, i) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-md border ${accents[(index + i) % accents.length].chip}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-md border border-border text-muted-foreground">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 items-center min-h-[36px] pt-1 border-t border-border/60 mt-auto">
                    {project.live && (
                      <Button
                        size="sm"
                        className="flex-1 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-brutal-sm border-2 border-foreground transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
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
                        className="flex-1 rounded-xl border-2 border-foreground bg-card font-bold shadow-brutal-sm transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          {ui.buttons.code}
                        </a>
                      </Button>
                    )}
                    {!project.live && !project.github && (
                      <span className="text-xs font-mono text-muted-foreground italic">
                        Enterprise project
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-10 bg-primary" />
              <h3 className="text-2xl font-bold text-foreground">{projects.moreWork}</h3>
              <div className="flex-1 h-[2px] bg-border" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {otherProjects.map((project, index) => {
                const href = project.live || project.github || ""
                const Wrapper = href ? motion.a : motion.div
                return (
                <Wrapper
                  key={project.id}
                  {...fadeUp(index * 0.1)}
                  {...(href
                    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-start gap-4 p-6 rounded-xl border-2 border-border bg-card shadow-brutal-sm shadow-brutal-hover transition-all duration-300 hover:-translate-y-1 hover:border-primary"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border-2 border-primary/20 flex items-center justify-center flex-shrink-0 font-black text-sm text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:rotate-6">
                    {getMonogram(project.title)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <ArrowUpRight className="w-4 h-4 shrink-0 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-[11px] font-medium bg-muted text-muted-foreground rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Wrapper>
              )
              })}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
