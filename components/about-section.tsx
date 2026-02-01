"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, Target, Zap, Heart, Brain } from "lucide-react"
import { portfolioContent } from "@/lib/content"

export function AboutSection() {
  const { about } = portfolioContent

  const statIcons = [Target, Zap, Heart, Brain]

  return (
    <section id="about" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-xl rotate-12 animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-xl -rotate-12 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg text-sm mb-4">
                {about.title}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                Crafting Digital <span className="text-primary">Experiences</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {about.description}
              </p>
            </div>

            <div className="space-y-4">
              {about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed pt-1">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats Card */}
          <Card className="p-8 rounded-2xl shadow-brutal border-2 border-foreground bg-card">
            <div className="grid grid-cols-2 gap-6">
              {about.stats.map((stat, index) => {
                const Icon = statIcons[index]
                return (
                  <div
                    key={index}
                    className="p-6 bg-background rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal-sm group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
