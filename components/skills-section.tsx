"use client"

import { Card } from "@/components/ui/card"
import { portfolioContent } from "@/lib/content"
import { useState } from "react"
import { Code, Palette, Server } from "lucide-react"

export function SkillsSection() {
  const { skills } = portfolioContent
  const [activeCategory, setActiveCategory] = useState(0)

  const categoryIcons = [Code, Palette, Server]

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case "Expert":
        return "bg-primary text-primary-foreground"
      case "Advanced":
        return "bg-secondary text-secondary-foreground"
      case "Proficient":
        return "bg-accent text-accent-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg text-sm mb-4">
            {skills.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            {skills.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skills.categories.map((category, index) => {
            const Icon = categoryIcons[index] || Code
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border-2 font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-primary text-primary-foreground border-primary shadow-brutal-sm"
                    : "bg-card text-foreground border-border hover:border-primary hover:-translate-y-1"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.categories[activeCategory].skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="p-5 border-2 border-border bg-card hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal-sm rounded-xl group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border-2 border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <span className={`px-2 py-1 text-xs font-bold rounded-md ${getExpertiseColor(skill.expertise)}`}>
                  {skill.expertise}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {skills.stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center border-2 border-border bg-card hover:border-primary transition-all duration-300 hover:-translate-y-1 rounded-xl"
            >
              <div className="text-sm font-bold text-primary mb-2">{stat.title}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
