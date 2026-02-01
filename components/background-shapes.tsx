"use client"

export function BackgroundShapes() {
  const shapes = [
    // Top section
    { top: "10%", left: "5%", size: "w-32 h-32", color: "bg-primary/5", delay: "0s", rotate: "12deg" },
    { top: "15%", right: "10%", size: "w-40 h-40", color: "bg-secondary/5", delay: "2s", rotate: "-15deg" },
    
    // Middle-top
    { top: "35%", left: "15%", size: "w-24 h-24", color: "bg-accent/5", delay: "1s", rotate: "45deg" },
    { top: "45%", right: "20%", size: "w-48 h-48", color: "bg-primary/5", delay: "3s", rotate: "-10deg" },
    
    // Middle-bottom
    { top: "60%", left: "8%", size: "w-36 h-36", color: "bg-secondary/5", delay: "0.5s", rotate: "20deg" },
    { top: "70%", right: "5%", size: "w-28 h-28", color: "bg-accent/5", delay: "2.5s", rotate: "-5deg" },
    
    // Bottom section
    { top: "85%", left: "12%", size: "w-44 h-44", color: "bg-primary/5", delay: "1.5s", rotate: "30deg" },
    { top: "90%", right: "15%", size: "w-32 h-32", color: "bg-secondary/5", delay: "3.5s", rotate: "-25deg" },
  ]

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute ${shape.size} ${shape.color} rounded-[2rem] animate-float backdrop-blur-[1px]`}
          style={{
            top: shape.top,
            left: shape.left || "auto",
            right: shape.right || "auto",
            animationDelay: shape.delay,
            transform: `rotate(${shape.rotate})`,
          }}
        />
      ))}
    </div>
  )
}
