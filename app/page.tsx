'use client'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Bot, Sparkles, Zap, MessageSquare, Shield, Github } from 'lucide-react'
import Link from 'next/link'
import darklogo from '@/public/light-logo.png'
import lightlogo from '@/public/dark-logo.png'
import heroimage from '@/public/chancer-hero.png'
import demosvg from '@/public/demo-svg.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

import Image from 'next/image'
import { useTheme } from '@/components/theme-provider'
import { useEffect } from 'react'

function LogoComponent() {
  const { theme } = useTheme()
  
  return (
    <div className="relative h-10 w-40">
      <Image
        src={darklogo}
        alt="Chancer Fun Logo"
        fill
        className={`object-contain transition-opacity duration-300 ${
          theme === 'light' ? 'opacity-100' : 'opacity-0'
        }`}
        priority
      />
      <Image
        src={lightlogo}
        alt="Chancer Fun Logo"
        fill
        className={`object-contain transition-opacity duration-300 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
        priority
      />
    </div>
  )
}

export default function Home() {
    useEffect(() => {
      AOS.init({ duration: 1200, easing: 'ease-in-out', once: true })
    }, [])
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background relative overflow-hidden">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" data-aos="fade-down">
          <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center space-x-2">
              <LogoComponent />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-sm font-medium text-foreground hover:text-primary">
                Features
              </Link>
              <Link href="#demo" className="text-sm font-medium text-foreground hover:text-primary">
                Demo
              </Link>
               <ThemeToggle />
               <div><Button size="lg" className="w-full sm:w-auto"><Link href="/beta-product">Get Started</Link></Button></div>
            </nav>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative">
          <div className="container max-w-6xl mx-auto px-4 py-16 sm:py-24" data-aos="zoom-in">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                  Your AI Agents, <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    Unleashed
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-base sm:text-lg md:text-xl">
                  Create, deploy, and manage autonomous AI agents that work for you 24/7. 
                  Transform your workflow with intelligent automation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto"><Link href="/beta-product">Get Started</Link></Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/demo">Watch Demo</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col h-full overflow-hidden">
              <ContainerScroll
                titleComponent={
                  <>
                  </>
                }
              >
                <Image
                  src={heroimage}
                  alt="hero"
                  height={720}
                  width={1400}
                  className="mx-auto rounded-2xl object-cover h-full object-left-top"
                  draggable={false}
                />
              </ContainerScroll>
            </div>


          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative">
          <div className="container max-w-6xl mx-auto px-4 py-16 sm:py-24" data-aos="fade-up">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-foreground">
                Powerful AI Capabilities
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-base sm:text-lg">
                Empower your workflow with cutting-edge AI technology designed for the future.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="p-6 space-y-2">
                  <Bot className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Autonomous Agents</h3>
                  <p className="text-muted-foreground">
                    Deploy AI agents that work independently, learning and adapting to your needs.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="p-6 space-y-2">
                  <Sparkles className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Smart Learning</h3>
                  <p className="text-muted-foreground">
                    Advanced machine learning algorithms that improve over time with each interaction.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="p-6 space-y-2">
                  <MessageSquare className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Natural Communication</h3>
                  <p className="text-muted-foreground">
                    Human-like conversation capabilities for seamless interaction with your agents.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Demo Section */}
        <section id="demo" className="relative">
          <div className="container max-w-6xl mx-auto px-4 py-16 sm:py-24">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-foreground">
                  See Chancer Fun in Action
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Watch how our AI agents transform complex tasks into simple, automated workflows. 
                  Experience the future of work today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="w-full sm:w-auto">
                  <Link href="/beta-product"><Zap className="mr-2 h-4 w-4" />
                    Try Live Demo</Link>
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    View Documentation
                  </Button>
                </div>
              </div>
              <div className="rounded-xl border bg-card/50 backdrop-blur p-4 sm:p-6 shadow-lg">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover rounded-lg"
                >
                  <source src="../chancer-agent-working.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
        <section id="demo-2" className="relative">
          <div className="container max-w-6xl mx-auto px-4 py-16 sm:py-24" data-aos="fade-up"
            data-aos-duration="1500">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="rounded-xl border bg-card/50 backdrop-blur p-4 sm:p-6 shadow-lg">
                <Image
                  src={demosvg}
                  alt="Feature Illustration"
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-foreground">
                  Explore Powerful Features
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Discover how our tools can simplify your processes and elevate your productivity. 
                  Designed for efficiency, built for results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="w-full sm:w-auto">
                    <Zap className="mr-2 h-4 w-4" />
                    <Link href="/beta-product">Learn More</Link>
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                  <Link href="/beta-product">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* Footer */}
        <footer className="border-t bg-background/95 backdrop-blur" data-aos="fade-up">
          <div className="container max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col gap-8 md:flex-row md:justify-between">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-2">
                <LogoComponent />
                </Link>
                <p className="text-muted-foreground max-w-[300px] text-sm">
                  Building the future of autonomous AI agents, one task at a time.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Product</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#features" className="text-muted-foreground hover:text-primary text-sm">Features</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-muted-foreground hover:text-primary text-sm">API</Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Company</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-muted-foreground hover:text-primary text-sm">About</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-muted-foreground hover:text-primary text-sm">Blog</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-muted-foreground hover:text-primary text-sm">Careers</Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Legal</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-muted-foreground hover:text-primary text-sm">Privacy</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-muted-foreground hover:text-primary text-sm">Terms</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Chancer Fun. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <Link href="https://github.com" className="text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Shield className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

