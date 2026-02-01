"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, Heart, Twitter } from "lucide-react"
import { portfolioContent } from "@/lib/content"

export function Footer() {
  const { hero, ui } = portfolioContent

  return (
    <footer className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-xl rotate-12 animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/10 rounded-xl -rotate-12 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <Card className="p-12 md:p-16 rounded-2xl shadow-brutal border-2 border-foreground bg-card">
          {/* Header */}
          <div className="mb-10">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg text-sm mb-4">
              {ui.footer.title}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight text-balance">
              {ui.footer.cta}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
              {ui.footer.description}
            </p>
          </div>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 font-bold text-lg shadow-brutal border-2 border-foreground transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl mb-10"
          >
            <a href={`mailto:${hero.email}`}>
              <Mail className="w-5 h-5 mr-3" />
              {ui.buttons.startConversation}
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-10">
            <a
              href={hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-background rounded-xl border-2 border-border hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-sm group"
            >
              <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-background rounded-xl border-2 border-border hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-sm group"
            >
              <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href={`tel:${hero.phone}`}
              className="p-4 bg-background rounded-xl border-2 border-border hover:border-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-sm group"
              aria-label="Phone Number"
            >
              <Phone className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            {ui.footer.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Copyright */}
        <div className="mt-10">
          <p className="text-muted-foreground font-medium flex items-center justify-center gap-2">
            {ui.footer.copyright}
            <Heart className="w-4 h-4 text-secondary fill-secondary" />
          </p>
        </div>
      </div>
    </footer>
  )
}
