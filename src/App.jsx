import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Linkedin, Instagram, Music } from 'lucide-react'

function App() {
  const [heroContent, setHeroContent] = useState(0)
  const { scrollYProgress } = useScroll()
  const carouselRef = useRef(null)

  // Hero animation content variants
  const heroVariants = [
    { type: 'text', content: 'IMPACT FOREVER.' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?w=400&q=80', rotation: 15 },
    { type: 'text', content: 'STRATEGY FOREVER.' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80', rotation: -12 },
    { type: 'text', content: 'DESIGN FOREVER.' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80', rotation: 18 },
  ]

  // Rotate hero content every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroContent((prev) => (prev + 1) % heroVariants.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // Client list data
  const clients = [
    ['Hill Hall Hotel', 'Niva'],
    ['Bila Bennett', 'Knead'],
    ['Xaira Therapeutict', 'Fieldnotes'],
    ['Uplini', 'Factor'],
    ['Truestorh AG', 'Dria Ventures'],
    ['Thoughtiue', 'DadiGear'],
    ['TargetMarkes', 'Casap'],
    ['Talkiatrrg', 'Ballerg'],
    ['Sleepawayg', 'Animal Charits Evaluatorz'],
    ['Soracoo', 'Art Philip'],
    ['Slatl Digital', 'Allianci To Protect Home Care'],
    ['Marvak', 'AfterHoub'],
    ['Mutinp Branding', 'WhiteMateb Expresd'],
    ['Mighta Entertainmery', 'Vebu Labs'],
    ['Guidt Protecttiqk', 'The Brann Hoteb'],
  ]

  // Project cards data
  const projects = [
    { name: 'Vibi', color: 'bg-orange-500', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80' },
    { name: 'Just Salad', color: 'bg-blue-500', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80' },
    { name: 'PBS / North Carolina', color: 'bg-purple-600', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
    { name: 'Titan', color: 'bg-red-500', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80' },
    { name: 'Betterment', color: 'bg-cyan-500', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
        <nav className="container mx-auto max-w-7xl px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-light tracking-tight">
            PAPERTIGER
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#expertise" className="text-sm hover:opacity-60 transition-opacity">Expertise</a>
            <a href="#clients" className="text-sm hover:opacity-60 transition-opacity">Clients</a>
            <a href="#studio" className="text-sm hover:opacity-60 transition-opacity">Studio</a>
            <a href="#news" className="text-sm hover:opacity-60 transition-opacity">News</a>
            <button className="border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition-all">
              CONTACT
            </button>
          </div>
        </nav>
      </header>

      {/* HERO SECTION - Animated Text */}
      <section className="pt-32 pb-20 px-4 md:px-6 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <h1 className="font-condensed text-ultra-condensed uppercase text-7xl md:text-[10rem] lg:text-[14rem] leading-[0.85] font-black tracking-tighter">
              CLARITY FIRST.
            </h1>
            <div className="font-condensed text-ultra-condensed uppercase text-7xl md:text-[10rem] lg:text-[14rem] leading-[0.85] font-black tracking-tighter flex items-center gap-4 md:gap-8 flex-wrap">
              <AnimatePresence mode="wait">
                {heroVariants[heroContent].type === 'text' ? (
                  <motion.span
                    key={`text-${heroContent}`}
                    initial={{ opacity: 0, y: 50, rotate: -5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, y: -50, rotate: 5 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  >
                    {heroVariants[heroContent].content}
                  </motion.span>
                ) : (
                  <motion.img
                    key={`img-${heroContent}`}
                    src={heroVariants[heroContent].src}
                    alt="Design work"
                    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotate: heroVariants[heroContent].rotation 
                    }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="inline-block h-32 md:h-48 lg:h-64 w-auto object-cover rounded-lg shadow-2xl"
                    style={{ 
                      display: 'inline-block',
                      verticalAlign: 'middle',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <div className="space-y-2 font-mono text-sm">
              <div className="font-semibold">18+ years</div>
              <div className="font-semibold">700+ projects</div>
              <div className="font-semibold">2 days/no incident</div>
              <div className="font-semibold">0 scrubs</div>
            </div>
            <div className="text-sm leading-relaxed">
              Paper Tiger is a strategic design partner helping brands win new customers, engage users, and infuriate their competition.
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS SHOWCASE */}
      <section id="clients" className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-light mb-12">Selected Clients</h2>
          <div className="font-mono text-sm md:text-base space-y-2">
            {clients.map((pair, idx) => (
              <div key={idx} className="flex justify-between border-b border-gray-200 py-2">
                <span>{pair[0]}</span>
                <span className="text-right">{pair[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GALLERY - 3D Carousel */}
      <section className="py-20 px-4 md:px-6 bg-black overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-condensed text-ultra-condensed uppercase text-6xl md:text-8xl font-black text-white mb-16">
            SELECTED WORK
          </h2>
          <div ref={carouselRef} className="perspective-1500 preserve-3d">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group cursor-pointer preserve-3d"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 ${project.color} mix-blend-multiply opacity-40 group-hover:opacity-20 transition-opacity`} />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white text-2xl font-bold">{project.name}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section id="expertise" className="py-20 px-4 md:px-6 bg-mint">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-black text-sm md:text-base leading-relaxed mb-8">
              Our approach to strategy is precise, efficient, and grounded in expertise. We consider everything from competitive landscape and project goals to tactical plans for SEO and conversion optimization. Strategic planning sets the foundation for creative work, so we move through it quickly and deliberately. Our process eliminates the bottlenecks and endless conceptual discussions that drag out early phases and cause delays downstream.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-condensed text-ultra-condensed uppercase text-7xl md:text-9xl font-black leading-[0.85] mb-8">
                STRATEGY
              </h2>
              <button className="flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <p className="text-xs font-mono mb-6 text-gray-600">YOU READ THIS?</p>
                <div className="my-8">
                  <svg className="w-full h-32" viewBox="0 0 200 100">
                    <path 
                      d="M20,50 Q60,20 100,50 T180,50" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="text-mint"
                    />
                    <circle cx="180" cy="50" r="4" fill="currentColor" className="text-mint" />
                  </svg>
                </div>
                <div className="text-6xl font-black font-condensed mb-2">106B</div>
                <p className="text-xs text-gray-600">pages wireframed (it feels that way)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS WORD CLOUD */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="font-condensed text-ultra-condensed uppercase font-black leading-tight">
            <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center text-center">
              <span className="text-4xl md:text-6xl">NEW YORK CITY</span>
              <span className="text-2xl md:text-4xl text-purple-600">SOHO</span>
              <span className="text-3xl md:text-5xl">SEVEN</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center text-center mt-4">
              <span className="text-5xl md:text-7xl">COUNTRIES</span>
              <span className="text-3xl md:text-5xl">NEW JERSEY</span>
              <span className="text-4xl md:text-6xl text-red-600">18 YEARS</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center text-center mt-4">
              <span className="text-3xl md:text-5xl">ITALIANS</span>
              <span className="text-6xl md:text-8xl">SCRUBS</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center text-center mt-4">
              <span className="text-5xl md:text-7xl text-mint">PROJECTS</span>
              <span className="text-3xl md:text-5xl">BROTHERS</span>
              <span className="text-4xl md:text-6xl">COUNTRIES</span>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section id="news" className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-condensed text-ultra-condensed uppercase text-6xl md:text-8xl font-black mb-12">
            LATEST NEWS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&q=80"
                  alt="News"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="text-xs font-mono mb-2 text-gray-500">NEWS</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-mint transition-colors">
                Paper Tiger Wins Awwwards Site of the Day for Website Redesign
              </h3>
              <p className="text-sm text-gray-600">March 2024</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                  alt="News"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="text-xs font-mono mb-2 text-gray-500">NEWS</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-mint transition-colors">
                New Partnership Announcement: Strategic Design for Fortune 500
              </h3>
              <p className="text-sm text-gray-600">February 2024</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="font-condensed text-ultra-condensed uppercase text-7xl md:text-9xl lg:text-[12rem] font-black leading-[0.85] mb-8">
              PAPER TIGER®
            </h2>
            <div className="flex flex-wrap gap-6 md:gap-8 text-sm mb-8">
              <a href="#expertise" className="hover:text-mint transition-colors">Expertise</a>
              <a href="#clients" className="hover:text-mint transition-colors">Clients</a>
              <a href="#studio" className="hover:text-mint transition-colors">Studio</a>
              <a href="#news" className="hover:text-mint transition-colors">News</a>
            </div>
            <div className="text-sm">
              <a href="#contact" className="underline hover:text-mint transition-colors">
                New business inquires click here
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-gray-800">
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="hover:text-mint transition-colors">Privacy</a>
              <a href="#linkedin" className="hover:text-mint transition-colors flex items-center gap-1">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="#instagram" className="hover:text-mint transition-colors flex items-center gap-1">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <a href="#spotify" className="hover:text-mint transition-colors flex items-center gap-1">
                <Music className="w-4 h-4" /> Spotify
              </a>
            </div>
            <div className="text-sm text-gray-500">
              ©2024 Paper Tiger. All rights reserved. All wrongs reversed.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App