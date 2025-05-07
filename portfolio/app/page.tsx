import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">John Doe</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A passionate full-stack developer specializing in building exceptional digital experiences.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg">
                  I'm a full-stack developer with over 5 years of experience building web applications. I specialize in
                  JavaScript, React, Node.js, and modern web technologies.
                </p>
                <p className="text-lg">
                  My journey in software development began at University of Technology where I earned my Bachelor's
                  degree in Computer Science. Since then, I've worked with startups and established companies to create
                  intuitive and efficient digital solutions.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new
                  technologies.
                </p>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-xl mb-2">5+</h3>
                    <p className="text-muted-foreground">Years of Experience</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-xl mb-2">50+</h3>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-xl mb-2">20+</h3>
                    <p className="text-muted-foreground">Happy Clients</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-xl mb-2">10+</h3>
                    <p className="text-muted-foreground">Technologies</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/resume.pdf" target="_blank">
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 container">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-featured online store with payment processing, inventory management, and admin dashboard."
              tags={["React", "Node.js", "MongoDB", "Stripe"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              projectUrl="#"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management application with real-time updates and team collaboration features."
              tags={["Next.js", "Firebase", "Tailwind CSS"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              projectUrl="#"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A responsive portfolio website showcasing projects and skills with a modern design."
              tags={["React", "Tailwind CSS", "Framer Motion"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              projectUrl="#"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="A weather application that provides real-time weather data and forecasts for locations worldwide."
              tags={["JavaScript", "OpenWeather API", "Chart.js"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              projectUrl="#"
            />
            <ProjectCard
              title="Social Media Platform"
              description="A social networking platform with user profiles, posts, comments, and real-time messaging."
              tags={["React", "Node.js", "Socket.io", "MongoDB"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              projectUrl="#"
            />
            <ProjectCard
              title="Fitness Tracker"
              description="A fitness tracking application that allows users to log workouts, track progress, and set goals."
              tags={["React Native", "Express", "PostgreSQL"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              projectUrl="#"
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                View More on GitHub <Github className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Frontend Development</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="HTML5" />
                  <SkillBadge name="CSS3" />
                  <SkillBadge name="JavaScript" />
                  <SkillBadge name="TypeScript" />
                  <SkillBadge name="React" />
                  <SkillBadge name="Next.js" />
                  <SkillBadge name="Tailwind CSS" />
                  <SkillBadge name="Redux" />
                  <SkillBadge name="Framer Motion" />
                  <SkillBadge name="Responsive Design" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6">Backend Development</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="Node.js" />
                  <SkillBadge name="Express" />
                  <SkillBadge name="MongoDB" />
                  <SkillBadge name="PostgreSQL" />
                  <SkillBadge name="Firebase" />
                  <SkillBadge name="REST API" />
                  <SkillBadge name="GraphQL" />
                  <SkillBadge name="AWS" />
                  <SkillBadge name="Docker" />
                  <SkillBadge name="CI/CD" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6">Tools & Others</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="Git" />
                  <SkillBadge name="GitHub" />
                  <SkillBadge name="VS Code" />
                  <SkillBadge name="Figma" />
                  <SkillBadge name="Jira" />
                  <SkillBadge name="Agile" />
                  <SkillBadge name="Testing" />
                  <SkillBadge name="SEO" />
                  <SkillBadge name="Performance Optimization" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="Problem Solving" />
                  <SkillBadge name="Communication" />
                  <SkillBadge name="Teamwork" />
                  <SkillBadge name="Time Management" />
                  <SkillBadge name="Adaptability" />
                  <SkillBadge name="Creativity" />
                  <SkillBadge name="Critical Thinking" />
                  <SkillBadge name="Leadership" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 container">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                    hello@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/johndoe
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/johndoe
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Twitter className="h-5 w-5 text-primary" />
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    twitter.com/johndoe
                  </a>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-muted-foreground">
                  I'm currently available for freelance work and full-time positions. If you have a project that you
                  want to get started, think you need my help with something, or just want to say hello, then get in
                  touch.
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 bg-muted/30">
        <div className="container text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
