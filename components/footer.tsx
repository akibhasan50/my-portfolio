"use client"

import { Button } from "@/components/ui/button"
import { portfolioContent } from "@/lib/content"
import Link from "next/link"
import { Send, Loader2 } from "lucide-react"
import { useActionState, useEffect, useRef } from "react"
import { sendEmail } from "@/app/actions"
import { toast } from "sonner"

export function Footer() {
  const { hero, ui } = portfolioContent
  const currentYear = new Date().getFullYear()
  const [state, action, isPending] = useActionState(sendEmail, { success: false, message: "" })
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message)
        formRef.current?.reset()
      } else {
        toast.error(state.message)
      }
    }
  }, [state])

  return (
    <footer className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 pt-20 pb-10 overflow-hidden relative transition-colors duration-300">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          {/* Left Column: Brand & Links */}
          <div className="flex flex-col gap-12">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black text-white dark:bg-white dark:text-black rounded-lg flex items-center justify-center font-bold text-xl font-mono transition-colors">
                  A
                </div>
                <span className="text-xl font-bold tracking-tight">Akib Hasan</span>
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-sm">
                Building digital experiences with clean code and user-centric design.
              </p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
               {/* Pages */}
               <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-lg mb-2">Pages</h3>
                <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Home</Link>
                <Link href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">About</Link>
                <Link href="#projects" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Projects</Link>
                <Link href="#experience" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Experience</Link>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-lg mb-2">Contact</h3>
                <a href={`tel:${hero.phone}`} className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Call Me</a>
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${hero.email}`} target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Send Email</a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative group perspective-1000 w-full">
            <div className="relative bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-[2rem] p-8 md:p-10 shadow-xl overflow-hidden">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">Send a Message</h3>
                    <p className="text-sm text-muted-foreground">
                      Have a project in mind or just want to say hi?
                    </p>
                  </div>
                  <form className="space-y-4" action={action} ref={formRef}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="footer-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground">Your Name</label>
                        <input name="name" id="footer-name" className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors" placeholder="John Doe" required />
                        {state.errors?.name && <p className="text-xs text-red-500">{state.errors.name[0]}</p>}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="footer-email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground">Your Email</label>
                        <input name="email" id="footer-email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors" placeholder="john@example.com" required />
                        {state.errors?.email && <p className="text-xs text-red-500">{state.errors.email[0]}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="footer-message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground">Your Message</label>
                      <textarea name="message" id="footer-message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-colors" placeholder="Tell me about your project..." required />
                      {state.errors?.message && <p className="text-xs text-red-500">{state.errors.message[0]}</p>}
                    </div>
                    <Button type="submit" disabled={isPending} className="w-full h-11 text-base shadow-lg hover:shadow-xl transition-all duration-300">
                      {isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-200 dark:border-zinc-800">
           <p className="text-zinc-500 dark:text-zinc-500 text-sm text-center md:text-left">
              © copyright Akib Hasan {currentYear}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href={hero.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors text-sm">LinkedIn</a>
              <a href={hero.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors text-sm">GitHub</a>
            </div>
        </div>
      </div>

      {/* Big Text Background */}
      <div className="w-full overflow-hidden flex justify-center items-end opacity-5 dark:opacity-10 select-none pointer-events-none absolute bottom-0 left-0 z-0">
        <h1 className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-black dark:text-white whitespace-nowrap transition-colors">
          Akib Hasan
        </h1>
      </div>
    </footer>
  )
}
