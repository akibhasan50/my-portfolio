"use client"

import { Button } from "@/components/ui/button"
import { portfolioContent } from "@/lib/content"
import Link from "next/link"

export function Footer() {
  const { hero, ui } = portfolioContent
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 pt-20 pb-10 overflow-hidden relative transition-colors duration-300">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-32">
          {/* Brand & Copyright */}
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-black text-white dark:bg-white dark:text-black rounded-lg flex items-center justify-center font-bold text-xl font-mono transition-colors">
                A
              </div>
              <span className="text-xl font-bold tracking-tight">Akib Hasan</span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-500 text-sm hidden lg:block">
              © copyright Akib Hasan {currentYear}. All rights reserved.
            </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 flex-1">
            {/* Pages */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg mb-2">Pages</h3>
              <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Home</Link>
              <Link href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">About</Link>
              <Link href="#projects" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Projects</Link>
              <Link href="#experience" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Experience</Link>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg mb-2">Socials</h3>
              <a href={hero.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
              <a href={hero.github} target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">GitHub</a>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${hero.email}`} target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Email</a>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg mb-2">Legal</h3>
              <span className="text-zinc-600 dark:text-zinc-400 cursor-not-allowed">Privacy Policy</span>
              <span className="text-zinc-600 dark:text-zinc-400 cursor-not-allowed">Terms of Service</span>
              <span className="text-zinc-600 dark:text-zinc-400 cursor-not-allowed">Cookie Policy</span>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg mb-2">Contact</h3>
              <a href={`tel:${hero.phone}`} className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Call Me</a>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${hero.email}`} target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Send Email</a>
            </div>
          </div>

          {/* Mobile Copyright */}
          <p className="text-zinc-500 dark:text-zinc-500 text-sm lg:hidden mt-8">
            © copyright Akib Hasan {currentYear}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Big Text Background */}
      <div className="w-full overflow-hidden flex justify-center items-end opacity-5 dark:opacity-10 select-none pointer-events-none">
        <h1 className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-black dark:text-white whitespace-nowrap transition-colors">
          Akib Hasan
        </h1>
      </div>
    </footer>
  )
}
